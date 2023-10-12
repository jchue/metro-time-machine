<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import { Map, type MapMouseEvent, NavigationControl, Popup } from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

import * as aLine from '@/geojson/a-line.json';
import * as bLine from '@/geojson/b-line.json';
import * as cLine from '@/geojson/c-line.json';
import * as dLine from '@/geojson/d-line.json';
import * as eLine from '@/geojson/e-line.json';
import * as kLine from '@/geojson/k-line-2022.json';

const mapTilerKey = import.meta.env.VITE_MAPTILER_KEY;

const lines = [
  {
    id: 'a-line',
    startDate: '',
    endDate: '',
    geoJSON: aLine,
    color: '#0072BC',
    label: 'Metro A Line',
  },
  {
    id: 'b-line',
    startDate: '',
    endDate: '',
    geoJSON: bLine,
    color: '#EB131B',
    label: 'Metro B Line',
  },
  {
    id: 'c-line',
    startDate: '',
    endDate: '',
    geoJSON: cLine,
    color: '#58A738',
    label: 'Metro C Line',
  },
  {
    id: 'd-line',
    startDate: '',
    endDate: '',
    geoJSON: dLine,
    color: '#A05DA5',
    label: 'Metro D Line',
  },
  {
    id: 'e-line',
    startDate: '',
    endDate: '',
    geoJSON: eLine,
    color: '#FDB913',
    label: 'Metro E Line',
  },
  {
    id: 'k-line',
    startDate: '',
    endDate: '',
    geoJSON: kLine,
    color: '#E56DB1',
    label: 'Metro K Line',
  },
];

const map = ref();
const mapContainer = ref();

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
  });
});
</script>

<template>
  <div class="map" ref="mapContainer"></div>
</template>

<style>
.map {
  height: 100%;
}

.maplibregl-popup-content {
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.25);
  max-width: 250px;
  padding: 0.25rem 0.5rem;
}
</style>
