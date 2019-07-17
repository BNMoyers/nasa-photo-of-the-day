import React, { useState, useEffect} from 'react';
import axios from 'axios';




const SpacePic = () =>{
    const [dailyPic, setDailyPic] = useState("");
    useEffect(() => {
        axios
            .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2012-03-14")
            .then(res => setDailyPic(res.data.url))
            .catch(err => console.log(err));
    }, []);
    return (
        <img src={dailyPic} alt = "Space - the Final Frontier."/>
    );
}

export default SpacePic;