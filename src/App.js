import './App.scss';
import {useEffect, useState} from "react";
import {getForecast} from "./services/forecast";
import ExtendedForecast from "./classes/extendedForecast";
import DefaultForecast from "./classes/defaultForecast";
import {Context} from "./context";
import {Navigation, Loading, WeekWeatherList, CurrentWeather} from "./components";

function App() {
    const forecastInit = {today: {}, week: []};
    const locationInit = {country: "", city: ""};
    const [forecast, setForecast] = useState(forecastInit);
    const [location, setLocation] = useState(locationInit);
    const [isLoading, setLoading] = useState(true);

    const getDayArray = (arr) => {
        return Array.from(new Set(arr.map((item) => {
            return new Date(item.dt_txt).getDate()
        })))
    }

    const filterByDay = (weather, day) => {
        return weather.filter((item) => {
            return new Date(item.dt_txt).getDate() === day
        })
    }

    useEffect(() => {
        getForecast().then((data) => {
            const sortedWeek = getDayArray(data.list).map((day) => {
                return filterByDay(data.list, day)
            })

            const newForecast = generateForecast(sortedWeek);
            const newLocation = {country: data.city.country, city: data.city.name};
            setLocation(newLocation);
            setForecast(newForecast);
            setTimeout(() => setLoading(false), 1000);
        })
    }, [])

    const generateForecast = (arr) => {
        /*
        /* Main function
        */

        let result = {
            today: {},
            week: []
        }

        arr.forEach((item, index) => {
            if (index > 0) {
                result.week.push(new DefaultForecast(item))
            } else {
                result.today = new ExtendedForecast(item);
            }
        })
        return result;
    }



    return !isLoading ? (
        <Context.Provider value={{place: location, weather: forecast }}>
            <div className="container">
                <div className="container-wrap">
                    <Navigation/>
                    <CurrentWeather/>
                    <WeekWeatherList/>
                </div>
            </div>
        </Context.Provider>
    ) : Loading()

}

export default App;
