import React, { useEffect } from 'react';

import './ParkingList.css';

const API_GHENT_PARKINSTATES_ENDPOINT = 'https://data.stad.gent/api/records/1.0/search/?dataset=bezetting-parkeergarages-real-time&facet=description';

const ParkingList = () => {

  useEffect(() => {
    async function fetchData () {
      const parkingStatesData = await getParkingStatesFromApi();
      console.log(parkingStatesData);
    }

    fetchData();
    
  }, [])

  const getParkingStatesFromApi = async () => {
    const response = await fetch(API_GHENT_PARKINSTATES_ENDPOINT);
    const jsonData = await response.json();

    return jsonData;
  };

  return (
    <div className="parking-list">
    PL
    </div>
  );
};

export default ParkingList;