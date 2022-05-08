import "./style.scss";
import {Fragment} from "react";
import MainWeather from "../../components/CurrentWeather";
import MiniWeather from "../../components/WeekWeather";

export default function ForecastContainer(){
    return(
        <Fragment>
            <MainWeather
                temperature={30}
                range={{min: 10, max: 30}}
                wind={10}
                water={11}
                pressure={12}
            />
            <ul className={"week-forecast"}>
                <li><MiniWeather/></li>
                <li><MiniWeather/></li>
                <li><MiniWeather/></li>
                <li><MiniWeather/></li>
            </ul>

        </Fragment>
    )
}