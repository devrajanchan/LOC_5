import React from 'react'
import "./Landing.css"
// import "./Landing.js"
import { Count } from '../../Components/Count';
import logo0 from "../hero-img.png"
import logo1 from "./values-1.png"
import logo2 from "./values-2.png"
import logo3 from "./values-3.png"
import MoodIcon from '@mui/icons-material/Mood';
const Landing  = () => {

 
  
  return (
    <>
    <div>
       <section id="hero" className="hero d-flex align-items-center">

        <div className="container">
          <div className="row">
            <div className="col-lg-6 d-flex flex-column justify-content-center">
              <h1 data-aos="fade-up">Finding Job Made Easy</h1>
              <h2 data-aos="fade-up" data-aos-delay="400">We are team of energetic people who help making the process of getting job easier.</h2>
              <div data-aos="fade-up" data-aos-delay="600">
                <div classNameName="text-center text-lg-start">
                  <a href="#about" className="btn-get-started scrollto d-inline-flex align-items-center justify-content-center align-self-center">
                    <span>Get Started</span>
                    <i className="bi bi-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 hero-img" data-aos="zoom-out" data-aos-delay="200">
              <img src={logo0} className="img-fluid" alt="image"/>
            </div>
          </div>
        </div>

      </section>


{/* Values */}
    <section id="values" className="values">

          <div className="container" data-aos="fade-up">

            <header className="section-header">
              <h2>Our Features</h2>
            </header>

            <div className="row">

              <div className="col-lg-4" data-aos="fade-up" data-aos-delay="200">
                <div className="box">
                  <img src={logo1} className="img-fluid" alt="image1"/>
                  <h3>Networking tools</h3>
                  <p>Tools that enable job seekers to connect with other professionals, build their network, and seek advice and referrals.</p>
                </div>
              </div>

              <div className="col-lg-4 mt-4 mt-lg-0" data-aos="fade-up" data-aos-delay="400">
                <div className="box">
                  <img src={logo2} className="img-fluid" alt=""/>
                  <h3>Resume builder</h3>
                  <p>An online resume builder tool can help job seekers create a professional-looking resume that can be easily uploaded to the site and shared with potential employers.</p>
                </div>
              </div>

              <div className="col-lg-4 mt-4 mt-lg-0" data-aos="fade-up" data-aos-delay="600">
                <div className="box">
                  <img src={logo3} className="img-fluid" alt=""/>
                  <h3>Application tracking system</h3>
                  <p>A system that helps job seekers keep track of their job applications, including submission dates, job descriptions, and employer contact information.</p>
                </div>
              </div>

            </div>  

          </div>

        </section>
    </div>
    <Count/>
    </>
  )
}

export default Landing