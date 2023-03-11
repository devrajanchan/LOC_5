import React from 'react'
import "./profile.css"
import pic from "../img/features.png"
const Profile = () => {
  return (
    <div>
     
    <div className="main">

<div className="container">
    <div className="signup-content">
        <div className="signup-img">
            <img className='immg' src={pic} alt="" style={{marginTop:"50%"}} />
            <div className="signup-img-content">
                <h2 className='hh2'>Register now </h2>
                <p className='pp'>while seats are available !</p>
            </div>
        </div>
        <div className="signup-form">
            <form method="POST" className="register-form" id="register-form">
                <div className="form-row">
                    <div className="form-group">
                        <div className="form-input">
                            <label for="first_name" className="required">First name</label>
                            <input className='innput'  type="text" name="first_name" id="first_name" />
                        </div>
                        <div className="form-input">
                            <label for="last_name" className="required">Last name</label>
                            <input className='innput' type="text" name="last_name" id="last_name" />
                        </div>
                         <div className="form-input">
                            <label for="email" className="required">Email</label>
                            <input  className='innput' type="text" name="email" id="email" />
                        </div>
                        <div className="form-input">
                            <label for="company" className="required">DOB</label>
                            <input className='innput' type="date" name="company" id="DOB" />
                        </div>
                       
                        <div className="form-input">
                            <label for="phone_number" className="required">LinkedIn Profile</label>
                            <input className='innput' type="text" name="phone_number" id="Linkedln" />
                        </div>

                        


                       

                    </div>
                    <div className="form-group">
                        <div className="form-select">
                            <div className="label-flex">
                                <label for="meal_preference">Skills</label>
                            </div>
                            <div className="select-list">
                                <select name="skill" id="skill">
                                    <option value="Vegetarian">Vegetarian</option>
                                    <option value="Kosher">Kosher</option>
                                    <option value="Asian Vegetarian">Asian Vegetarian</option>
                                </select>
                            </div>
                        </div>
                        
                        <div className="form-input">
                            <label for="chequeno">Gap Years</label>
                            <input className='innput' type="number" name="gap" id="gap" />
                        </div>
                        <div className="form-input">
                            <label for="blank_name">Location</label>
                            <input className='innput' type="text" name="Location" id="Location" />
                        </div>
                        <div className="form-input">
                            <label for="phone_number" className="required">Experience</label>
                            <input className='innput' type="number" name="experience" id="experience" />
                        </div>
                        <div className="form-input">
                            <label for="phone_number" className="required">Resume</label>
                            <input className='innput' type="file" name="Resume" id="experience" />
                        </div>
                    </div>
                </div>
                
                <div className="form-submit">
                    <input className='innput submit mt-4' type="submit" value="Submit"  id="submit" name="submit" />
                    <input className='innput submit' type="submit" value="Reset"  id="reset" name="reset" />
                </div>
            </form>
        </div>
    </div>
</div>

</div>
    <script src="vendor/jquery/jquery.min.js"></script>
    <script src="js/main.js"></script>
    </div>
  )
}

export default Profile
