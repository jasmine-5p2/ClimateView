import { describe, test, expect } from "vitest";
import { getWeatherClass } from "./climateview";



test("returns rain when humidity is above 80", () => {
  const info = {
    humidity: 85,
    temp: 20,
  };

  expect(getWeatherClass(info)).toBe("rain");
});

test("returns hot when temperature is above 15", () => {
  const info = {
    humidity: 50,
    temp: 20,
  };

  expect(getWeatherClass(info)).toBe("hot");
});

test("returns cold when temperature is 15 or below", () => {
  const info = {
    humidity: 50,
    temp: 10,
  };

  expect(getWeatherClass(info)).toBe("cold");
});