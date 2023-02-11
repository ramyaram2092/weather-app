import React,{useState} from 'react';
import './weather.css';

const APIKey="4b99586627398fdaee7de0e4d8d222ed";

export default function Weather(){

    const[form,setForm]=useState({
        city:"",
        country:""
    });
    
    const handleChange=(e)=>{
        let name= e.target.name;
        let value= e.target.value;
        if(name==="city")
        {
            setForm({...form,city:value}) // spread operator read about it
        }
        if(name==="country")
        {
            setForm({...form,country:value})
        }
    
        console.log(form.city,form.country);
    };

    async function weatherData(e){
        e.preventDefault(); // read about it
        if(form.city==="")
            alert("enter the city name")
        else{
            // fetch returns a promise 
            // promise works like observable in design pattern
            const data= await fetch (
                `https://api.openweathermap.org/data/2.5/weather?q=${form.city},${form.country}&appid=${APIKey}`)
                .then((res)=>console.log(res.json()));
        }
    }


    return(
        <div className="weather">
            <span className="title">Weather App</span>
            <br/>
            <form>
                <input type="text" name="city" placeholder="city" onChange={(e)=>handleChange(e)}/>
                <input type="text" name="country" placeholder="country" onChange={(e)=>handleChange(e)}/>
                <button className="getWeather" onClick={(e)=>weatherData(e)}> Submit</button> 
            </form>

        </div>
    );
}