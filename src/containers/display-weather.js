import React from 'react';
import {
  Sparklines,
  SparklinesLine,
  SparklinesReferenceLine,
} from 'react-sparklines';
import { useSelector } from 'react-redux';

export default function DisplayWeather() {
  const weathers = useSelector((state) => state.weather);
  const weathersMap = weathers.map((weather, i) => (
    <tr>
      <th scope="row" key={i}>
        {weather.city}
      </th>
      <td>
        <Sparklines data={weather.temp}>
          <SparklinesLine />
          <SparklinesReferenceLine type="avg" />
        </Sparklines>
      </td>
      <td>
        {' '}
        <Sparklines data={weather.pressure}>
          <SparklinesLine />
          <SparklinesReferenceLine type="avg" />
        </Sparklines>
      </td>
      <td>
        {' '}
        <Sparklines data={weather.humidity}>
          <SparklinesLine />
          <SparklinesReferenceLine type="avg" />
        </Sparklines>
      </td>
    </tr>
  ));
  return (
    <div>
      <table className="table">
        <thead className="table-light">
          <tr>
            <th scope="col-md-3">City</th>
            <th scope="col-md-3">Temperature (K)</th>
            <th scope="col-md-3">Pressure (hPa)</th>
            <th scope="col">Humidity(%)</th>
          </tr>
        </thead>
        <tbody>{weathersMap}</tbody>
      </table>
    </div>
  );
}
