import axios from 'axios';
import { useState, useEffect } from 'react';



const RickyMorti = ({ characterUrl }) => {

    const [characterItem, setCharacterItem] = useState()

    useEffect(() => {
        axios.get(characterUrl)
            .then(res => setCharacterItem(res.data))
    }, [])

    return (
            <div className='card'>
                <h3 className="card-t"> {characterItem?.name}</h3>
                <p className="card-d">{characterItem?.status}</p>
                <p className="card-a" >{characterItem?.species}</p>
                <p className="card-a" >{characterItem?.residents}</p>
                <img src={characterItem?.image} alt="" className="card-img" />
            </div>

    );
};

export default RickyMorti;