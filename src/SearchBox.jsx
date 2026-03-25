import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from 'react';

export default function SearchBox({ updateInfo }){
         let[city, setCity] = useState("");
    const API_URL ="https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = import.meta.env.VITE_WEATHER_KEY;

    let getWeatherInfo = async () =>{
       let response =  await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
       let jsonResponse = await response.json();

       console.log(jsonResponse)
      
      let result = {
    city: jsonResponse.name,
    country: jsonResponse.sys.country,
    temp: jsonResponse.main.temp,
    tempMin: jsonResponse.main.temp_min,
    tempMax: jsonResponse.main.temp_max,
    humidity: jsonResponse.main.humidity,
    feelsLike: jsonResponse.main.feels_like,
    weather: jsonResponse.weather[0].main,
    description: jsonResponse.weather[0].description,
    wind: jsonResponse.wind.speed,
};

      console.log(result)
      return result;



    }



     let handleChange = (event)=>{
        setCity(event.target.value)

     }

     let handleSubmit = async (event)=>{
        event.preventDefault();
        console.log(city);
        setCity("");
        let info = await getWeatherInfo();
        updateInfo(info)
     }
    return(
       
        <div className="SearchBox">
        <h1>Search Weather Report</h1>
        <form onSubmit={handleSubmit}>
            <TextField id="city" label="Enter City" variant="outlined" value={city} onChange={handleChange} required/> &nbsp;&nbsp;
            <Button type="submit" variant="contained" endIcon={<SendIcon />} >Get</Button>
        </form>
        </div>
    
    )
}