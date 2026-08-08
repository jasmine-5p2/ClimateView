export function getWeatherClass(info) {
  let weatherClass = "default";

  if (info.humidity > 80) {
    weatherClass = "rain";
  } else if (info.temp > 15) {
    weatherClass = "hot";
  } else {
    weatherClass = "cold";
  }

  return weatherClass;
}