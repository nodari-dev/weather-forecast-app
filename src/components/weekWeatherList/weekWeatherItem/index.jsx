import TemperatureRange from "../../tempRange";
import {WeatherIcon} from "../../index";


export default function WeekWeatherItem(data) {
    return (
        <>
            <div className={"week-list-item-icon"}>
                <WeatherIcon status={data.weather.status} today={false}/>
            </div>

            <div className={"week-list-item-range"}>
                <TemperatureRange
                    min={data.weather.range.min}
                    max={data.weather.range.max}
                />
            </div>
            <p className={"week-list-item-day"}>{data.weather.day}</p>
        </>

    )
}