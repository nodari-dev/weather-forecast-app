import "./style.scss";

export default function Navigation() {
    return(
        <nav className={"navigation"}>
            <h3>Right now in</h3>
            <input className={"navigation-input"} type="text"/>
            <h3>#status</h3>
        </nav>
    )
}