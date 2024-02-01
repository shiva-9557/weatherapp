import SearchBox from "./SearchBox";
import Info from "./Info";
import { useState } from "react";
export default function WeatherApp(){
        const [weatherInfo,setWeatherInfo]=useState(
            {
                ciyt: "delhi",
                feelslike:24,
                temp: 25,
                tempMin:22,
                tempMax:27,
                humidity:47,
                weather:"fkjek"
            }
        );
    let updateInfo=(newinfo)=>{
        setWeatherInfo(newinfo);
    };
    return(
        <>
        <h2 style={{textAlign: "center"}}>Weather App By Shivanshu Gupta</h2>
        <br />
        <SearchBox updateInfo={updateInfo}/>
        <Info info={weatherInfo}/>
        </>
    );
};