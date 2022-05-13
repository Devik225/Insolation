import React, {useState, useEffect} from 'react';
import './App.css';
import logo from './images/logo.svg'
import Search from './Components/Search';
import SearchShort from './Components/SearchShort';

function App() {

  let [latitude, setLatitude] = useState('25.31764');
  let [longitude, setLongitude] = useState('82.973914');
  let [tilt, setTilt] = useState('45');
  let [capacity, setCapacity] = useState('20');
  let [installDate, setInstallDate] = useState('2020-03-24');
  let url1 = 'https://api.solcast.com.au/world_pv_power/forecasts?latitude='+latitude
            +'&longitude='+longitude+'&hours=24&format=json&tilt='+tilt+'&capacity='
            +capacity+'&install_date='+installDate;
  let url2 = 'https://api.solcast.com.au/world_radiation/forecasts?latitude='+latitude+'&amp;longitude='+longitude+'&amp;hours=24&format=json';

  let getData = ()=>{
    
  };

  return (
    <div className='wrapper'>
      <div className="container">
        <div className='logo'>
          <img src={logo}/>
        </div>
        <div className='content'>
        <div className='contentInput'>
          <div className='input'>
            <div className='label'>Input required parameters:</div>
            <div className='inputBox'>
            <from>
            <div className='flexme'>
              <SearchShort label='Latitude'></SearchShort>
              <SearchShort label='Longitude'></SearchShort>
              <Search label='Capacity of the inverter or modules (Units in Kilowatts and must be > 0)'></Search>
            </div>

            <div className='flexme'>
              <Search label='Tilt (Angle by which PV system is titled of must be in the range of 0 - 90)'></Search>
              <Search label='The date (yyyy-MM-dd) of installation of the PV system (to find the loss factor)'></Search>
            </div>

            <button className='searchButton'>Estimate the PV power generated</button>

            </from>
            </div>
          </div>
          <div className='graphContainer'>
            <div className='graph'>
              <div className='label'>Graph of last 24hrs Photo voltaic power estimation:</div>
            </div>
            <div className='graphDataContainer'>
              <div className='card'>
                <div className='label'>Current cloud opacity:</div>
                <div className='inputBox inputCard'>
                </div>
              </div>
              <div className='card'>
                <div className='label'>Photo voltaic power estimated:</div>
                <div className='inputBox inputCard'>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className='label'>Weather monitoring data:</div>
          <div className='inputBox'>
            <div className='weatherData'>Global Horizontal Irradiance:</div>
            <div className='subWeather flexme'>
              <div>Mean - </div>
              <div>High - </div>
              <div>Low - </div>
            </div>
            <hr/>
            <div className='weatherData'>Direct Normal Irradiance:</div>
            <div className='subWeather flexme'>
              <div>Mean - </div>
              <div>High - </div>
              <div>Low - </div>
            </div>
            <hr/>
            <div className='weatherData'>Diffuse Horizontal Irradiance -</div>
            <hr/>
            <div className='weatherData'>Air temperature (degrees Celsius) -</div>
            <hr/>
            <div className='weatherData'>Solar zenith angle (degrees) -</div>
            <hr/>
            <div className='weatherData'>Solar azimuth angle (degrees) - </div>
            <hr/>
            <div className='weatherData'>End of the averaging period -</div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default App;
