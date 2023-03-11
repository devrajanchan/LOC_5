import React from 'react'
import { Link } from 'react-router-dom'
import "./navbar.css"

const Navbar = () => {
  return (
    <>
    <div>
    <header id="header" class="header fixed-top">
    <div class="container-fluid container-xl d-flex align-items-center justify-content-between">

      <a href="index.html" class="logo d-flex align-items-center">
        <img src="assets/img/logo.png" alt=""/>
        <span>FlexStart</span>
      </a>

      <nav id="navbar" class="navbar">
        <ul>
          <li>
          <Link to="/" className="nav-link scrollto active">
          Home
          </Link></li>
          <li>
          <Link to="/example" className="nav-link scrollto ">
          Jobs
          </Link>
          </li>
          <li>
          <Link to="/services" className="nav-link scrollto ">
          Services
          </Link>
          </li><li>
          <Link to="/status" className="nav-link scrollto ">
          Status
          </Link>
          </li>
          <li>
          <Link to="/profiledisplay" className="nav-link scrollto ">
          Profile
          </Link>
          </li>
         
          
          {/* <li class="dropdown"><a href="#"><span>Drop Down</span> <i class="bi bi-chevron-down"></i></a>
            <ul>
              <li><a href="#">Drop Down 1</a></li>
              <li class="dropdown"><a href="#"><span>Deep Drop Down</span> <i class="bi bi-chevron-right"></i></a>
                <ul>
                  <li><a href="#">Deep Drop Down 1</a></li>
                  <li><a href="#">Deep Drop Down 2</a></li>
                  <li><a href="#">Deep Drop Down 3</a></li>
                  <li><a href="#">Deep Drop Down 4</a></li>
                  <li><a href="#">Deep Drop Down 5</a></li>
                </ul>
              </li>
              <li><a href="#">Drop Down 2</a></li>
              <li><a href="#">Drop Down 3</a></li>
              <li><a href="#">Drop Down 4</a></li>
            </ul>
          </li> */}
          <li><a class="nav-link scrollto" href="#contact">Contact</a></li>
          <Link to="/login" className="getstarted scrollto ">
          Login
          </Link>
        </ul>
        <i class="bi bi-list mobile-nav-toggle"></i>
      </nav>

    </div>
  </header>
    </div>

 



      
    </>
  )
}

export default Navbar
