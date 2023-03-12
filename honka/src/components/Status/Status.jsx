import React from 'react'
import pic1 from '../../img/jpmc.jpg'
import pic2 from '../../img/goldman.png'
import pic3 from '../../img/morgan-stanley-logo.png'
import "./status.css"

const Status = () => {
  const handleClick = (value1, value2) => {
    console.log(`Value 1: ${value1}`);
    console.log(`Value 2: ${value2}`);
  };
  return (
    <div>
       <section class="package" id="package">
        <div class="container mt-3">

        

          <h2 class="h2 section-title">Application Status</h2>

          {/* <div class="btn-group mb-5" style={{marginLeft:"35%"}} role="group" aria-label="Basic example">
  <button type="button" class="btn btn-primary" style={{}}  onClick={() => handleClick('dummy value 1', 'dummy value 2')} >Left</button>
  <button type="button" class="btn btn-primary">Middle</button>
  <button type="button" class="btn btn-primary">Right</button>
</div> */}
          <ul class="package-list">

            <li>
              <div class="package-card">

                <figure class="card-banner">
                  <img src={pic1} alt=" The Great Holiday On Beach " loading="lazy"/>
                </figure>

                <div class="card-content">

                  <h2 class="price"> JP Morgan Chase & Co.</h2>

                  <h3 class="card-text">
                    A US Based fintect company
                  </h3>

                  
                </div>

                <div class="card-price">

                  

                  <p class="price">
                    Accepted
                  </p>

                </div>

              </div>
            </li>

            <li>
              <div class="package-card">

                <figure class="card-banner">
                  <img src={pic2} alt="Summer Holiday To The North River" loading="lazy"/>
                </figure>

                <div class="card-content">

                  <h3 class="price">Goldman Sach's</h3>

                  <p class="card-text">
                    Laoreet, voluptatum nihil dolor esse quaerat mattis explicabo maiores, est aliquet porttitor! Eaque,
                    cras, aspernatur.
                  </p>

                  

                </div>

                <div class="card-price">

                  <div class="wrapper">

                    

                    <div class="card-rating">
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                    </div>

                  </div>

                  <p class="price">
                    Rejected
                  </p>


                </div>

              </div>
            </li>

            <li>
              <div class="package-card">

                <figure class="card-banner">
                  <img src={pic3} alt="Santorini Island's Weekend Vacation" loading="lazy"/>
                </figure>

                <div class="card-content">

                  <h3 class="price">Morgan Stanley</h3>

                  <p class="card-text">
                    Laoreet, voluptatum nihil dolor esse quaerat mattis explicabo maiores, est aliquet porttitor! Eaque,
                    cras, aspernatur.
                  </p>

                </div>

                <div class="card-price">


                  <p class="price">
                    Pending
                  </p>
                </div>

              </div>
            </li>

          </ul>

          <button class="btn btn-primary " style={{justifyContent:"center",display:"flex"}}>View All Offers</button>

        </div>
      </section>
    </div>
  )
}

export default Status