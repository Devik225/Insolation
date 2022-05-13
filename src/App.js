import React, {useState, useEffect} from 'react';
import './App.css';
import logo from './images/logo.svg'
import cloud from './images/cloud.svg'
import power from './images/power.svg'
import Search from './Components/Search';
import SearchShort from './Components/SearchShort';
import pvenergy1 from './pvenergy1.js';
import pvenergy2 from './pvenergy2.js';
import pvenergy3 from './pvenergy3.js';
import pvenergy4 from './pvenergy4.js';
import pvenergy5 from './pvenergy5.js';
import irradiance1 from './irradiance1.js';

function App() {

  let [latitude, setLatitude] = useState('25.31764');
  let [longitude, setLongitude] = useState('82.973914');
  let [tilt, setTilt] = useState('45');
  let [capacity, setCapacity] = useState('20');
  let [installDate, setInstallDate] = useState('2020-03-24');
  let [pvData, setPvData] = useState(pvenergy1);
  let [dataIrradiance, setDataIrradiance] = useState(irradiance1);
  let [cnt, setCnt] = useState(0);

  let update = async ()=>{
    await setCnt(cnt+1);
    if(cnt == 5){
      setCnt(1);
    }
    if(cnt == 1){
      setPvData(pvenergy1);
    }
    else if(cnt==2){
      setPvData(pvenergy2);
    }
    else if(cnt==3){
      setPvData(pvenergy3);
    }
    else if(cnt==4){
      setPvData(pvenergy4);
    }
    else if(cnt==5){
      setPvData(pvenergy5);
    }
    console.log(cnt);
  }


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
            {/* <form> */}
            <div className='flexme'>
              <SearchShort label='Latitude'></SearchShort>
              <SearchShort label='Longitude'></SearchShort>
              <Search label='Capacity of the inverter or modules (Units in Kilowatts and must be > 0)'></Search>
            </div>

            <div className='flexme'>
              <Search label='Tilt (Angle by which PV system is titled of must be in the range of 0 - 90)'></Search>
              <Search label='The date (yyyy-MM-dd) of installation of the PV system (to find the loss factor)'></Search>
            </div>

            <button onClick={update} className='searchButton'>Estimate the PV power generated</button>

            {/* </form> */}
            </div>
          </div>
          <div className='graphContainer'>
            <div className='graph'>
              <div className='label'>Data of upcoming 24hrs Photo voltaic power estimation:</div>
              <div className='tableBox'>
                <table>
                  <td>
                    <tr className='bold'>Time</tr>
                    {dataIrradiance.forecasts.map(data=>(
                      <tr>{data.period_end.slice(0, 10)} - {data.period_end.slice(11, 19)}</tr>
                    ))}
                  </td>
                  <td>
                    <tr className='bold'>Global Horizontal Irradiance</tr>
                    {dataIrradiance.forecasts.map(data=>(
                      <tr>{data.ghi}</tr>
                    ))}
                  </td>
                  <td>
                  <tr className='bold'>Cloud opacity</tr>
                  {dataIrradiance.forecasts.map(data=>(
                      <tr>{data.cloud_opacity}</tr>
                    ))}
                  </td>
                  <td>
                  <tr className='bold'>Photo voltaic power</tr>
                  {pvData.forecasts.map(data=>(
                      <tr>{data.pv_estimate}</tr>
                    ))}
                  </td>
                </table>
                
              </div>
            </div>
            <div className='graphDataContainer'>
              <div className='card'>
                <div className='label'>Current cloud opacity:</div>
                <div className='inputBox inputCard flexme'>
                <img className='move' width={'60px'} src={cloud}></img>
                <div className='num'>{dataIrradiance.forecasts[0].cloud_opacity}</div>
                <span className='num2'>Percent</span>
                </div>
              </div>
              <div className='card'>
                <div className='label'>Photo voltaic power estimated:</div>
                <div className='inputBox inputCard flexme'>
                <img className='move' width={'60px'} src={power}></img>
                <span className='num num1'>{Math.round(pvData.forecasts[0].pv_estimate)}</span>
                <span className='num2'>Kilowatts</span>
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
              <div>Mean - {dataIrradiance.forecasts[0].ghi}</div>
              <div>High - {dataIrradiance.forecasts[0].ghi90}</div>
              <div>Low - {dataIrradiance.forecasts[0].ghi10}</div>
            </div>
            <hr/>
            <div className='weatherData'>Direct Normal Irradiance:</div>
            <div className='subWeather flexme'>
              <div>Mean - {dataIrradiance.forecasts[0].dni}</div>
              <div>High - {dataIrradiance.forecasts[0].dni90}</div>
              <div>Low - {dataIrradiance.forecasts[0].dni10}</div>
            </div>
            <hr/>
            <div className='weatherData'>Diffuse Horizontal Irradiance - {dataIrradiance.forecasts[0].dhi}</div>
            <hr/>
            <div className='weatherData'>Air temperature (degrees Celsius) - {dataIrradiance.forecasts[0].air_temp}</div>
            <hr/>
            <div className='weatherData'>Solar zenith angle (degrees) - {dataIrradiance.forecasts[0].zenith}</div>
            <hr/>
            <div className='weatherData'>Solar azimuth angle (degrees) - {dataIrradiance.forecasts[0].azimuth}</div>
            <hr/>
            <div className='weatherData'>End of the averaging period - {dataIrradiance.forecasts[0].period_end.slice(0, 10)} | {dataIrradiance.forecasts[0].period_end.slice(11, 19)}</div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default App;
