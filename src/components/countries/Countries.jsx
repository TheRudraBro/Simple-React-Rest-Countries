import React, { use, useState } from 'react';
import Country from '../country/country';
import './countries.css'

const Countries = ({countriesPromise}) => {
    // const [visitedCountries, setVisitedCount] = useState(0);
    const [visitedCountries, setVisitedCountries] = useState([]);

const handleVisitedCountries = (country) => {
    console.log('Handle visited countries', country);
    const newVisitedCountries = [...visitedCountries, country];
    setVisitedCountries(newVisitedCountries);
}

    const countriesData = use(countriesPromise);
    const countries = countriesData.countries;
 
    return (
        <div>
            <h2>In the Countries : {countries.length}</h2>
            <h3>Total Country Visited : {visitedCountries.length}</h3>
           <ol>
            {
                visitedCountries.map(country => <li>{country.name.common}</li>)
            }
           </ol>
           <div  className='countries' id='countries'>
             {
                countries.map(country => <Country
                    key={country.cca3.cca3}
                    country={country}
                    handleVisitedCountries={handleVisitedCountries}></Country>)
            }
           </div>
        </div>
    );
};

export default Countries;


