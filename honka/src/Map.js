// import React, { useState,useEffect } from 'react';
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// import L from 'leaflet';
// import 'leaflet/dist/leaflet.css';
// import axios from 'axios';

// const MumbaiMap = () => {
//   const [locations, setLocations] = useState([]);
//   const [selectedLocation, setSelectedLocation] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get('https://localhost:7153/api/jobs/user/user1%40example.com?pageNo=1');
//         setLocations(response.data.locations);
//       } catch (error) {
//         console.error(error);
//       }
//     };
//     fetchData();
//   }, []);
//   const handleMarkerClick = (location) => {
//     setSelectedLocation(location);
//   }

//   return (
//     <MapContainer center={[19.0760, 72.8777]} zoom={12} style={{ height: '500px', width: '100%' }}>
//       <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
//       {locations.map((location) => (
//         <Marker
//           key={location.id}
//           position={[location.latitude, location.longitude]}
//           onClick={() => handleMarkerClick(location)}
//         >
//           <Popup>
//             <div>
//               <h4>{location.header}</h4>
//               <p>{location.location}</p>
//               <p>{location.description}</p>
//             </div>
//           </Popup>
//         </Marker>
//       ))}
//       {selectedLocation && (
//         <Popup position={[selectedLocation.latitude, selectedLocation.longitude]}>
//           <div>
//             <h4>{selectedLocation.header}</h4>
//             <p>{selectedLocation.location}</p>
//             <p>{selectedLocation.description}</p>
//           </div>
//         </Popup>
//       )}
//     </MapContainer>
//   );
// }

// export default MumbaiMap;


import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import axios from 'axios';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import myIcon from './img/icons8-location-16.png';

const MumbaiMap = () => {
  const [locations, setLocations] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://localhost:7153/api/jobs/user/user1%40example.com?pageNo=1');
        console.log(response.data[0])
        setLocations(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const myMarkerIcon = L.icon({
    iconUrl: myIcon,
    iconSize: [25, 41],
    iconAnchor: [12.5, 41],
    popupAnchor:[0,-41],
});

  const handleMarkerClick = (location) => {
    setSelectedLocation(location);
  }

  return (
    <div className='mt-5'>

    <MapContainer center={[18.9217, 72.8342]} zoom={12} style={{ height: '500px', width: '100%' }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {locations.map((location) => (
        <Marker
          key={location.header}
          position={[location.latitude, location.longitude]}
          icon = {myMarkerIcon}
          onClick={() => handleMarkerClick(location)}
        >
          <Popup>
            <div>
              <h4>{location.header}</h4>
              <p>{location.address}</p>
              <p>{location.description}</p>
            </div>
          </Popup>
        </Marker>
      ))}
      {selectedLocation && (
        <Popup position={[selectedLocation.latitude, selectedLocation.longitude]}>
          <div>
            <h4>{selectedLocation.name}</h4>
            <p>{selectedLocation.address}</p>
            <p>{selectedLocation.description}</p>
          </div>
        </Popup>
      )}
    </MapContainer>
    </div>
  );
}

export default MumbaiMap;
