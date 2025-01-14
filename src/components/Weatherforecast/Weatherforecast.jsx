import './Weatherforecast.css'

const weatherListItems = ({weather}) =>{
    return (
        <div className="weather">
        <h2>Day of the Week: {weather.day}</h2>
        <img src={weather.img} alt={weather.imgAlt} />
        <p><span>conditions:{weather.conditions} </span></p>
        <p><span>time:{weather.time} </span></p>
        </div>
    )
}

export default weatherListItems;