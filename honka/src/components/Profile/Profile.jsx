import React,{useState} from 'react'
import "./profile.css"
import pic from "../img/features.png"
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
    const navigate = useNavigate()
    const [user, setUser] = useState({
        email: "",
        firstname: "",
        lastname: "",
        birth: "",
        linkeldin:"",
        gap:"",
        loc:"",
        exp:"",
        skills:[""]
    })

    const handleChange = e => {
        // const { name, value } = e.target
        console.log(user)
        const name=e.target.name
        const value=e.target.value
        setUser({
            ...user,
            [name]: value
        })
      } 


      const Prof = (e) => {
        e.preventDefault();
        const userbk={
            email: user.email,
            firstname: user.firstname,
            lastname: user.lastname,
            birth: user.birth,
            linkeldin: user.linkeldin,
            gap: user.gap,
            loc: user.loc,
            exp: user.exp,
            skill:user.skill
        }
        console.log("Hello BK: ",userbk)
        // const {id} = useParams()
        // console.log(id)
        console.log(user)
        axios.post(`http://localhost:5000/employee/profile`, userbk,{mode:"cors"})  
        .then(response => {
          setUser(response.data);
          console.log(response.data)
        })
        .catch(error => {
          console.error(error);
        })
        navigate("/")
      }
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
                            <input className='innput'  type="text" name="firstname" id="first_name" onChange={handleChange}/>
                        </div>
                        <div className="form-input">
                            <label for="last_name" className="required">Last name</label>
                            <input className='innput' type="text" name="lastname" id="last_name" onChange={handleChange}/>
                        </div>
                         <div className="form-input">
                            <label for="email" className="required">Email</label>
                            <input  className='innput' type="text" name="email" id="email" onChange={handleChange}/>
                        </div>
                        <div className="form-input">
                            <label for="company" className="required">DOB</label>
                            <input className='innput' type="date" name="birth" id="DOB" onChange={handleChange}/>
                        </div>
                       
                        <div className="form-input">
                            <label for="phone_number" className="required">LinkedIn Profile</label>
                            <input className='innput' type="text" name="linkeldin" id="Linkedln" onChange={handleChange}/>
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
                            <input className='innput' type="number" name="gap" id="gap" onChange={handleChange}/>
                        </div>
                        <div className="form-input">
                            <label for="blank_name">Location</label>
                            <input className='innput' type="text" name="loc" id="Location" onChange={handleChange}/>
                        </div>
                        <div className="form-input">
                            <label for="phone_number" className="required">Experience</label>
                            <input className='innput' type="number" name="exp" id="experience" onChange={handleChange}/>
                        </div>
                        {/* <div className="form-input">
                            <label for="phone_number" className="required">Resume</label>
                            <input className='innput' type="file" name="Resume" id="experience" />
                        </div> */}
                    </div>
                </div>
                

         

                <div className="form-submit">
                    <input className='innput submit mt-4' type="submit" value="Submit" onClick={Prof} id="submit" name="submit" />
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
