import './App.css';
import { Route, Router, Routes } from 'react-router-dom';

import Home from './Components/Home';
// import BasicExample from './pages/CardsDisplay/ExampleCards';
import Example from './pages/CardsDisplay/Example';
// import MainImage from './Components/Navbar/MainImage';
// import Login from './Components/Login/Login';

// import Landing from './pages/Landing/Landing';
import Footer  from './Components/Footer/Footer';

import Navbar from './Components/Navbar/Navbar';
import Status from './Components/Status/Status';
import Login from './Components/Login/Login';
import Register from './Register';
import Profile from './Components/Profile/Profile';
import ProfileDisplay from "./Components/ProfileDisplay/ProfileDisplay"
import Contact from './Components/Contact';
import Landing from "./pages/Landing/Landing"

// import Register from './Components/Register/Register';


// import {Route, Switch, Redirect} from "react-router-dom";


function App() {
  return (
    <>
    {/* <Navbar />
    <Landing/>
    <Footer/> */}
    <Example/>
  
      {/* <Footer /> */}
       
    </>
    
     
  );
}

export default App;
