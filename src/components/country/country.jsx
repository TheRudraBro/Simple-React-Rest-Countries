import React, { useState } from 'react';
import './country.css'


const Country = ({ country, handleVisitedCountries }) => {
    const [visited, setVisited] = useState(false);
    // console.log(country.name);
    // console.log(handleVisitedCountries);
    const handleVisited = () => {
        // console.log('Visited');
        //---------------
        // Basic system
        // if(visited){
        //     setVisited(false);
        // }else{
        //     setVisited(true);
        // }
        //-------------
        // Short system
        // setVisited(visited? false : true);
        //-------------
        // Shortest system
        setVisited(!visited);
        handleVisitedCountries(country);
    }
    return (
        <div className={`country ${visited ? 'country-visited' : ''}`}>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <h1>Name : {country.name.common}</h1>
            {/* <h3>Official Name : {country.name.official}</h3> */}
            <p>Capital : {country.capital.capital}</p>
            <p>Region : {country.region.region}</p>
            <p>Population : {country.population.population}</p>
            <p>Area : {country.area.area} sq.km - {country.area.area > 30000 ? "Big Country" : "Small Country"}</p>
            <button onClick={handleVisited}>
              {visited ? 'Visited' : 'Not Visited'}
                </button>
        </div>
    );
};

export default Country;


/**
 * 1. Inline css (style object)
 * 2. 
 */