import './App.scss';
import Weather from "./components/WeatherCard";
import {createContext, useEffect, useState} from "react";
import {Context} from "./context";


async function getData() {
    const url = 'http://api.openweathermap.org/data/2.5/forecast?q=Otyniya&id=524901&appid=4f9c962da9dd7619846b387bd4b78c79';

    return await fetch(url)
        .then(response => {
            return response.json();
        })
        .catch(error => {
            console.error(error);
        });
}

function App() {
    const [data, setData] = useState({});
    const [isLoading, setLoading] = useState(true);
    useEffect(() => {
        getData().then(res => setData({res}));
    }, [])

    // Check in data is parsed
    if(data !== undefined && Object.keys(data).length !== 0){
        console.log(data);
    }

    return (
        <Context.Provider value={{data, isLoading}}>
            <div className="container">
                <div className="container-wrap">
                    <Weather/>
                </div>
            </div>
        </Context.Provider>
    );
}

export default App;
