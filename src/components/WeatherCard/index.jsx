import "./style.scss";
import {useContext} from "react";
import {Context} from "../../context";

export default () => {
    let date = new Date();
    let day = date.getDate();
    let month = date.toLocaleString('default', {month: 'long'});
    const data = useContext(Context).data;
    let icon = "./assets/" + (data.list[0].weather[0].main).toLowerCase() + ".svg";


    return (
        <div className={"weather-card"}>
            <div className={"weather-card-location"}>
                <h4 className={"weight-regular"}>{data.city.name}, {data.city.country}</h4>
                <p>Today, {day} {month}</p>
            </div>
            <div className={"weather-card-status"}>
                <img className="weather-card-status-icon" src={icon} alt="Whether status"/>
                <h1 className={"temperature"}>
                    {Math.round(data.list[0].main.temp)}&#8451;
                </h1>
                <p className={"weight-bold"}>{data.list[0].weather[0].main}</p>
            </div>
            <div className={"weather-card-info"}>
                <div className={"weather-card-info-wrap"}>
                    <p>Wind</p>
                    <div className={"wind"}>
                        <img className={"icon"} src={"./assets/wind.svg"} alt={"wind"}/>
                        <p>{"10 km/h"}</p>
                    </div>
                </div>

            </div>
        </div>
    )
}