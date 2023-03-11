import React from 'react'
import { Link } from 'react-router-dom'
// import './general.css'
// import logo from "./logo.svg"

const Navbar = () => {
  return (
    <>
    <div>
      <header>
      <div className="overlay" data-overlay></div>

    
     
      <div className="header-bottom">
      <div className="container">
      {/* <a href="#" class="logo"> */}
      <Link to="/" className="logo">
          {/* <img src={logo} alt="Tourly logo"/> */}
          </Link>
        {/* </a> */}

        

        <nav className="navbar" data-navbar>

          <div className="navbar-top">

            <a href="#" className="logo" style={{ maxWidth: "100px"}}>
              <img src=".images/logo-blue.svg" alt="Tourly logo"/>
            </a>

          

          </div>

          <ul className="navbar-list">

          <Link to="/home" className="navbar-link">
          Home
          </Link>
             

          <Link to="/travel" className="navbar-link">
          Travel
          </Link>
          <Link to="/community" className="navbar-link">
          Community
          </Link>
          <Link to="/recommend" className="navbar-link">
          Recommendation
          </Link>

          <Link to="/profile" className="navbar-link">
          Profile
          </Link>
          <Link to="/profile" className="navbar-link">
          Friend Request
          </Link>
            

          </ul>

        </nav>


      </div>
      
    </div>

   


      </header>
    </div>

 



      
    </>
  )
}

export default Navbar
