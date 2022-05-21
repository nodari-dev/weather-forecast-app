import "./style.scss";
import {useContext} from "react";
import {Context} from "../../context";

function handleChange(event) {
    let target = event.currentTarget;
    target.style.width = (target.value.length + 1) * 15 + "px";
}

export default function Navigation() {
    const data = useContext(Context);

    return (
        <nav className={"navigation"}>
            <h3>Right now in {data.place.city}, {data.place.country}, </h3>
            {/*<input onChange={handleChange} className={"navigation-input"} type="text"/>*/}
            <h3>{data.weather.today.description}</h3>
        </nav>
    )
}