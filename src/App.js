import React, { useState, useEffect } from "react";
import "./App.css";
import Photo from './components/Photo.js';
import axios from 'axios';
import styled from 'styled-components';

function App() {
  const [data, setData] = useState({});
  useEffect(() =>{
    axios
  .get("https://api.nasa.gov/planetary/apod?api_key=5J8sSFxqzi1RluTKdZsfnDxZ1QRVBN7dmtorVc4d")
  .then(res => setData(res.data))
  .catch(err => console.log(err))
}, []);

  return (
    <div className="App">
     {data
     ? <Photo title={data.title}
            url={data.url}
            explanation={data.explanation}
            date={data.date}
            copyright={data.copyright} />:
            <div>Loading</div>}
   
    </div>
    
  );
}

export default App;
