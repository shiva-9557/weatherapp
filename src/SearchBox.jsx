import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css"
import { useState } from 'react';
export default function SearchBox({updateInfo}){
    let [city,setCity]=useState("");
    let [error,setError]=useState(false);
    let url="https://api.openweathermap.org/data/2.5/weather"
    let key="173d326d5577328735ec71e956d66f1b"
    let getinfo=async ()=>{
        try{
        let res=await fetch(`${url}?q=${city}&appid=${key}&units=metric`);
        let resjas=await res.json();
        let result={
            city:city,
            temp:resjas.main.temp,
            tempMin: resjas.main.temp_min,
            tempMax: resjas.main.temp_max,
            humidity:resjas.main.humidity,
            feelslike: resjas.main.feels_like,
            weather: resjas.weather[0].description,
        }
        return result;}catch(err){
            throw err;
        }
    };
    
    let handle=(event)=>{
        setCity(event.target.value);
    };
    let handlesubmit=async (e)=>{
        try{
        e.preventDefault();
        setCity("");
        let newinfo=await getinfo();
        updateInfo(newinfo);}catch(err){
            setError(true);
        }
    };
    return (
        <div className='SearchBox'>
            <h3>This is search box</h3>
            <form onSubmit={handlesubmit}>
            <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={handle}/>
            <br />
            <br />
            <Button variant="contained" type="submit">Search</Button>
            {error && <p style={{color:"red"}}>No such place like this in this system!</p>}
            </form>
        </div>
    );
}