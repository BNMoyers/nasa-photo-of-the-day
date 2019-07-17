import React from "react";
import "./App.css";
import Header from './components/Header/Header.js';
import SpacePic from './components/NASA/Nasa.js';
import Info from './components/Info/Info.js';
import Footer from './components/Footer/Footer.js';

function App() {
  return (
    <div className="App">
     <header>
       <Header />
     </header>
     <container className='pic-of-the-day'>
       <SpacePic />
       <Info />
     </container>
     <footer>
       <Footer />
     </footer>

    </div>
  );
}

export default App;
