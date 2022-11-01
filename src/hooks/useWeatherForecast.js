import axios from 'axios';
import { useState } from 'react';
import {
  REACT_APP_WEATHER_API_BASE_URL,
  REACT_APP_WEATHER_API_TOKEN,
} from '../api';

const useWeatherForecast = () => {
  const [isError, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [currentWeather, setCurrentWeather] = useState(null);

  const getCurrentWeather = async (location) => {
    const { data } = await axios(
      `${REACT_APP_WEATHER_API_BASE_URL}/weather?q=${location}&appid=${REACT_APP_WEATHER_API_TOKEN}`
    );

    if (!data || data.length === 0) {
      setError('There is no such location');
      setIsLoading(false);
      return;
    }

    return data;
  };

  const submitRequest = async (location) => {
    const response = await getCurrentWeather(location);
    setCurrentWeather(response);
  };

  return {
    isError,
    isLoading,
    currentWeather,
    submitRequest,
  };
};
export default useWeatherForecast;
