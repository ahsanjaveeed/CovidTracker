import React, { useEffect, useState } from 'react';
import style from './CountryPicker.module.css';
import { NativeSelect, FormControl } from '@mui/material';
import { countryList } from '../../api';

const CountryPicker = ({handleCountryChange}) => {

  const [countries, setCountries] = useState([]);

  useEffect(()=>{
    async function getCountries(){
      setCountries(await countryList());
    }
    getCountries();
  })

  return (
    <FormControl className={style.formcontrol}>
      <NativeSelect defaultValue='' onChange={(e)=> handleCountryChange(e.target.value)}>
        <option value="Global">Global</option>
        {countries.map((country, i) => <option key={i} value={country}>{country}</option>)}
      </NativeSelect>
    </FormControl>
  )
}

export default CountryPicker