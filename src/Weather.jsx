import SearchBox from "./SearchBox.jsx";
import InfoBox from "./InfoBox.jsx"; 
import { useEffect, useState } from "react";

export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
        city: "",
        feelsLike: 0,
        temp: 0,
        tempMin: 0,
        tempMax: 0,
        humidity: 0,
        weather: "",
    });

    let UpdateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    };

    // ✅ BACKGROUND LOGIC HERE
    useEffect(() => {
        let weatherClass = "default";

        if (weatherInfo.humidity > 80) {
            weatherClass = "rain";
        } else if (weatherInfo.temp > 15) {
            weatherClass = "hot";
        } else {
            weatherClass = "cold";
        }

        document.body.className = weatherClass;
    }, [weatherInfo]);

    return (
        <div style={{ textAlign: "center" }}>
            <h2>ClimateView</h2>
            <h3>{weatherInfo.city}, {weatherInfo.country}</h3>
            <SearchBox updateInfo={UpdateInfo} />
            <InfoBox info={weatherInfo} />
        </div>
    );
}