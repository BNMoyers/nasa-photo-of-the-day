import React, { useState, useEffect} from 'react';





const SpacePic = () =>{
    const [dailyPic, setDailyPic] = useState("");

    return (
        <img src={dailyPic} alt = "Space - the Final Frontier."/>
    );
}

export default SpacePic;