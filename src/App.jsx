import { useEffect, useState } from 'react'
import './App.css'
import Clima from './components/Clima'
import HashLoader from "react-spinners/HashLoader";
import axios from 'axios'

function App() {

  const [loading, setLoading] = useState(true)
  const [latLon, setLatLon] = useState({})
  const [climate, setClimate] = useState()

  useEffect(() => {
    const success = pos => {
        const lat = pos.coords.latitude
        const lon = pos.coords.longitude
        setLatLon({ lat, lon })
    }
    navigator.geolocation.getCurrentPosition(success)
}, [])


  
  useEffect(() => {
    if (latLon.lat !== undefined) {

        let appiKey = '21df043cd7d75c564588a9aa7e4fd464';
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latLon?.lat}&lon=${latLon?.lon}&appid=${appiKey}`
        
        axios.get(url)
            .then(res => setClimate(res.data))
            .catch(err => console.log(err.data))
            .finally(()=>{
                setTimeout(()=>{
                    setLoading(false)
                }, 2000)
            })
    }
}, [latLon])

  

  return (
    <div className="App" >
      {loading ?
        <HashLoader
          color={'#162a3b'}
          size={100}/>

        :
        <Clima climate={climate}/>
      }
    </div>
  )
}

export default App
