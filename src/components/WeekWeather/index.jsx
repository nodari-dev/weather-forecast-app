import "./style.scss";
import ReactAnimatedWeather from "react-animated-weather";
import TemperatureRange from "../TemperatureRange";

const defaults = {
    icon: 'RAIN',
    color: '#696868',
    size: 30,
    animate: true
};

export default function WeekWeather(){
    return(
        <div className={"week-weather"}>
            <div className={"week-weather-icon"}>
                <ReactAnimatedWeather
                    icon={defaults.icon}
                    color={defaults.color}
                    size={defaults.size}
                    animate={defaults.animate}
                />
            </div>

            <div className={"week-weather-range"}><TemperatureRange min={30} max={40}/></div>
            <p className={"week-weather-day"}>day</p>
        </div>
    )
}