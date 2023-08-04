import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix Leaflet's icon path issues
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

const JobMap = () => {
  return (
    <div className="container mt-5">
      <h2>Job Distribution Map</h2>
      <MapContainer center={[37.7749, -122.4194]} zoom={6} style={{ height: '400px', width: '100%' }} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[37.7749, -122.4194]}>
          <Popup>
            Job Distribution Center <br /> San Diego, CA.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default JobMap;
