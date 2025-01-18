import './WeatherForecast.css'

const WeatherIcon = ({weather}) => {
    return (
    <div className="weather">
    <img src={weather.img} alt={weather.imgAlt}/>
    </div>
    )
}

export default WeatherIcon