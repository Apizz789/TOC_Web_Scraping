import React from 'react'
import './../../../css/home.style.css'
import Card from '../Products/Card'
import Banner from '../Home/Banner'
import { useState, useEffect } from "react";
import axios from 'axios'
const data_trend = [
  {
  name: '7" - 24" Digital TV 12v 240v for Motorhome Caravan Boat DVB-T2 Freeview PVR',
  price: "THB17,036.37",
  img: ["https://i.ebayimg.com/images/g/V0oAAOSwapdbveOc/s-l300.jpg"],
},
{
  name: "Hisense 55AE7000F - Smart TV LED Ultra HD 4K, HDR 10+, Dolby DTS, con Alexa",
  price: "THB17,036.37",
  img: ["https://i.ebayimg.com/images/g/XbsAAOSw2m1iUwSW/s-l300.jpg"],
  
},
{
  name: "Hisense 55AE7000F - Smart TV LED Ultra HD 4K, HDR 10+, Dolby DTS, con Alexa",
  price: "THB17,036.37",
  img: ["https://i.ebayimg.com/images/g/XbsAAOSw2m1iUwSW/s-l300.jpg"],
},
{
  name: "Hisense 55AE7000F - Smart TV LED Ultra HD 4K, HDR 10+, Dolby DTS, con Alexa",
  price: "THB17,036.37",
  img: ["https://i.ebayimg.com/images/g/XbsAAOSw2m1iUwSW/s-l300.jpg"],
},
]



export default function Homepage(props) {

  const shoot = () => {
    alert("Great Shot!");
  }


  const [data, setData] = useState({})
  const [url,setUrl] = useState("http://43.228.85.133:80/realtime/")
  useEffect(() =>{ 
    axios.get(url).then(res => {
      const data_trend = res.data
      
      console.log(data_trend)
      console.log("Hi")
      
      // data.map((each)=> alert(each.name))
    }).catch(error => {
      console.log(error.response)
    })
  },[url])
  
  const itemProduct = data_trend.map((e) =>
        <Card product={e} doFunc={shoot}></Card>
  );


  return (
    <div class="Homepage">
      <Banner/>
      <div class="homepage-center-container">
        <div class="homepage-header">FLASH SALES</div>
        {!props.showLoginPopup && <div class="homepage-header-line"></div>}
        <div class="homepage-card-container">
          <div class ="homepage-card-child"><Card/></div>
          <div class ="homepage-card-child"><Card/></div>
          <div class ="homepage-card-child"><Card/></div>
          <div class ="homepage-card-child"><Card/></div>
        </div>
      </div>
      <div class="homepage-center-container">
        <div class="homepage-header">TRENDING</div>
        {!props.showLoginPopup && <div class="homepage-header-line"></div>}
        <div class="homepage-card-container">
          {itemProduct}
        </div>
      </div>
      <div class="homepage-center-container">
        <div class="homepage-header">TOP PRODUCTS</div>
        {!props.showLoginPopup && <div class="homepage-header-line"></div>}
        <div class="homepage-card-container">
          <div class ="homepage-card-child"><Card/></div>
          <div class ="homepage-card-child"><Card/></div>
          <div class ="homepage-card-child"><Card/></div>
          <div class ="homepage-card-child"><Card/></div>
        </div>
      </div>
    </div>
  )
}
