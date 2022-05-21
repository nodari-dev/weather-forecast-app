import "./style.scss";
import {useContext} from "react";
import {Context} from "../../context";
import {TempRange, WeatherIcon} from "../index";


export default function CurrentWeather() {
    const data = useContext(Context);
    return (
        <div className={"current-weather"}>
            <div className={"current-weather-icon"}>
                <WeatherIcon status={data.weather.today.status} today={true}/>
            </div>
            <div className={"current-weather-temperature"}>
                <h1>{data.weather.today.temp}</h1>
                <TempRange min={data.weather.today.range.min} max={data.weather.today.range.max}/>
            </div>
            <div className={"current-weather-additional-info"}>
                <ul className={"current-weather-additional-info-list"}>
                    <li><img src="./assets/wind.svg" alt="#"/><p>{data.weather.today.wind}</p></li>
                    <li><img src="./assets/water.svg" alt="#"/>{data.weather.today.humidity}</li>

                </ul>
            </div>
        </div>
    )
}

