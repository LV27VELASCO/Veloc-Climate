import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Clima = () => {



    const [latLon, setLatLon] = useState({})
    const [climate, setClimate] = useState()
    const [click, setClick] = useState(true)

    const celcius= Math.round(climate?.main.temp - 273.15)
    const kelvin= Math.round(climate?.main.temp)

    const onclick=()=>{
        setClick(false)
        if (click===false) {
            setClick(true)
        }
        else{setClick(false)}
    }

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
        }
    }, [latLon])
    

    return (
        <main className='hero'>
            <section className='Card'>
                <header className='head'>
                    <h1>Veloc Climate</h1>
                    <h4>Ciudad: {`${climate?.name}, ${climate?.sys.country}`}</h4>
                </header>
                <article className='hero-body'>
                    <div className='temperature'>
                        <img className='meteorologia' src={`http://openweathermap.org/img/wn/${climate?.weather[0].icon}.png`}/>
                        <h4>{click? `${celcius}°C`:`${kelvin} K`}</h4>
                    </div>
                    <div className='descripcion'>
                        <div className='title'>
                            <h4>
                                {<i class='bx bxs-quote-alt-left'></i>}{climate?.weather[0].description}<i class='bx bxs-quote-alt-right' ></i>
                            </h4>
                        </div>
                        <div className='datos'>
                            <p className='viento'><i class='bx bx-wind'></i><b>Wind Speed</b>{climate?.wind.speed} m/s</p>
                            <p className='nube'><i class='bx bxl-google-cloud'></i><b>Cloude</b>{climate?.clouds.all}%</p>
                            <p className='presion'><i class='bx bxs-thermometer'></i><b>Pressure</b>{climate?.main.pressure} mb</p>
                            <p className='viento'><i class='bx bxs-droplet'></i><b>Humidity</b>{climate?.main.humidity}%</p>
                        </div>
                    </div>
                </article>
                <div className='boton'>
                <button onClick={onclick}>{click?'Change to K':'Change to °C'}</button>
                </div>
            </section >
        </main >
    )
}

export default Clima