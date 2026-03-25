import "./InfoBox.css";
import { useEffect } from "react";

export default function InfoBox({ info }) {
    if (!info) return null;

    const INIT_URL = "https://cdn.pixabay.com/photo/2016/01/02/01/51/clouds-1117584_1280.jpg";
    const HOT_URL = "http://www.howitworksdaily.com/wp-content/uploads/2015/07/bigstock-Heat-Wave-In-The-City-And-Hand-47540989.jpg";
    const COLD_URL = "https://tse1.mm.bing.net/th/id/OIP.BYnHSB_wLZPdOg2oCXHACAHaFj?pid=Api&P=0&h=180";
    const RAIN_URL = "https://static.vecteezy.com/system/resources/thumbnails/033/645/252/small_2x/drizzle-rainy-day-in-autumn-background-and-wallpaper-generative-ai-photo.jpg";

    // ✅ Image logic
    let weatherImage = INIT_URL;

    if (info.humidity > 80) {
        weatherImage = RAIN_URL;
    } else if (info.temp > 15) {
        weatherImage = HOT_URL;
    } else {
        weatherImage = COLD_URL;
    }

    // ✅ Gradient class logic
    let weatherClass = "default";

    if (info.humidity > 80) {
        weatherClass = "rain";
    } else if (info.temp > 15) {
        weatherClass = "hot";
    } else {
        weatherClass = "cold";
    }

    // ✅ Correct way to update body background
   
    return (
        <div className={`InfoBox ${weatherClass}`}>
            <h1>Weather Info</h1>

            <div className="imageContainer">
                <img src={weatherImage} alt="weather" />
            </div>

            <p>City: {info.city}</p>
            <p>Temperature: {info.temp}°C</p>
            <p>Feels Like: {info.feelsLike}°C</p>
            <p>Min Temperature: {info.tempMin}°C</p>
            <p>Max Temperature: {info.tempMax}°C</p>
            <p>Humidity: {info.humidity}%</p>
            <p>Weather: {info.weather}</p>
        </div>
    );
}