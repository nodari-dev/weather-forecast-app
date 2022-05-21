import {API_KEY} from "../enviroment/enviroment";

export const getForecast = async () => {
    const res = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=Lviv&units=metric&appid=${API_KEY}`);
    return await res.json();
}