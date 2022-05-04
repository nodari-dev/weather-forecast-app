import "./style.scss";
import {useEffect, useState} from "react";


export default () =>{
    const [count, setCount] = useState(0)
    useEffect(() =>{
      const animation = setInterval(()=>{
            setCount(count => count + 1);
        }, 1000);
      return () => clearInterval(animation);
    }, [])
    return(
        <div className={"preloader-card"}>
            <h1 className={"preloader-card-text"}>Getting data</h1>
        </div>
    )
}