import {useState, useEffect} from 'react'
import "./card.css"
import { useParams } from 'react-router-dom'
import axios from 'axios'

const Request = () => {
    const {id} = useParams()
    // console.log("id ",id)
    const [matches, setMatches] = useState([])
    
    useEffect(()=>{
        const getMatches = async ()=>{
            try{
                const res = await axios.get(`http://localhost:8000/api/match-users/${id}`,{mode:"cors"})
                setMatches(res.data)
            }catch(error){
                console.log(error)
            }
        }
        getMatches();
        console.log("Matches",matches)
    },[])
  return (
<>
      <div class="container">
        <h1 class="section-title mt-5 mb-4 text-center ">Job Applicants</h1>
        
        <div class="row ">
            <div class="col-xs-12 col-sm-6 col-md-4 ">
                <div class="image-flip" >
                    <div class="mainflip flip-0">
                        <div class="frontside ">
                            <div class="card  ">
                                <div class="card-body text-center">
                                    <p><img class=" img-fluid mt-4 " style={{margin:"auto "}} src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg" alt="card image"/></p>
                                    <h4 class="card-title">Manthan</h4>
                                    <p class="card-text mb-3">Age: 30</p>
                                    <p class="card-text"> Work Experience: 3 Years</p>
                                </div>
                            </div>
                        </div>
                        <div class="backside">
                            <div class="card">
                                <div class="card-body text-center mt-4">
                                    <h4 class="card-title">Manthan</h4>
                                    <p class="card-text ">Bio: I like Hiking I like Hiking I like Hiking I like Hiking </p>
                                    
                                    <a href="#" class="btn btn-primary btn-sm"><i class="fa fa-plus"></i></a>
                                    <a href="#" class="btn btn-danger btn-sm"><i class="fa fa-minus"></i></a>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-xs-12 col-sm-6 col-md-4 ">
                <div class="image-flip" >
                    <div class="mainflip flip-0">
                        <div class="frontside ">
                            <div class="card  ">
                                <div class="card-body text-center">
                                    <p><img class=" img-fluid mt-4 " style={{margin:"auto "}} src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg" alt="card image"/></p>
                                    <h4 class="card-title">Harsh</h4>
                                    <p class="card-text mb-3">Age: 32</p>
                                    <p class="card-text"> Work Experience: 3 Years</p>
                                </div>
                            </div>
                        </div>
                        <div class="backside">
                            <div class="card">
                                <div class="card-body text-center mt-4">
                                    <h4 class="card-title">Harsh</h4>
                                    <p class="card-text ">Bio: I like Hiking I like Hiking I like Hiking I like Hiking </p>
                                    
                                    <a href="#" class="btn btn-primary btn-sm"><i class="fa fa-plus"></i></a>
                                    <a href="#" class="btn btn-danger btn-sm"><i class="fa fa-minus"></i></a>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-xs-12 col-sm-6 col-md-4 ">
                <div class="image-flip" >
                    <div class="mainflip flip-0">
                        <div class="frontside ">
                            <div class="card  ">
                                <div class="card-body text-center">
                                    <p><img class=" img-fluid mt-4 " style={{margin:"auto "}} src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg" alt="card image"/></p>
                                    <h4 class="card-title">Vardhan</h4>
                                    <p class="card-text mb-3">Age: 28</p>
                                    <p class="card-text"> Work Experience: 3 Years</p>
                                </div>
                            </div>
                        </div>
                        <div class="backside">
                            <div class="card">
                                <div class="card-body text-center mt-4">
                                    <h4 class="card-title">Vardhan</h4>
                                    <p class="card-text ">Bio: I like Hiking I like Hiking I like Hiking I like Hiking </p>
                                    
                                    <a href="#" class="btn btn-primary btn-sm"><i class="fa fa-plus"></i></a>
                                    <a href="#" class="btn btn-danger btn-sm"><i class="fa fa-minus"></i></a>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-4 ">
                <div class="image-flip" >
                    <div class="mainflip flip-0">
                        <div class="frontside ">
                            <div class="card  ">
                                <div class="card-body text-center">
                                    <p><img class=" img-fluid mt-4 " style={{margin:"auto "}} src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg" alt="card image"/></p>
                                    <h4 class="card-title">Ayush</h4>
                                    <p class="card-text mb-3">Age: 33</p>
                                    <p class="card-text"> Work Experience: 3 Years</p>
                                </div>
                            </div>
                        </div>
                        <div class="backside">
                            <div class="card">
                                <div class="card-body text-center mt-4">
                                    <h4 class="card-title">Ayush</h4>
                                    <p class="card-text ">Bio: I like Hiking I like Hiking I like Hiking I like Hiking </p>
                                    
                                    <a href="#" class="btn btn-primary btn-sm"><i class="fa fa-plus"></i></a>
                                    <a href="#" class="btn btn-danger btn-sm"><i class="fa fa-minus"></i></a>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-xs-12 col-sm-6 col-md-4 ">
                <div class="image-flip" >
                    <div class="mainflip flip-0">
                        <div class="frontside ">
                            <div class="card  ">
                                <div class="card-body text-center">
                                    <p><img class=" img-fluid mt-4 " style={{margin:"auto "}} src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg" alt="card image"/></p>
                                    <h4 class="card-title">Kevin</h4>
                                    <p class="card-text mb-3">Age: 31</p>
                                    <p class="card-text"> Work Experience: 3 Years</p>
                                </div>
                            </div>
                        </div>
                        <div class="backside">
                            <div class="card">
                                <div class="card-body text-center mt-4">
                                    <h4 class="card-title">Kevin</h4>
                                    <p class="card-text ">Bio: I like Hiking I like Hiking I like Hiking I like Hiking </p>

                                    <a href="#" class="btn btn-primary btn-m "><i class="fa fa-plus"></i></a>
                                    <a href="#" class="btn btn-danger btn-m ml-3"><i class="fa fa-minus"></i></a>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
     </div>
     </div>
     </>
  )
}

export default Request