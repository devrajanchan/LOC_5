import React from 'react'
import MoodIcon from '@mui/icons-material/Mood';
import DescriptionIcon from '@mui/icons-material/Description';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import EngineeringIcon from '@mui/icons-material/Engineering';

export const Count = () => {
  return (
    <div>{/* Count Value */}
    <section id="counts" className="counts">
          <div className="container" data-aos="fade-up">
    
            <div className="row gy-4">
    
              <div className="col-lg-3 col-md-6">
                <div className="count-box">
                  <MoodIcon/>
                  <div className='mr-2'>
                    
                    <p>Happy Clients</p>
                    <p>15k+</p>
                  </div>
                </div>
              </div>
    
              <div className="col-lg-3 col-md-6">
                <div className="count-box">
                <DescriptionIcon/>
                  <div>
                    <p>Projects</p>
                    <p>521</p>
                  </div>
                </div>
              </div>
    
              <div className="col-lg-3 col-md-6">
                <div className="count-box">
                <SupportAgentIcon/>
                  <div>
                    <p>Hours Of Support</p>
                    <p>1463</p>
                  </div>
                </div>
              </div>
    
              <div className="col-lg-3 col-md-6">
                <div className="count-box">
                <EngineeringIcon/>
                  <div>
                    <p>Hard Workers</p>
                    <p>4</p>
                  </div>
                </div>
              </div>
    
            </div>
    
          </div>
        </section></div>
  )
}
