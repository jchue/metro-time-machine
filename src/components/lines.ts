import * as aLine19900714 from '@/geojson/a-line-1990-07-14.json';
import * as aLine199009 from '@/geojson/a-line-1990-09.json';
import * as aLine199102 from '@/geojson/a-line-1991-02.json';
import * as aLine from '@/geojson/a-line.json';
import * as aLine2025 from '@/geojson/a-line-2025.json';
import * as aLine2028 from '@/geojson/a-line-2028.json';
import * as bdLine19930130 from '@/geojson/bd-line-1993-01-30.json';
import * as bLine19990612 from '@/geojson/b-line-1999-06-12.json';
import * as bLine from '@/geojson/b-line.json';
import * as cLine from '@/geojson/c-line.json';
import * as cLineFuture from '@/geojson/c-line-2024.json';
import * as dLine from '@/geojson/d-line.json';
import * as dLine2024 from '@/geojson/d-line-2024.json';
import * as dLine2025 from '@/geojson/d-line-2025.json';
import * as dLine2027 from '@/geojson/d-line-2027.json';
import * as eLine20120428 from '@/geojson/e-line-2012-04-28.json';
import * as eLine20120620 from '@/geojson/e-line-2012-06-20.json';
import * as eLine20160520 from '@/geojson/e-line-2016-05-20.json';
import * as eLine from '@/geojson/e-line.json';
import * as kLine from '@/geojson/k-line-2022.json';
import * as kLineFuture from '@/geojson/k-line-2024.json';
import * as lLine20030726 from '@/geojson/l-line-2003-07-26.json';
import * as lLine20091115 from '@/geojson/l-line-2009-11-15.json';
import * as lLine20160305 from '@/geojson/l-line-2016-03-05.json';
import * as gLine20051029 from '@/geojson/g-line-2005-10-29.json';
import * as gLine20120630 from '@/geojson/g-line-2012-06-30.json';
import * as gLine2018 from '@/geojson/g-line-2018.json';
import * as jLine20091213 from '@/geojson/j-line-2009-12-13.json';
import * as jLine201512 from '@/geojson/j-line-2015-12.json';
import * as ckLineExtensionToTorrance from '@/geojson/ck-line-extension-to-torrance.json';
import * as eastSanFernandoValleyLightRailTransitProject from '@/geojson/east-san-fernando-valley-light-rail-transit-project.json';
import * as eastsideTransitCorridorPh2 from '@/geojson/eastside-transit-corridor-ph2.json';
import * as lincolnBoulevardTransitCorridor from '@/geojson/lincoln-boulevard-transit-corridor.json';
import * as metroKLineNorthernExtension from '@/geojson/metro-k-line-northern-extension.json';
import * as northHollywoodToPasadenaTransitCorridor from '@/geojson/north-hollywood-to-pasadena-transit-corridor.json';
import * as sepulvedaTransitCorridor from '@/geojson/sepulveda-transit-corridor.json';
import * as sepulvedaTransitCorridorPhase2 from '@/geojson/sepulveda-transit-corridor-phase-2.json';
import * as vermontTransitCorridor from '@/geojson/vermont-transit-corridor.json';
import * as vermontTransitCorridorSouthBayExtension from '@/geojson/vermont-transit-corridor-south-bay-extension.json';
import * as westSantaAnaBranchTransitCorridor from '@/geojson/west-santa-ana-branch-transit-corridor.json';

export interface Line {
  id: string;
  startDate: string;
  endDate: string;
  geoJSON: Object;
  color: string;
  label: string;
  type: 'light-rail' | 'heavy-rail' | 'brt';
  confirmed?: boolean;
}

interface Event {
  date: string;
  label?: string;
  caption: string;
}

export const lines: Line[] = [
  {
    id: 'a-line-1990-07-14',
    startDate: '1990-07-14',
    endDate: '1990-08-31',
    geoJSON: aLine19900714,
    color: '#0288d1',
    label: 'Metro Blue Line',
    type: 'light-rail',
    confirmed: true,
  },
  {
    id: 'a-line-1990-09',
    startDate: '1990-09-01',
    endDate: '1991-02-13',
    geoJSON: aLine199009,
    color: '#0288d1',
    label: 'Metro Blue Line',
    type: 'light-rail',
    confirmed: true,
  },
  {
    id: 'a-line-1991-02',
    startDate: '1991-02-14',
    endDate: '2023-06-15',
    geoJSON: aLine199102,
    color: '#0288d1',
    label: 'Metro Blue Line',
    type: 'light-rail',
    confirmed: true,
  },
  {
    id: 'a-line',
    startDate: '2023-06-16',
    endDate: '2024-12-31',
    geoJSON: aLine,
    color: '#0072BC',
    label: 'Metro A Line',
    type: 'light-rail',
    confirmed: true,
  },
  {
    id: 'a-line-2025',
    startDate: '2025-01-01',
    endDate: '2027-12-31',
    geoJSON: aLine2025,
    color: '#0072BC',
    label: 'Metro A Line',
    type: 'light-rail',
    confirmed: true,
  },
  {
    id: 'a-line-2028',
    startDate: '2028-01-01',
    endDate: '',
    geoJSON: aLine2028,
    color: '#0072BC',
    label: 'Metro A Line',
    type: 'light-rail',
    confirmed: true,
  },
  {
    id: 'bd-line-1993-01-30',
    startDate: '1993-01-30',
    endDate: '1996-07-12',
    geoJSON: bdLine19930130,
    color: '#EB131B',
    label: 'Metro Red Line',
    type: 'heavy-rail',
    confirmed: true,
  },
  {
    id: 'b-line-1999-06-12',
    startDate: '1999-06-12',
    endDate: '2000-06-23',
    geoJSON: bLine19990612,
    color: '#EB131B',
    label: 'Metro Red Line',
    type: 'heavy-rail',
    confirmed: true,
  },
  {
    id: 'b-line',
    startDate: '2000-06-24',
    endDate: '',
    geoJSON: bLine,
    color: '#EB131B',
    label: 'Metro B Line',
    type: 'heavy-rail',
    confirmed: true,
  },
  {
    id: 'bd-line',
    startDate: '1996-07-13',
    endDate: '2005-12-31',
    geoJSON: dLine,
    color: '#EB131B',
    label: 'Metro Red Line',
    type: 'heavy-rail',
    confirmed: true,
  },
  {
    id: 'c-line',
    startDate: '1995-08-12',
    endDate: '2023-12-31',
    geoJSON: cLine,
    color: '#58A738',
    label: 'Metro C Line',
    type: 'light-rail',
    confirmed: true,
  },
  {
    id: 'c-line-future',
    startDate: '2024-01-01',
    endDate: '',
    geoJSON: cLineFuture,
    color: '#58A738',
    label: 'Metro C Line',
    type: 'light-rail',
    confirmed: true,
  },
  {
    id: 'd-line',
    startDate: '2006-01-01',
    endDate: '2023-12-31',
    geoJSON: dLine,
    color: '#A05DA5',
    label: 'Metro D Line',
    type: 'heavy-rail',
    confirmed: true,
  },
  {
    id: 'd-line-2024',
    startDate: '2024-01-01',
    endDate: '2024-12-31',
    geoJSON: dLine2024,
    color: '#A05DA5',
    label: 'Metro D Line',
    type: 'heavy-rail',
    confirmed: true,
  },
  {
    id: 'd-line-2025',
    startDate: '2025-01-01',
    endDate: '2026-12-31',
    geoJSON: dLine2025,
    color: '#A05DA5',
    label: 'Metro D Line',
    type: 'heavy-rail',
    confirmed: true,
  },
  {
    id: 'd-line-2027',
    startDate: '2027-01-01',
    endDate: '',
    geoJSON: dLine2027,
    color: '#A05DA5',
    label: 'Metro D Line',
    type: 'heavy-rail',
    confirmed: true,
  },
  {
    id: 'e-line-2012-04-28',
    startDate: '2012-04-28',
    endDate: '2016-05-18',
    geoJSON: eLine20120428,
    color: '#0097a7',
    label: 'Metro Expo Line',
    type: 'light-rail',
    confirmed: true,
  },
  {
    id: 'e-line-2012-06-20',
    startDate: '2012-06-20',
    endDate: '2016-05-19',
    geoJSON: eLine20120620,
    color: '#0097a7',
    label: 'Metro Expo Line',
    type: 'light-rail',
    confirmed: true,
  },
  {
    id: 'e-line-2016-05-20',
    startDate: '2016-05-20',
    endDate: '2023-06-15',
    geoJSON: eLine20160520,
    color: '#0097a7',
    label: 'Metro Expo Line',
    type: 'light-rail',
    confirmed: true,
  },
  {
    id: 'e-line',
    startDate: '2023-06-16',
    endDate: '',
    geoJSON: eLine,
    color: '#fdb913',
    label: 'Metro E Line',
    type: 'light-rail',
    confirmed: true,
  },
  {
    id: 'k-line',
    startDate: '2022-10-07',
    endDate: '2023-12-31',
    geoJSON: kLine,
    color: '#e56db1',
    label: 'Metro K Line',
    type: 'light-rail',
    confirmed: true,
  },
  {
    id: 'k-line-future',
    startDate: '2024-01-01',
    endDate: '',
    geoJSON: kLineFuture,
    color: '#e56db1',
    label: 'Metro K Line',
    type: 'light-rail',
    confirmed: true,
  },
  {
    id: 'l-line-2003-07-26',
    startDate: '2003-07-26',
    endDate: '2009-11-14',
    geoJSON: lLine20030726,
    color: '#f9a825',
    label: 'Metro Gold Line',
    type: 'light-rail',
    confirmed: true,
  },
  {
    id: 'l-line-2009-11-15',
    startDate: '2009-11-15',
    endDate: '2016-03-04',
    geoJSON: lLine20091115,
    color: '#f9a825',
    label: 'Metro Gold Line',
    type: 'light-rail',
    confirmed: true,
  },
  {
    id: 'l-line-2016-03-05',
    startDate: '2016-03-05',
    endDate: '2023-06-15',
    geoJSON: lLine20160305,
    color: '#f9a825',
    label: 'Metro L Line',
    type: 'light-rail',
    confirmed: true,
  },
  {
    id: 'g-line-2005-10-29',
    startDate: '2005-10-29',
    endDate: '2012-06-29',
    geoJSON: gLine20051029,
    color: '#fc4c02',
    label: 'Metro G Line',
    type: 'brt',
    confirmed: true,
  },
  {
    id: 'g-line-2012-06-30',
    startDate: '2012-06-30',
    endDate: '2017-12-31',
    geoJSON: gLine20120630,
    color: '#fc4c02',
    label: 'Metro G Line',
    type: 'brt',
    confirmed: true,
  },
  {
    id: 'g-line-2018',
    startDate: '2018-01-01',
    endDate: '',
    geoJSON: gLine2018,
    color: '#fc4c02',
    label: 'Metro G Line',
    type: 'brt',
    confirmed: true,
  },
  {
    id: 'j-line-2009-12-13',
    startDate: '2009-12-13',
    endDate: '',
    geoJSON: jLine20091213,
    color: '#adB8bf',
    label: 'Metro J Line',
    type: 'brt',
    confirmed: true,
  },
  {
    id: 'j-line-201512',
    startDate: '2015-12-01',
    endDate: '',
    geoJSON: jLine201512,
    color: '#adB8bf',
    label: 'Metro J Line',
    type: 'brt',
    confirmed: true,
  },
  {
    id: 'ck-line-ext',
    startDate: '2030-01-02',
    endDate: '',
    geoJSON: ckLineExtensionToTorrance,
    color: '#e56db1',
    label: 'C/K Line Extension to Torrance',
    type: 'light-rail',
    confirmed: false,
  },
  {
    id: 'esfvlrtp',
    startDate: '2030-01-01',
    endDate: '',
    geoJSON: eastSanFernandoValleyLightRailTransitProject,
    color: '#029cae',
    label: 'East San Fernando Valley Light Rail Transit Project',
    type: 'light-rail',
    confirmed: false,
  },
  {
    id: 'etcp2',
    startDate: '2035-01-01',
    endDate: '',
    geoJSON: eastsideTransitCorridorPh2,
    color: '#fdb913',
    label: 'Eastside Transit Corridor Phase 2',
    type: 'light-rail',
    confirmed: false,
  },
  {
    id: 'k-line-northern-ext',
    startDate: '2047-01-01',
    endDate: '',
    geoJSON: metroKLineNorthernExtension,
    color: '#e56db1',
    label: 'Metro K Line Northern Extension',
    type: 'light-rail',
    confirmed: false,
  },
  {
    id: 'lincoln-blvd-transit-corridor',
    startDate: '2047-01-01',
    endDate: '',
    geoJSON: lincolnBoulevardTransitCorridor,
    color: '#1e6bae',
    label: 'Lincoln Boulevard Transit Corridor',
    type: 'brt',
    confirmed: false,
  },
  {
    id: 'noho-to-pasadena-transit-corridor',
    startDate: '2027-01-01',
    endDate: '',
    geoJSON: northHollywoodToPasadenaTransitCorridor,
    color: '#02adee',
    label: 'North Hollywood to Pasadena Transit Corridor',
    type: 'brt',
    confirmed: false,
  },
  {
    id: 'sepulveda-transit-corridor',
    startDate: '2033-01-01',
    endDate: '',
    geoJSON: sepulvedaTransitCorridor,
    color: '#e1048d',
    label: 'Sepulveda Transit Corridor',
    type: 'heavy-rail',
    confirmed: false,
  },
  {
    id: 'sepulveda-transit-corridor-2',
    startDate: '2059-01-01',
    endDate: '',
    geoJSON: sepulvedaTransitCorridorPhase2,
    color: '#e1048d',
    label: 'Sepulveda Transit Corridor Phase 2',
    type: 'heavy-rail',
    confirmed: false,
  },
  {
    id: 'vermont-transit-corridor',
    startDate: '2028-01-02',
    endDate: '',
    geoJSON: vermontTransitCorridor,
    color: '#0c8649',
    label: 'Vermont Transit Corridor',
    type: 'brt',
    confirmed: false,
  },
  {
    id: 'vermont-transit-corridor-ext',
    startDate: '3000-01-01',
    endDate: '',
    geoJSON: vermontTransitCorridorSouthBayExtension,
    color: '#0c8649',
    label: 'Vermont Transit Corridor South Bay Extension',
    type: 'brt',
    confirmed: false,
  },
  {
    id: 'wsab',
    startDate: '2035-01-01',
    endDate: '',
    geoJSON: westSantaAnaBranchTransitCorridor,
    color: '#b585b7',
    label: 'West Santa Ana Branch Transit Corridor',
    type: 'light-rail',
    confirmed: false,
  },
];

export const events: Event[] = [
  {
    date: '1990-07-14',
    caption: 'Blue Line opens',
  },
  {
    date: '1990-09-01',
    caption: 'Blue Line extended to a loop through downtown Long Beach',
  },
  {
    date: '1991-02-14',
    caption: 'Blue Line extended from Pico to 7th Street/Metro Center',
  },
  {
    date: '1993-01-30',
    caption:
      'Red Line MOS-1 segment, consisting of five stations from Union Station to Westlake/MacArthur Park, opens',
  },
  {
    date: '1995-08-12',
    caption: 'Green Line opens',
  },
  {
    date: '1996-07-13',
    caption:
      'Red Line MOS-2A segment, consisting of three new stations between Westlake/MacArthur Park and Wilshire/Western, opens',
  },
  {
    date: '1999-06-12',
    caption:
      'Red Line MOS-2B segment, consisting of five stations from Wilshire/Vermont to Hollywood/Vine, opens',
  },
  {
    date: '2000-06-24',
    caption: 'Red Line MOS-3 segment, extending from Hollywood/Vine to  North Hollywood, opens',
  },
  {
    date: '2003-07-26',
    caption: 'Gold Line opens between Union Station and Sierra Madre Villa',
  },
  {
    date: '2005-10-29',
    caption: 'Orange Line BRT opens between North Hollywood and Warner Center',
  },
  {
    date: '2006-01-01',
    caption: 'Red Line branch to Wilshire/Western designated as the "Purple Line"',
  },
  {
    date: '2009-11-15',
    caption:
      'First phase of the Gold Line Eastside Extension, extending the Gold Line from Union Station to Atlantic Boulevard near Monterey Park with eight new stations, opens',
  },
  {
    date: '2009-12-13',
    caption:
      'Silver Line BRT opens along the El Monte Busway and the Harbor Transitway between Harbor Gateway Transit Center and El Monte station',
  },
  {
    date: '2012-04-28',
    caption:
      'Most stations for the first phase of the Expo Line, an 8.6-mile (13.8 km) section between Downtown Los Angeles and Culver City, opens',
  },
  {
    date: '2012-06-20',
    caption:
      'Remaining stations for the first phase of the Expo Line open, comprised of Culver City as well as the infill Farmdale station between Expo/La Brea and Expo/Crenshaw',
  },
  {
    date: '2012-06-30',
    caption:
      'Orange Line BRT Chatsworth Extension, connecting Canoga northward to the Metrolink station in Chatsworth, opens',
  },
  {
    date: '2015-12-01',
    caption:
      'Metro Express 450X bus combines into Silver Line BRT, eventually leading into a service pattern that serves San Pedro',
  },
  {
    date: '2016-03-05',
    caption:
      'Gold Line Foothill Extension Phase 2A, running from Sierra Madre Villa station in Pasadena to APU/Citrus College station in Azusa, opens',
  },
  {
    date: '2016-05-20',
    caption: 'Expo Phase II between Culver City and Santa Monica opens',
  },
  {
    date: '2018-01-01',
    caption:
      'Warner Center removed from the Orange Line, with a frequent local shuttle service connecting it to Canoga',
  },
  {
    date: '2019-11-02',
    caption: 'Metro lines begin transition from colors to letters',
  },
  {
    date: '2022-10-07',
    caption:
      'K Line initial segment, from the E Line at Expo/Crenshaw to Westchester/Veterans, opens',
  },
  {
    date: '2023-06-16',
    caption:
      'Regional Connector in downtown is completed, connecting the A, E, and L Lines into two routes, the north-to-south A Line and the east-to-west E Line',
  },
  {
    date: '2024-01-01',
    label: '2024',
    caption: 'Purple (D Line) Extension Transit Project Section 1 from Wilshire/Western to Wilshire/La Cienega',
  },
  {
    date: '2025-01-01',
    label: '2025',
    caption: 'Purple (D Line) Extension Transit Project Section 2 from Wilshire/La Cienega to Century City/Constellation, Foothill Extension from Glendora to Pomona',
  },
  {
    date: '2027-01-01',
    label: '2027',
    caption: 'Purple (D Line) Extension Transit Project Section 3 from Century City/Constellation to Westwood/VA Hospital, North Hollywood to Pasadena Transit Corridor',
  },
  {
    date: '2028-01-01',
    label: '2028',
    caption: 'Foothill Extension from from Pomona to Montclair',
  },
  {
    date: '2028-01-02',
    label: '2028-2030',
    caption: 'Vermont Transit Corridor',
  },
  {
    date: '2030-01-01',
    label: '2030',
    caption: 'East San Fernando Valley Light Rail Transit Project',
  },
  {
    date: '2030-01-02',
    label: '2030-2033',
    caption: 'C Line Extension to Torrance',
  },
  {
    date: '2033-01-01',
    label: '2033-2035',
    caption: 'Sepulveda Transit Corridor Project',
  },
  {
    date: '2035-01-01',
    label: '2035',
    caption: 'Eastside Transit Corridor Phase 2, West Santa Ana Branch Transit Corridor',
  },
  {
    date: '2047-01-01',
    label: '2047',
    caption: 'Metro K Line Northern Extension, Lincoln Boulevard Transit Corridor',
  },
  {
    date: '2059-01-01',
    label: '2059',
    caption: 'Sepulveda Transit Corridor Phase 2 to LAX People Mover',
  },
  {
    date: '3000-01-01',
    label: 'Other',
    caption: 'Vermont Transit Corridor South Bay Extension',
  },
].sort((a, b) => {
  if (a.date < b.date) {
    return -1;
  } else if (a.date > b.date) {
    return 1;
  }

  return 0;
});
