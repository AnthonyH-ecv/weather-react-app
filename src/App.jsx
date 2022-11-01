import React, { useState } from 'react';
import useWeatherForecast from './hooks/useWeatherForecast';

const App = () => {
  const [data, setData] = useState(null);
  const [city, setCity] = useState('Paris');
  const { isError, isLoading, currentWeather, submitRequest } =
    useWeatherForecast();

  submitRequest('Paris');
  return (
    <div>
      {!currentWeather && (
        <>
          {/* form */}
          {!isLoading && <h1>Form</h1>}
          {/* Loader */}
          {isLoading && <h1>Loader</h1>}
          {/* Error */}
          {isError && <h1>Error</h1>}
        </>
      )}
      {currentWeather && <h1>Current Weather</h1>}
    </div>
  );
};

export default App;
