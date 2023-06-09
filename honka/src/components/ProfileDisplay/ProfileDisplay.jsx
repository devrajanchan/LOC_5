import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom';
import axios from "axios"

const ProfileDisplay = () => {

  const [user, setUser] = useState([]);
  const {id} = useParams()

  useEffect(() => {

      
      console.log(id)
      axios.get(`http://localhost:5000/employee/profiledisplay?id=640c373fbe7a13b3b92f4edc`,{mode:"cors"})  
      // axios.get(`http://localhost:5000/employee/profiledisplay?id=640c373fbe7a13b3b92f4edc`,{mode:"cors"})  
      .then(response => {
        setUser(response.data);
        console.log('Response: ',response.data)
        // console.log(user)
      })
      .catch(error => {
        console.error(error);
      })
  },[]);


  return (
    <div>
    
      <div className="container">
    <div className="main-body">
    
          <nav aria-label="breadcrumb" className="main-breadcrumb">
            <ol className="breadcrumb mt-5">
              <li className="breadcrumb-item"><a href="index.html">Home</a></li>
              <li className="breadcrumb-item "><a href="javascript:void(0)">User</a></li>
              <li className="breadcrumb-item active" aria-current="page">User Profile</li>
            </ol>
          </nav>
    
          <div className="row gutters-sm">
            <div className="col-md-4 mb-3">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex flex-column align-items-center text-center">
                    <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" className="rounded-circle" width="150"/>
                    <div className="mt-3">
                      <h4>{user ? user.firstname : "null bk"}</h4>
                      <p className="text-secondary mb-1">Full Stack Developer</p>
                      <p className="text-muted font-size-sm">Bay Area, San Francisco, CA</p>
                      <button className="btn btn-primary">Follow</button>
                      <button className="btn btn-outline-primary">Message</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card mt-3">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 className="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-globe mr-2 icon-inline"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>Website</h6>
                    <span className="text-secondary">{user ? user.linkeldin : "null linkeldin"}</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 className="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-github mr-2 icon-inline"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>Github</h6>
                    <span className="text-secondary">{user ? user.github : "null github"}</span>
                  </li>
                
                </ul>
              </div>
            </div>
            <div className="col-md-8">
              <div className="card mb-3">
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">First Name</h6>
                    </div>
                    <div className="col-sm-9 text-secondary" >
                      {user ? user.firstname : "null bk"} 
                    </div>
                  </div>
                  <hr/>
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Last Name</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      {user ? user.lastname : "Kader in Dadar"}
                    </div>
                  </div>
                  <hr/>
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Email</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                    {user ? user.email : "null@g.com"}
                    </div>
                  </div>
                  <hr/>
                  {/* <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Phone</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      (239) 816-9029
                    </div>
                  </div> */}
                  
                  
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">DOB</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                    {user ? user.birth : "nullbirth"}
                    </div>
                  </div>
                  <hr/>
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Location</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                    {user ? user.loc : "nullloc"}
                    </div>
                  </div>
                  <hr/>
                  <div className="row">
                    <div className="col-sm-12">
                      <a className="btn btn-info " target="__blank" href="https://www.bootdey.com/snippets/view/profile-edit-data-and-skills">Edit</a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row gutters-sm">
                <div className="col-sm-6 mb-3">
                  <div className="card h-100">
                    <div className="card-body">
                      <h4  className="d-flex align-items-center mb-3">Experience</h4>
                      <div className="row">
                    <div className="col-m-3 mt-3 mb-3">
                      <h6 className="mb-0">Gap Years</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                    {user ? user.loc : "nullloc"}
                    </div>
                  </div>
                  <hr/>

                  <div className="row">
                    <div className="col-m-3  mt-3 mb-3">
                      <h6 className="mb-0">Work Experience</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                    {user ? user.loc : "nullloc"}
                    </div>
                  </div>
                  <hr/>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 mb-3">
                  <div className="card h-100">
                    <div className="card-body">
                      <h6 className="d-flex align-items-center mb-3">Skills</h6>
                      <small>{user ? user.skill1 : "nullbirth"}</small>
                      <div className="progress mb-3" style={{height: "5px"}}>
                        <div className="progress-bar bg-primary" role="progressbar" style={{width: "80%"}} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <small>{user ? user.skill2 : "nullbirth"}</small>
                      <div className="progress mb-3" style={{height: "5px"}}>
                        <div className="progress-bar bg-primary" role="progressbar" style={{width: "72%"}} aria-valuenow="72" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <small>{user ? user.skill3 : "nullbirth"}</small>
                      <div className="progress mb-3" style={{height: "5px"}}>
                        <div className="progress-bar bg-primary" role="progressbar" style={{width: "89%"}} aria-valuenow="89" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      
                    </div>
                  </div>
                </div>
              </div>



            </div>
          </div>

        </div>
    </div>
       
    </div>

  )
}

export default ProfileDisplay
