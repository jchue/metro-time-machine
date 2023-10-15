<script lang="ts" setup>
import { onMounted, ref, watch } from 'vue';
import { Map, type MapMouseEvent, NavigationControl, Popup } from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

import * as aLine19900714 from '@/geojson/a-line-1990-07-14.json';
import * as aLine199009 from '@/geojson/a-line-1990-09.json';
import * as aLine199102 from '@/geojson/a-line-1991-02.json';
import * as aLine from '@/geojson/a-line.json';
import * as bdLine19930130 from '@/geojson/bd-line-1993-01-30.json';
import * as bdLine19960713 from '@/geojson/bd-line-1996-07-13.json';
import * as bLine19990612 from '@/geojson/b-line-1999-06-12.json';
import * as bLine from '@/geojson/b-line.json';
import * as cLine from '@/geojson/c-line.json';
import * as dLine from '@/geojson/d-line.json';
import * as eLine20120428 from '@/geojson/e-line-2012-04-28.json';
import * as eLine20120620 from '@/geojson/e-line-2012-06-20.json';
import * as eLine20160520 from '@/geojson/e-line-2016-05-20.json';
import * as eLine from '@/geojson/e-line.json';
import * as kLine from '@/geojson/k-line-2022.json';
import * as lLine20030726 from '@/geojson/l-line-2003-07-26.json';
import * as lLine20091115 from '@/geojson/l-line-2009-11-15.json';
import * as lLine20160305 from '@/geojson/l-line-2016-03-05.json';
import * as gLine20051029 from '@/geojson/g-line-2005-10-29.json';
import * as gLine20120630 from '@/geojson/g-line-2012-06-30.json';
import * as gLine2018 from '@/geojson/g-line-2018.json';
import * as jLine20091213 from '@/geojson/j-line-2009-12-13.json';
import * as jLine201512 from '@/geojson/j-line-2015-12.json';

const mapTilerKey = import.meta.env.VITE_MAPTILER_KEY;

const currentDate = new Date().toISOString();
const activeDate = ref(currentDate);

function setActiveDate(newDate: string): void {
  activeDate.value = newDate;
}

function isLineActive(line: Line): boolean {
  return (
    new Date(line.startDate) <= new Date(activeDate.value) &&
    (new Date(activeDate.value) <= new Date(line.endDate) || !line.endDate)
  );
}

interface Line {
  id: string;
  startDate: string;
  endDate: string;
  geoJSON: Object;
  color: string;
  label: string;
  type: 'light-rail' | 'heavy-rail' | 'brt';
}

const lines: Line[] = [
  {
    id: 'a-line-1990-07-14',
    startDate: '1990-07-14',
    endDate: '1990-08-31',
    geoJSON: aLine19900714,
    color: '#0288d1',
    label: 'Metro Blue Line',
    type: 'light-rail',
  },
  {
    id: 'a-line-1990-09',
    startDate: '1990-09-01',
    endDate: '1991-02-13',
    geoJSON: aLine199009,
    color: '#0288d1',
    label: 'Metro Blue Line',
    type: 'light-rail',
  },
  {
    id: 'a-line-1991-02',
    startDate: '1991-02-14',
    endDate: '2023-06-15',
    geoJSON: aLine199102,
    color: '#0288d1',
    label: 'Metro Blue Line',
    type: 'light-rail',
  },
  {
    id: 'a-line',
    startDate: '2023-06-16',
    endDate: '',
    geoJSON: aLine,
    color: '#0072BC',
    label: 'Metro A Line',
    type: 'light-rail',
  },
  {
    id: 'bd-line-1993-01-30',
    startDate: '1993-01-30',
    endDate: '1996-07-12',
    geoJSON: bdLine19930130,
    color: '#EB131B',
    label: 'Metro Red Line',
    type: 'heavy-rail',
  },
  {
    id: 'b-line-1999-06-12',
    startDate: '1999-06-12',
    endDate: '2000-06-23',
    geoJSON: bLine19990612,
    color: '#EB131B',
    label: 'Metro Red Line',
    type: 'heavy-rail',
  },
  {
    id: 'b-line',
    startDate: '2000-06-24',
    endDate: '',
    geoJSON: bLine,
    color: '#EB131B',
    label: 'Metro B Line',
    type: 'heavy-rail',
  },
  {
    id: 'bd-line',
    startDate: '1996-07-13',
    endDate: '2005-12-31',
    geoJSON: dLine,
    color: '#EB131B',
    label: 'Metro Red Line',
    type: 'heavy-rail',
  },
  {
    id: 'c-line',
    startDate: '1995-08-12',
    endDate: '',
    geoJSON: cLine,
    color: '#58A738',
    label: 'Metro C Line',
    type: 'light-rail',
  },
  {
    id: 'd-line',
    startDate: '2006-01-01',
    endDate: '',
    geoJSON: dLine,
    color: '#A05DA5',
    label: 'Metro D Line',
    type: 'heavy-rail',
  },
  {
    id: 'e-line-2012-04-28',
    startDate: '2012-04-28',
    endDate: '2016-05-18',
    geoJSON: eLine20120428,
    color: '#0097a7',
    label: 'Metro Expo Line',
    type: 'light-rail',
  },
  {
    id: 'e-line-2012-06-20',
    startDate: '2012-06-20',
    endDate: '2016-05-19',
    geoJSON: eLine20120620,
    color: '#0097a7',
    label: 'Metro Expo Line',
    type: 'light-rail',
  },
  {
    id: 'e-line-2016-05-20',
    startDate: '2016-05-20',
    endDate: '2023-06-15',
    geoJSON: eLine20160520,
    color: '#0097a7',
    label: 'Metro Expo Line',
    type: 'light-rail',
  },
  {
    id: 'e-line',
    startDate: '2023-06-16',
    endDate: '',
    geoJSON: eLine,
    color: '#FDB913',
    label: 'Metro E Line',
    type: 'light-rail',
  },
  {
    id: 'k-line',
    startDate: '2022-10-07',
    endDate: '',
    geoJSON: kLine,
    color: '#E56DB1',
    label: 'Metro K Line',
    type: 'light-rail',
  },
  {
    id: 'l-line-2003-07-26',
    startDate: '2003-07-26',
    endDate: '2009-11-14',
    geoJSON: lLine20030726,
    color: '#f9a825',
    label: 'Metro Gold Line',
    type: 'light-rail',
  },
  {
    id: 'l-line-2009-11-15',
    startDate: '2009-11-15',
    endDate: '2016-03-04',
    geoJSON: lLine20091115,
    color: '#f9a825',
    label: 'Metro Gold Line',
    type: 'light-rail',
  },
  {
    id: 'l-line-2016-03-05',
    startDate: '2016-03-05',
    endDate: '2023-06-15',
    geoJSON: lLine20160305,
    color: '#f9a825',
    label: 'Metro L Line',
    type: 'light-rail',
  },
  {
    id: 'g-line-2005-10-29',
    startDate: '2005-10-29',
    endDate: '2012-06-29',
    geoJSON: gLine20051029,
    color: '#fc4c02',
    label: 'Metro G Line',
    type: 'brt',
  },
  {
    id: 'g-line-2012-06-30',
    startDate: '2012-06-30',
    endDate: '2017-12-31',
    geoJSON: gLine20120630,
    color: '#fc4c02',
    label: 'Metro G Line',
    type: 'brt',
  },
  {
    id: 'g-line-2018',
    startDate: '2018-01-01',
    endDate: '',
    geoJSON: gLine2018,
    color: '#fc4c02',
    label: 'Metro G Line',
    type: 'brt',
  },
  {
    id: 'j-line-2009-12-13',
    startDate: '2009-12-13',
    endDate: '',
    geoJSON: jLine20091213,
    color: '#adB8bf',
    label: 'Metro J Line',
    type: 'brt',
  },
  {
    id: 'j-line-201512',
    startDate: '2015-12-01',
    endDate: '',
    geoJSON: jLine201512,
    color: '#adB8bf',
    label: 'Metro J Line',
    type: 'brt',
  },
];

/* Extract dates */
let changeDates = lines.map((line) => {
  return line.startDate;
});

/* Get unique dates */
changeDates = [...new Set(changeDates)];

/* Sort dates */
changeDates.sort((a, b) => {
  if (a < b) {
    return -1;
  } else if (a > b) {
    return 1;
  }

  return 0;
});

const changeIndex = ref(0);

function setChangeIndex(newIndex: number): void {
  if (0 <= newIndex && newIndex < changeDates.length) {
    changeIndex.value = newIndex;

    const changeDates = document.getElementById('timeline')?.children;

    if (changeDates) {
      changeDates[newIndex].scrollIntoView({ behavior: 'smooth', inline: 'center' });
    }
  }
}

watch(changeIndex, () => {
  setActiveDate(changeDates[changeIndex.value]);
});

watch(activeDate, () => {
  lines.forEach((line) => {
    map.value.setLayoutProperty(line.id, 'visibility', isLineActive(line) ? 'visible' : 'none');
  });
});

const map = ref();
const mapContainer = ref();

function addLines() {
  lines.forEach((line) => {
    map.value.addSource(line.id, {
      type: 'geojson',
      data: line.geoJSON,
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
        'line-width': 3,
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
      map.value.setPaintProperty(line.id, 'line-width', 3);
      popup.remove();
    });
  });

  // Create a popup, but don't add it to the map yet.
  const popup = new Popup({
    closeButton: false,
    closeOnClick: false,
  });
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

    addLines();
  });

  setChangeIndex(changeDates.length - 1);
});
</script>

<template>
  <div class="map">
    <nav>
      <button v-on:click="setChangeIndex(changeIndex - 1)">Previous</button>

      <ul id="timeline">
        <li
          v-for="(date, index) in changeDates"
          v-bind:key="date"
          v-on:click="
            setActiveDate(date);
            setChangeIndex(index);
          "
          v-bind:style="{ color: date === activeDate ? 'hsla(160, 100%, 37%, 1)' : '' }"
        >
          {{ date }}
        </li>
      </ul>

      <button v-on:click="setChangeIndex(changeIndex + 1)">Next</button>
    </nav>

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
  padding: 1rem 1.25rem;
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
  padding: 0.5rem 0;
  white-space: nowrap;
}

#timeline li {
  display: inline-block;
  padding: 1rem 1rem;
}

#timeline li:hover {
  color: hsla(160, 100%, 37%, 1);
  cursor: pointer;
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
