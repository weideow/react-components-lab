import WeatherIcon from "./WeatherIcon"

const WeatherData = ({weather}) => {
    return (
    <>
    
    <div className="weather">
    <h2>Day of the week: {weather.day}</h2>
    <p><span>Conditions: {weather.conditions} </span></p>
    <p><span>Time: {weather.time}</span></p>
    </div>
    </>
    )
}

export default WeatherData