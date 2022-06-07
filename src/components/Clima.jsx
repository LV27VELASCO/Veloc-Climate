
import React, { useEffect, useState } from 'react'

const Clima = ({climate}) => {
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
                                {<i className='bx bxs-quote-alt-left'></i>}{climate?.weather[0].description}<i className='bx bxs-quote-alt-right' ></i>
                            </h4>
                        </div>
                        <div className='datos'>
                            <p className='viento'><i className='bx bx-wind'></i><b>Wind Speed</b>{climate?.wind.speed} m/s</p>
                            <p className='nube'><i className='bx bxl-google-cloud'></i><b>Cloude</b>{climate?.clouds.all}%</p>
                            <p className='presion'><i className='bx bxs-thermometer'></i><b>Pressure</b>{climate?.main.pressure} mb</p>
                            <p className='viento'><i className='bx bxs-droplet'></i><b>Humidity</b>{climate?.main.humidity}%</p>
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