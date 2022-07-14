import React from 'react';
import { useEffect } from "react";
import RickyMorti from './RickyMorti';


const Location = ({ location }) => {
    return (

        <div>
            <div className="titulo">
                <h2>{location.name}</h2>
            </div>
            <div className='localtitle'>
                <h3>type: {location.type}</h3>
                <h3>dimension: {location.dimension}</h3>
                <h3>population: {location.residents?.length}</h3>

            </div>

            <div className='contenedor'>
                {location.residents?.map(characterUrl => {
                    console.log(characterUrl)
                    return <RickyMorti characterUrl={characterUrl} key={characterUrl} />
                })}

            </div>

        </div>
    );
};

export default Location