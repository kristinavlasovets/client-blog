'use client';

import React, { FC } from 'react';
import { Icon, LatLngExpression } from 'leaflet';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

import { coordinates } from '@/constants/coordinates';

import 'leaflet/dist/leaflet.css';
import styles from './styles.module.scss';

const icon = new Icon({
  iconUrl: '/assets/icons/icon_location.svg',
  iconSize: [38, 95],
  shadowSize: [50, 64],
  iconAnchor: [22, 94],
  popupAnchor: [-3, -76],
});

const Map: FC = () => (
  <MapContainer className={styles.map} center={[53.8843138, 27.3131922]} zoom={7}>
    <TileLayer url="https://tile.openstreetmap.org/{z}/{x}/{y}.png" />
    {coordinates.map(({ gps, popUp }) => (
      <Marker position={gps as LatLngExpression} icon={icon} key={popUp}>
        <Popup>
          <p>{popUp}</p>
        </Popup>
      </Marker>
    ))}
  </MapContainer>
);

export default Map;
