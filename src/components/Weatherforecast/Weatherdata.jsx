import './Weatherforecast.css'

const WeatherData = ({weather}) =>{
    return (
        <div className="weather">
        <h2>Day of the Week: {weather.day}</h2>

        <p><span>conditions:{weather.conditions} </span></p>
        <p><span>time:{weather.time} </span></p>
        </div>
    )
}

export default WeatherData;