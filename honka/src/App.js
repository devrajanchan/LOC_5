
import './App.css';
import { Route, Router, Routes } from 'react-router-dom';

import Home from './Components/Home';
// import BasicExample from './pages/CardsDisplay/ExampleCards';
import Example from './pages/CardsDisplay/Example';
// import MainImage from './Components/Navbar/MainImage';
// import Login from './Components/Login/Login';

import Landing from './pages/Landing/Landing';
import Footer  from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import Status from './Components/Status/Status';
import Login from './Components/Login/Login';
import Register from './Register';
import Profile from './Components/Profile/Profile';
import ProfileDisplay from "./Components/ProfileDisplay/ProfileDisplay"

// import Services from './Components/Navbar/Services';
// import Landing from  "./Components/Landing"
// import TravelHome from './Components/TravelHome';
// import Footer from  "./Components/Footer"
// import { Route, Router, Routes } from 'react-router-dom';
// import Profile from './Profile/Profile';
// import Community from './Components/Community';

// import Register from './Components/Register/Register';


// import {Route, Switch, Redirect} from "react-router-dom";
import MumbaiMap from './Map';

function App() {
  return (
    <>
    <Navbar/>
    <MumbaiMap/>
    {/* { <Routes>
        
        <Route exact path="/" element={<Landing />}></Route>
        <Route exact path="/home" element={<Home />}></Route>
        <Route exact path="/status" element={<Status/>} ></Route>
     
        <Route exact path="/profile" element={<Profile />}></Route>
        <Route exact path="/example" element={<Example />}></Route>

        <Route exact path="/community" element={<Community />}></Route>
        <Route exact path="/profiledisplay" element={<ProfileDisplay />}></Route>
        <Route exact path="/login" element={<Login />}></Route>
        <Route exact path="/register" element={<Register />}></Route>
        </Routes> } */}
      <Footer/>
    </>
    
     
  );
}

export default App;