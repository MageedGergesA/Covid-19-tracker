import React,{useState, useEffect} from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import styles from './CountryPicker.module.css';
import {countryFetchData} from '../../api';
const CountryPicker=(props)=>{
    const [countrySt, setCountry] = useState([]);
    useEffect(()=>{
        const fetchCountry = async()=>{
            const countryData = await countryFetchData();
            setCountry(countryData);
        }
        fetchCountry();
    },[setCountry])
    return(
        <FormControl className={styles.formControl}>
            <NativeSelect onChange={(e)=>props.countryHandle(e.target.value)}>
                <option value="">Global</option>
                {countrySt.map((country)=><option value={country} key={country}  >{country}</option>)}
            </NativeSelect>
        </FormControl>
        )
}
export default CountryPicker;