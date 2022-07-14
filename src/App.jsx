import { useState, useEffect } from 'react'
import axios from 'axios';
import './App.css'
import Location from './components/Location';
import RickyMorti from './components/RickyMorti';



function App() {


  const [location, setLocation] = useState([])
  const [searchValue, setSearchValue] = useState("")

  useEffect(() => {
    const random = Math.floor(Math.random() * 126) + 1
    axios.get(`https://rickandmortyapi.com/api/location/${random}`)
      .then(res => {
        setLocation(res.data)
      })
  }, [])

  const searchlocation = () => {
    axios.get(`https://rickandmortyapi.com/api/location/${searchValue}`)
      .then(res => setLocation(res.data))
  }


  console.log(location);

  return (
    <div className="App">
      <div className='textimg'>
            <img  src="http://assets.stickpng.com/images/58f37720a4fa116215a9240f.png" alt="" />
            </div>
            <br />
             <img className='img-background' src="https://github.com/Inanil/r-and-m/blob/main/src/assets/img/morty.gif?raw=true" alt="" />
              <br />
              <input type="text" value={searchValue} onChange={e => setSearchValue(e.target.value)} placeholder=" 1 - 126 ID" />
              <button className='search-btn' onClick={searchlocation}>Search</button>
              <br />
              <br />
            <Location location={location}/>
    </div>
  )
}

export default App
