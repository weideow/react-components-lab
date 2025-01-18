import './WeatherForecast.css'

const WeatherIcon = ({weather}) => {
    return (
    <div className="weather">
    <h2>Day of the week: {weather.day}</h2>
    <img src={weather.img} alt={weather.imgAlt}/>
    </div>
    )
}

export default WeatherIcon