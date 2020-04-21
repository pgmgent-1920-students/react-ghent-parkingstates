import React, { useEffect, useState } from 'react';

import ParkingListItem from './ParkingListItem';

import './ParkingList.css';

const API_GHENT_PARKINSTATES_ENDPOINT = 'https://data.stad.gent/api/records/1.0/search/?dataset=bezetting-parkeergarages-real-time&facet=description';

const ParkingList = () => {
  const [parkings, setParkings] = useState(null);

  useEffect(() => {
    async function fetchData () {
      const parkingStatesData = await getParkingStatesFromApi();
      setParkings(parkingStatesData.records);
    }
       
    if (parkings === null) {
      fetchData(); 
    }

    const timerId = setInterval(() => fetchData(), 30000);
    return () => clearInterval(timerId);
  }, []);

  const getParkingStatesFromApi = async () => {
    const response = await fetch(API_GHENT_PARKINSTATES_ENDPOINT);
    const jsonData = await response.json();

    return jsonData;
  };

  return (
    <div className="parking-list">
      {!!parkings && parkings.map((parking) => {
        return (
          <ParkingListItem key={parking.fields.id} parking={parking} />
        )
      })}
    </div>
  );
};

export default ParkingList;