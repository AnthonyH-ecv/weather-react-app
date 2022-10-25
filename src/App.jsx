import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  REACT_APP_WEATHER_API_TOKEN,
  REACT_APP_WEATHER_API_BASE_URL,
} from './api';

const App = () => {
  const [data, setData] = useState(null);
  const [city, setCity] = useState('Paris');

  useEffect(() => {
    axios
      .get(
        `${REACT_APP_WEATHER_API_BASE_URL}/weather?q=${city}&appid=${REACT_APP_WEATHER_API_TOKEN}`
      )
      .then((response) => setData(response.data));
  }, [city]);

  console.log(data);
  return <div>Weather App</div>;
};

export default App;
