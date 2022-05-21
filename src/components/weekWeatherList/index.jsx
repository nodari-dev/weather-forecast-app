import "./style.scss";
import {useContext} from "react";
import {Context} from "../../context";
import WeekWeatherItem from "./weekWeatherItem";

export default function WeekWeatherList() {
    const data = useContext(Context);

    const listItems = data.weather.week.map((item, index) =>
        <li className={"week-list-item"} key={index}><WeekWeatherItem weather={item}/></li>
    )

    return (
        <ul className={"week-list"}>{listItems}</ul>
    )

}