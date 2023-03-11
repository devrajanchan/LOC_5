
import './App.css';
import Home from './components/Home';
// import MainImage from './Components/Navbar/MainImage';
// import Login from './Components/Login/Login';
import Navbar from './components/Navbar/Navbar';
import Slider from './components/Slider';
import Login from './components/Login/Login';
import Register from './Register';
import Profile from './components/Profile/Profile';
import { Route, Router, Routes } from 'react-router-dom';
import Landing from "./pages/landing"

// import Services from './Components/Navbar/Services';
// import Landing from  "./Components/Landing"
// import TravelHome from './Components/TravelHome';
// import Footer from  "./Components/Footer"
// import { Route, Router, Routes } from 'react-router-dom';
// import Profile from './Profile/Profile';
// import Community from './Components/Community';

// import Register from './Components/Register/Register';


// import {Route, Switch, Redirect} from "react-router-dom";


function App() {
  return (
    <>
    <Navbar/>
    <Routes>
        {/* <Route exact path="/users/:id" element={<Profdisplay />}></Route> */}
        <Route exact path="/" element={<Landing />}></Route>
        <Route exact path="/register" element={<Register />}></Route>
        <Route exact path="/login" element={<Login/>} ></Route>
        {/* <Route exact path="/find" element={<Profile />}></Route> */}
        <Route exact path="/profile" element={<Profile />}></Route>
        {/* <Route exact path="/recommend" element={<Recommend />}></Route>
        <Route exact path="/community" element={<Community />}></Route>
        <Route exact path="/request" element={<Request />}></Route>
        <Route exact path="/login" element={<Login />}></Route>
        <Route exact path="/register" element={<Register />}></Route> */}
        </Routes>
        


   


  
   
       
    </>
    
     
  );
}

export default App;