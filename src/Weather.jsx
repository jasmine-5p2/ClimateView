import SearchBox from "./SearchBox.jsx";
import InfoBox from "./InfoBox.jsx"; 
import { useEffect, useState } from "react";

export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
        city: "WonderLand",
        feelsLike: 24.84,
        temp: 25.05,
        tempMin: 25.0,
        tempMax: 25.05,
        humidity: 47,
        weather: "sunny",
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
            <SearchBox updateInfo={UpdateInfo} />
            <InfoBox info={weatherInfo} />
        </div>
    );
}