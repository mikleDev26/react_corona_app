import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';

import styles from './CountryPicker.module.css';

import { fetchCountries } from '../../api';

const CountryPicker = (props) => {
  const { handleCountryChange = () => {} } = props;
  const [fetchedCountries, setFetchedCountries] = useState([]);

  useEffect(() => {
    const getCountries = async () => {
     const data = await fetchCountries();
     setFetchedCountries(data);
    }
    getCountries();
  }, [setFetchedCountries]);

  return (
   <FormControl className={styles.formControl}>
     <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
       <option value="">Global</option>
       {fetchedCountries.map((country) => <option key={country} value={country}>{country}</option>)}
     </NativeSelect>
   </FormControl>
  );
};

export default CountryPicker;
