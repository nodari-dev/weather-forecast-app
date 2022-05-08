import "./style.scss";
import ReactAnimatedWeather from "react-animated-weather";
import TemperatureRange from "../TemperatureRange";

const defaults = {
    icon: 'CLEAR_DAY',
    color: 'goldenrod',
    size: 120,
    animate: true
};

export default function CurrentWeather(
    {icon, temperature, range, wind, water}) {
    return (
        <div className={"current-weather"}>
            <div className={"current-weather-icon"}>
                <ReactAnimatedWeather
                    icon={defaults.icon}
                    color={defaults.color}
                    size={defaults.size}
                    animate={defaults.animate}
                />
            </div>
            <div className={"current-weather-temperature"}>
                <h1>{temperature}</h1>
                <TemperatureRange min={range.min} max={range.max}/>
            </div>
            <div className={"current-weather-additional-info"}>
                <ul className={"current-weather-additional-info-list"}>
                    <li><img src="./assets/wind.svg" alt="#"/>
                        <span><h4>{wind}</h4><p>mph</p></span></li>
                    <li><img src="./assets/water.svg" alt="#"/>
                        <span><h4>{water}</h4><p>%</p></span></li>
                </ul>
            </div>
        </div>
    )
}