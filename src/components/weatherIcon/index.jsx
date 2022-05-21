import {WEATHER_STATUS} from "../../contants";
import ReactAnimatedWeather from "react-animated-weather";


export default function WeatherIcon(props) {

    const hours = new Date().getHours();
    const isDayTime = hours > 6 && hours < 20;

    const getIconInfo = () => {
        if (props.status === "clear") {
            if (isDayTime) {
                return "clearDay";
            } else {
                return "clearNight";
            }
        } else {
            return props.status;
        }
    }

    return (
        <ReactAnimatedWeather
            icon={WEATHER_STATUS[getIconInfo()]}
            color='#696868'
            size={props.today ? 120 : 20}
            animate={true}
        />
    )
}