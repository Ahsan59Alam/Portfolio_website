import React, { useEffect, useState } from 'react';
import './Dashboard.css';

function Dashboard() {
  const [locationData, setLocationData] = useState(null);

  useEffect(() => {
    fetch(`https://geocode.maps.co/search?q=Sector%2062%20,%20Noida&api_key=66a225fea6c1f755105031ulr3a6811`)
      .then(response => response.json())
      .then(data => setLocationData(data))
      .catch(error => console.error('Error fetching data:', error));
      
    }, []);
   

  return (
    <section id="dashboard">
      <h2>Dashboard</h2>
      {locationData ? (
        <div>
          <p>Location: {locationData.location}</p>
          <p>Coordinates: {locationData.coordinates}</p>
          <p>Other Info: {locationData.otherInfo}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </section>
  );
}

export default Dashboard;
