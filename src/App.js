import './App.scss';
import {useEffect, useState} from "react";
import {Context} from "./context";
import {API_KEY} from "./enviroment/enviroment";
import Navigation from "./components/Navigation";
import ForecastContainer from "./containers/ForecastContainer";

function App() {
    const [data, setData] = useState({});
    const [isLoading, setLoading] = useState(true);

    // useEffect(() => {
    //     const url = `http://api.openweathermap.org/data/2.5/forecast?q=Otyniya&id=524901&units=metric&appid=${API_KEY}`;
    //
    //     const fetchData = async () => {
    //         try {
    //             const response = await fetch(url);
    //             const json = await response.json();
    //             setData(json);
    //             setLoading(false);
    //         } catch (error) {
    //             console.log("error", error);
    //         }
    //     };
    //
    //     fetchData();
    // }, []);

    // Check in data is parsed
    // console.log(isLoading)
    // if(data !== undefined && Object.keys(data).length !== 0){
    //     console.log(data);
    // }

    return (
        <Context.Provider value={{data, isLoading}}>
            <div className="container">
                <div className="container-wrap">
                    <Navigation/>
                    <ForecastContainer/>
                </div>
            </div>
        </Context.Provider>
    );
}

export default App;
