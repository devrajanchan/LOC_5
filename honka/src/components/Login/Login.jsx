import React,{useState} from 'react'
import './login.css'
import axios from 'axios';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import Register from '../Register/Register';

const Login = () => {

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


  const Log = (e) => {
    e.preventDefault();
    const userbk={
        email: user.email,
        password:user.password
    }
    console.log("Hello BK: ",userbk)
    // const {id} = useParams()
    // console.log(id)
    console.log(userbk)
    axios.post(`http://localhost:5000/employee/login`, userbk,{mode:"cors"})  
    .then(response => {
      setUser(response.data);
      console.log(response.data)
    })
    .catch(error => {
      console.error(error);
    })
  }





  return (
    <div className='mt-5'>
      <section className="vh-100" >
  <div className="container-fluid h-custom " >
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-md-9 col-lg-6 col-xl-5">
        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
          className="img-fluid" alt="Sample image"/>
      </div>
      <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
        <form>
          {/* <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
            <p className="lead fw-normal mb-0 me-3">Sign in with</p>
            <button type="button" className="btn btn-primary btn-floating mx-1">
            <FacebookRoundedIcon/>            </button>

            <button type="button" className="btn btn-primary btn-floating mx-1">
            <TwitterIcon/>
            </button>

            <button type="button" className="btn btn-primary btn-floating mx-1">
              <LinkedInIcon/>
            </button>
          </div>

          <div className="divider d-flex align-items-center my-4">
            <p className="text-center fw-bold mx-3 mb-0">Or</p>
          </div> */}

          {/* <!-- Email input --> */}
          <div className="form-outline mb-4">
            <input type="email" id="form3Example3" name="email" className="form-control form-control-lg"
              placeholder="Enter a valid email address" onChange={handleChange}/>
            <label className="form-label" for="form3Example3">Email address</label>
          </div>

          <div className="form-outline mb-3">
            <input type="password" id="form3Example4" name="password" className="form-control form-control-lg"
              placeholder="Enter password" onChange={handleChange}/>
            <label className="form-label" for="form3Example4">Password</label>
          </div>

          <div className="d-flex justify-content-between align-items-center">
            {/* <!-- Checkbox --> */}
            <div className="form-check mb-0">
              <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
              <label className="form-check-label" for="form2Example3">
                Remember me
              </label>
            </div>
            <a href="#!" className="text-body">Forgot password?</a>
          </div>

          <div className="text-center text-lg-start mt-4 pt-2" >
            <button type="button" className="btn btn-primary btn-lg"
              style={{paddingLeft:"2.5rem",paddingRight:"2.5rem",margin:"2%"}} onClick={Log}>Login</button>
            <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <a href="#!"
                className="link-danger " >Register</a></p>
          </div>

        </form>
      </div>
    </div>
  </div>
  <div
    className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary" style={{marginTop:"3%"}}>
    {/* <!-- Copyright --> */}
    <div className="text-white  mb-md-0">
      Copyright © 2020. All rights reserved.
    </div>
    {/* <!-- Copyright --> */}

    {/* <!-- Right --> */}
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

export default Login