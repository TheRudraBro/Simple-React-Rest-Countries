import React, { use, useState } from 'react';
import Country from '../country/country';
import './countries.css'

const Countries = ({countriesPromise}) => {
    // const [visitedCountries, setVisitedCount] = useState(0);
    const [visitedCountries, setVisitedCountries] = useState([]);
    const [visitedFlags, setVisitedFlags] = useState([]);

const handleVisitedCountries = (country) => {
    console.log('Handle visited countries', country);
    const newVisitedCountries = [...visitedCountries, country];
    setVisitedCountries(newVisitedCountries);
}
const handleVisitedFlags = (flag) => {
   const newVisitedFlags = [...visitedFlags, flag];
   setVisitedFlags(newVisitedFlags);
}
    const countriesData = use(countriesPromise);
    const countries = countriesData.countries;
 
    return (
        <div>
            <h2>In the Countries : {countries.length}</h2>
            <h3>Total Country Visited : {visitedCountries.length}</h3>
          <h3>Total Flags Visited : {visitedFlags.length}</h3>
           <ol>
            {
                visitedCountries.map(country => <li
                key={country.cca3.cca3}>{country.name.common}</li>)
            }
           </ol>
           <div className='visited-flags'>
            {
                visitedFlags.map((flag, index) => <img key={index} src={flag} alt="Visited Flag" className='visited-flag' />)
            }
           </div>
           <div  className='countries' id='countries'>
             {
                countries.map(country => <Country
                    key={country.cca3.cca3}
                    country={country}
                    handleVisitedCountries={handleVisitedCountries}
                    handleVisitedFlags={handleVisitedFlags}></Country>)
            }
           </div>
        </div>
    );
};

export default Countries;


