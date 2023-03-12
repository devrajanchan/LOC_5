import React,{useState} from 'react'
import axios from 'axios';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate()

  const [user, setUser] = useState({
    email: "",
    password:""
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

  const Reg = (e) => {
    e.preventDefault();
    const userbk={
        email: user.email,
        password:user.password
    }
    console.log("Hello BK: ",userbk)
    // const {id} = useParams()
    // console.log(id)
    console.log(user)
    axios.post(`http://localhost:5000/employee/register`, userbk,{mode:"cors"})  
    .then(response => {
      setUser(response.data);
      console.log(response.data)
    })
    .catch(error => {
      console.error(error);
    })
    navigate("/login")
  }



  return (

    <div>
      <section className="vh-100">
  <div className="container-fluid h-custom">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-md-9 col-lg-6 col-xl-5">
        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
          className="img-fluid" alt="Sample image"/>
      </div>
      <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
        <form>
          
        

          {/* <!-- Email input --> */}
      
          <form class="mx-1 mx-md-4 "style={{marginTop:"38%"}} >

{/* <div class="d-flex flex-row align-items-center mb-4 mt-4">
  <i class="fas fa-user fa-lg me-3 fa-fw"></i>
  <div class="form-outline flex-fill mb-0">
    <input type="text" id="form3Example1c" class="form-control" placeholder='Username'/>
    
  </div>
</div> */}

<div class="d-flex flex-row align-items-center mb-4">
  <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
  <div class="form-outline flex-fill mb-0">
    <input type="email" id="form3Example3c" class="form-control" name="email"  placeholder='Your Email' onChange={handleChange}/>
    
  </div>
</div>

<div class="d-flex flex-row align-items-center mb-4">
  <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
  <div class="form-outline flex-fill mb-0">
    <input type="password" id="form3Example4c" class="form-control" name="password" placeholder='Password' onChange={handleChange}/>
  
  </div>
</div>





    

<div class="form-check d-flex justify-content-center mb-5">
  <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3c" />
  <label class="form-check-label" for="form2Example3">
    I agree all statements in <a href="#!">Terms of service</a>
  </label>
</div>

<div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
 
  <button type="button" class="btn btn-primary btn-lg" onClick={Reg}>Register</button>
</div>

</form>


       

    

        </form>
      </div>
    </div>

 
   
    <div>
      <a href="#!" className="text-white me-4">
        <i className="fab fa-facebook-f"></i>
      </a>
      <a href="#!" className="text-white me-4">
        <i className="fab fa-twitter"></i>
      </a>
      <a href="#!" className="text-white me-4">
        <i className="fab fa-google"></i>
      </a>
      <a href="#!" className="text-white">
        <i className="fab fa-linkedin-in"></i>
      </a>
    </div>
    {/* <!-- Right --> */}
  </div>
</section>
    </div>
  )
}

export default Register