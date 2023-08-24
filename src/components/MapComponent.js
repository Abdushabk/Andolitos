import React from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet'; // Import Leaflet directly for custom icon

const MapComponent = () => {
  const position = [52.511423790374906, 13.426948730290995];

  // Custom icon for the marker
  const customIcon = new L.Icon({
    iconUrl: 'https://andolitos.netlify.app/static/media/Andolitos.738a615ccf8affd19807.png', // Replace with your custom icon URL
    iconSize: [32, 32], // Adjust the size as needed
    iconAnchor: [16, 32],
  });

  return (
    <div className='map-container'>
    <MapContainer 
      center={position}
      zoom={60}
      style={{ width: '100%', height: '400px' }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      
      {/* Add a marker */}
      <Marker position={position} icon={customIcon}>
        {/* You can add a Popup here if you want */}
      </Marker>
    </MapContainer>
    </div>
  );
};

export default MapComponent;





