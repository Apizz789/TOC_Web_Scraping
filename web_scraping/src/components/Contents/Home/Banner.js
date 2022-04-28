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
                <Carousel.Caption>
                {/* <img src="../images/RTS=LOGO2.png" style={{height:'25vh',objectFit:'contain'}} /><br/><br/> <hr/> */}
                  <h3 >Dazala</h3>
                  <p >WEB Application for everyone who want to shopping, just enjoy with us.</p>
                </Carousel.Caption>
              </Carousel.Item>


              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="../images/banner2.png?"
                  alt="First slide"
                  style={{height:'50vh', width:'100vw',backgroundColor:'grey',objectFit:'cover',borderRadius:"20px"}}
                />
                <Carousel.Caption>
                {/* <img src="../images/BTS-Logo.png" style={{height:'25vh',objectFit:'contain'}} /> <br/><br/> <hr/> */}
                  <h3 >Lazada</h3>
                  <p >The international e-commerce company founded by Maximilian Bittner</p>
                </Carousel.Caption>
              </Carousel.Item>


              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="../images/banner3.png"
                  alt="Second slide"
                  style={{height:'50vh', width:'100vw',backgroundColor:'grey',objectFit:'cover',borderRadius:"20px"}}
                />

                <Carousel.Caption>
                {/* <img src="../images/MRT-Logo.png" style={{height:'25vh',objectFit:'contain'}}/>  <br/><br/> <hr/> */}
                  <h3 >We Love Shopping</h3>
                  <p >Shopee Pte. Ltd. (Shopee) is a Singaporean multinational technology company which focuses mainly on e-commerce.</p>
                </Carousel.Caption>
              </Carousel.Item>


              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="../images/banner4.png"
                  alt="Third slide"
                  style={{height:'50vh', width:'100vw',backgroundColor:'grey',objectFit:'cover',borderRadius:"20px"}}
                />

                <Carousel.Caption>
                {/* <img src="../images/ARL-Logo.png" style={{height:'25vh',objectFit:'contain'}}/> <br/><br/> <hr/> */}
                  <h3 >EBAY</h3>
                  <p >eBay Inc. is an American multinational e-commerce corporation based in San Jose, California.</p>
                </Carousel.Caption>
              </Carousel.Item>



            </Carousel>
        </div>
    </div>






  )
}

export default Banner