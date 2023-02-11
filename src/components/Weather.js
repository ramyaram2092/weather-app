import React from 'react';
import './weather.css';

export default function Weather(){
    return(
        <div className="weather">
            <span className="title">Weather App</span>
            <br/>
            <form>
                <input type="text" name="city" placeholder="city"/>
                <input type="text" name="country" placeholder="country"/>
                <button className="getWeather"> Submit</button> 
            </form>

        </div>
    );
}