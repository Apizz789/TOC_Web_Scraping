import React from 'react'
import './../../../css/banner.style.css'
import Carousel from 'react-bootstrap/Carousel'

function Banner() {
  return (
    <div class="homepage-banner-container">
         <div className='train-slidebar' style={{margin:"5px"}}>
            <Carousel  interval={6000}>
            <Carousel.Item >
                <img
                  className="d-block w-100"
                  src="../images/banner1.png"
                  alt="First slide"
                  style={{height:'50vh', width:'100vw',backgroundColor:'grey',objectFit:'cover',borderRadius:"20px"}}
                />
                
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="../images/banner2.png?"
                  alt="First slide"
                  style={{height:'50vh', width:'100vw',backgroundColor:'grey',objectFit:'cover',borderRadius:"20px"}}
                />
               
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="../images/banner3.png"
                  alt="Second slide"
                  style={{height:'50vh', width:'100vw',backgroundColor:'grey',objectFit:'cover',borderRadius:"20px"}}
                />

                
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="../images/banner4.png"
                  alt="Third slide"
                  style={{height:'50vh', width:'100vw',backgroundColor:'grey',objectFit:'cover',borderRadius:"20px"}}
                />

                
              </Carousel.Item>

            </Carousel>
        </div>
    </div>






  )
}

export default Banner