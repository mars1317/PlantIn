import classes from './Weather.module.scss';
import {useSelector, useDispatch} from "react-redux";
import {useEffect, useState, useRef } from 'react';
import {fetchWeatherValue} from '../../store/actions/Actions';
import Loader from '../Loader/Loader'
export default function Weather() {
  const weatherValue = useSelector(state=>state.weatherValue);
  const dispatch = useDispatch();
  useEffect( ()=>{
    fetchWeatherValue(dispatch);
  }, [])

  return(
    <div className={classes.Weather}>
      {weatherValue.length == 0 ?
        <><p>Current temperature is:</p><Loader isWeatherLoader={true}/></>: 
        <><p>Current temperature is: <span> {weatherValue} &#8451;</span></p></>
      }
    </div>
    
  )
}