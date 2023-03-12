import './App.css';
import { Route, Router, Routes } from 'react-router-dom';

import Home from './Components/Home';
// import BasicExample from './pages/CardsDisplay/ExampleCards';
import Example from './pages/CardsDisplay/Example';
// import MainImage from './Components/Navbar/MainImage';
// import Login from './Components/Login/Login';

// import Landing from './pages/Landing/Landing';
import Footer  from './Components/Footer/Footer';
import AddJob from './pages/AddJobs/AddJob';
import Navbar from './Components/Navbar/Navbar';
import Status from './Components/Status/Status';
import Login from './Components/Login/Login';
import Register from './Register';
import Profile from './Components/Profile/Profile';
import ProfileDisplay from "./Components/ProfileDisplay/ProfileDisplay"
import Contact from './Components/Contact';
import Landing from "./pages/Landing/Landing"
import Calendly  from './pages/Calendly';
import MumbaiMap from './Map';
import Cards from './Components/Card/Cards';
import AdminStatus from './Components/AdminStatus';

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
        <Route exact path="/" element={<Landing />}></Route>
        <Route exact path="/home" element={<Home />}></Route>
        <Route exact path="/status" element={<Status/>} ></Route>
        <Route exact path="/maps" element={<MumbaiMap/>} ></Route>
    
        <Route exact path="/profile/:id" element={<Profile />}></Route>
        <Route exact path="/example" element={<Example />}></Route>
        <Route exact path="/adminStatus" element={<AdminStatus />}></Route>

        <Route exact path="/contact" element={<Contact />}></Route>
        <Route exact path="/profiledisplay/:id" element={<ProfileDisplay />}></Route>
        <Route exact path="/login" element={<Login />}></Route>
        <Route exact path="/register" element={<Register />}></Route>
        <Route exact path="/card" element={<Cards />}></Route>
        </Routes>
      <Footer/>
    </>
    
     
  );
}

export default App;
