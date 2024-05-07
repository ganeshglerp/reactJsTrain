import {useState} from 'react'
import WeatherCard from './WeatherCard';

function WeatherDetails(){
    console.log("Weather Details");
    const [weatherData, setWeatherData] = useState([
        { index:1, day: "Monday", condition: "Sunny", temperature: "32°C" },
        { index:2, day: "Tuesday", condition: "Rainy", temperature: "26°C" },
        { index:3, day: "Wednesday", condition: "Cold", temperature: "16°C" },
        { index:4, day: "Thrusday", condition: "Rainy", temperature: "25°C" },
        { index:5, day: "Friday", condition: "Sunny", temperature: "34°C" },
        { index:6, day: "Satirday", condition: "Cold", temperature: "18°C" },
        { index:7, day: "Sunday", condition: "Sunny", temperature: "33°C" }       
        ]);

    return (
        <div>
            <h1>Weather Forecast</h1>
            <div className="container">
                <table className="tablediv" >
                    <thead>
                        <tr>
                            <th>Day</th>
                            <th>Condition</th>
                            <th>Temperature</th>
                        </tr>
                    </thead>
                        <tbody>
                            {weatherData.map((weather, index) => (//JSX : Java Script XML   
                                <WeatherCard
                                    key={index}
                                    day={weather.day}
                                    condition={weather.condition}
                                    temperature={weather.temperature}
                                />
                                             
                                // <tr  key ={mbl.index}>
                                //     <td >{mbl.day}</td>
                                //     <td>{mbl.condition}</td>
                                //     <td>{mbl.temperature}</td>
                                // </tr>
                            ))}
                        </tbody>
                </table>
                </div>
        </div>
    )
}

export default WeatherDetails