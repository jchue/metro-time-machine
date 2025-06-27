<script lang="ts" setup>
import { onMounted, ref, watch } from 'vue';
import { Map, type MapMouseEvent, NavigationControl, Popup } from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import { events, lines, type Line } from '@/components/lines';

const mapTilerKey = import.meta.env.VITE_MAPTILER_KEY;

const currentDate = new Date().toISOString();
const activeDate = ref(currentDate);
const eventIndex = ref(0);
const map = ref();
const mapContainer = ref();

/* Update active date when index changes */
watch(eventIndex, () => {
  setActiveDate(events[eventIndex.value].date);
});

/* Draw active lines based on active date */
watch(activeDate, () => {
  if (!map.value.loaded()) return;

  lines.forEach((line) => {
    map.value.setLayoutProperty(line.id, 'visibility', isLineActive(line) ? 'visible' : 'none');
  });
});

function setActiveDate(newDate: string): void {
  activeDate.value = newDate;
}

function setEventIndex(newIndex: number): void {
  if (0 <= newIndex && newIndex < events.length) {
    eventIndex.value = newIndex;

    const changeDates = document.getElementById('timeline')?.children;

    if (changeDates) {
      changeDates[newIndex].scrollIntoView({ behavior: 'smooth', inline: 'center' });
    }
  }
}

function isLineActive(line: Line): boolean {
  return (
    new Date(line.startDate) <= new Date(activeDate.value) &&
    (new Date(activeDate.value) <= new Date(line.endDate) || !line.endDate)
  );
}

onMounted(() => {
  map.value = new Map({
    attributionControl: false,
    container: mapContainer.value, // container id
    style: `https://api.maptiler.com/maps/dataviz/style.json?key=${mapTilerKey}`, // style URL
    center: [-118.25, 34.05], // starting position [lng, lat]
    zoom: 9, // starting zoom
  });

  map.value.on('load', () => {
    map.value.addControl(new NavigationControl(), 'top-right');

    lines.forEach((line) => {
      let data;

      if (Array.isArray(line.geoJSON)) {
        /* If multiple files are passed, merge the features */
        const features = line.geoJSON
          .map((file) => {
            return file.features;
          })
          .reduce((pre, cur) => {
            return pre.concat(cur);
          });

        data = {
          type: 'FeatureCollection',
          features,
        };
      } else {
        data = line.geoJSON;
      }

      map.value.addSource(line.id, {
        type: 'geojson',
        data,
      });

      map.value.addLayer({
        id: line.id,
        type: 'line',
        source: line.id,
        layout: {
          'line-join': 'round',
          'line-cap': 'round',
          visibility: isLineActive(line) ? 'visible' : 'none',
        },
        paint: {
          'line-color': line.color,
          'line-width': line.confirmed ? 3 : 2,
          'line-dasharray': line.confirmed ? [1, 0] : [1, 3],
        },
      });

      map.value.on('mouseover', line.id, (e: MapMouseEvent) => {
        // Bring to front
        map.value.moveLayer(line.id);

        map.value.getCanvas().style.cursor = 'pointer';
        map.value.setPaintProperty(line.id, 'line-width', 6);

        popup.setHTML(line.label).setLngLat(e.lngLat).addTo(map.value);
        popup.trackPointer();
      });

      map.value.on('mouseleave', line.id, () => {
        map.value.getCanvas().style.cursor = 'grab';
        map.value.setPaintProperty(line.id, 'line-width', line.confirmed ? 3 : 2);
        popup.remove();
      });
    });

    // Create a popup, but don't add it to the map yet.
    const popup = new Popup({
      closeButton: false,
      closeOnClick: false,
    });
  });

  /* Get event as of current date */
  let i = events.length - 1;
  for (i; currentDate < events[i].date; i--) setEventIndex(i - 1);
});
</script>

<template>
  <div class="map">
    <div class="container">
      <nav>
        <button v-on:click="setEventIndex(eventIndex - 1)">←</button>

        <ul id="timeline">
          <li
            v-for="(event, index) in events"
            v-bind:key="event.date"
            v-on:click="
              setActiveDate(event.date);
              setEventIndex(index);
            "
            v-bind:class="{ active: event.date === activeDate }"
          >
            {{
              event.label ||
              new Date(`${event.date}T00:00:00-08:00`).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })
            }}
          </li>
        </ul>

        <button v-on:click="setEventIndex(eventIndex + 1)">→</button>
      </nav>

      <div class="caption">{{ events[eventIndex].caption }}</div>
    </div>
    <div ref="mapContainer"></div>
  </div>
</template>

<style scoped>
.map {
  display: flex;
  flex-direction: column;
  height: 100%;
}

nav {
  align-items: center;
  display: flex;
}

button {
  background-color: var(--color-text);
  border: none;
  color: var(--color-background);
  cursor: pointer;
  display: inline-block;
  font-size: 1rem;
  padding: 0.5rem 1.25rem;
}

button:first-child {
  border-radius: 0.5rem 0 0 0.5rem;
  box-shadow: 5px 0 5px -4px rgba(0, 0, 0, 0.5);
}

button:last-child {
  border-radius: 0 0.5rem 0.5rem 0;
  box-shadow: -5px 0 5px -4px rgba(0, 0, 0, 0.5);
}

button:hover {
  background-color: var(--vt-c-text-light-2);
}

button:active {
  background-color: var(--color-text);
}

#timeline {
  display: inline-block;
  overflow-x: scroll;
  margin: 0;
  padding: 0.5rem 0;
  white-space: nowrap;
}

#timeline li {
  display: inline-block;
  font-size: 15px;
  line-height: 1;
  margin: 0.5rem 1rem;
  padding: 0.25rem 0.5rem;
}

#timeline li:hover {
  color: hsla(160, 100%, 37%, 1);
  cursor: pointer;
}

#timeline li.active {
  border: 2px solid var(--color-text);
  border-radius: 0.25rem;
  font-weight: bold;
}

#timeline li.active:hover {
  color: var(--color-text);
  cursor: default;
}

.caption {
  font-size: 15px;
  font-weight: bold;
  margin-bottom: 0.5rem;
  padding: 0.5rem 0;
  text-align: center;
}
</style>

<style>
.maplibregl-map {
  flex-grow: 1;
}

.maplibregl-popup-content {
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.25);
  max-width: 250px;
  padding: 0.25rem 0.5rem;
}
</style>
