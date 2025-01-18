import './Weatherforecast.css'

const WeatherIcons = ({weather}) =>{
    return (
        <div className="weather">
        <h2>Day of the Week: {weather.day}</h2>
        <img src={weather.img} alt={weather.imgAlt} />
        </div>
    )
}

export default WeatherIcons;