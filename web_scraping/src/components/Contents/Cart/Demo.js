import React, { useState } from 'react'
import '../../../css/component.style.css'
import "../../../css/demo.style.css"
import ListProduct from "../../../resources/compare.dummy"

function Demo(props) {
  const [Product,setProduct] = useState(
    {
      lazada: {
          name: '',
          price: "",
      },
      Welove: {
          name: '',
          price: "",
      },
      ebay: {
          name: '',
          price: "",
      }
  }
  );
  function optionChange(event){
    setProduct(ListProduct[event.target.value]);
  } 
  return (
    <div>
      <div style={{ display: "flex", flexDirection: "column", width:"100%", alignItems:"center", marginTop:"2%"}}>
        <div style={{display:"flex",width:"100%",justifyContent:"center"}}>
          <select style={{width:"65%",height:"60px",paddingLeft:"1%",fontSize:"28px"}} onChange={optionChange}>
            <option value="" selected disabled hidden>เลือกรุ่นโทรศัพท์/ไอแพด/ฯลฯ</option>
            <option value="0" class='optionDemo'>Apple iPhone 12</option>
            <option value="1" class='optionDemo'>Samsung Galaxy S10 Lite (RAM8GB/ROM128GB)</option>
            <option value="2" class='optionDemo'>Samsung Galaxy A32 5G 128GB</option>
            <option value="3" class='optionDemo'>Apple iPhone 11 128GB</option>
            <option value="4" class='optionDemo'>Apple iPhone SE 128 GB</option>
            <option value="5" class='optionDemo'>IPHONE 11 64GB</option>
            <option value="6" class='optionDemo'>Apple iPad Air 2 Wi-Fi + Cellular 16GB (Space Gray)</option>
            <option value="7" class='optionDemo'>Huawei MediaPad M5 Pro</option>
            <option value="8" class='optionDemo'>APPLE Apple Pencil (2nd Generation)</option>
          </select>
        </div>
        <div style={{ display: "flex", justifyContent:"Space-around", width:"100%",marginTop:"2%"}}>
          <div style={{ display: "flex", flexDirection: "column",alignItems:"center",width:"20%",}}>
            <div class="DemoTopic"><h2>Lazada</h2></div>
            <div class="DemoContentBox">
              <h3>{Product.lazada.name}</h3>
              <hr style={{width:"75%",textAlign:"left",marginLeft:"0"}}/>
              <h1 class="DemoCost">{Product.lazada.price}</h1>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column",alignItems:"center",width:"20%",}}>
            <div class="DemoTopic"><h2>We love shopping</h2></div>
            <div class="DemoContentBox">
              <h3>{Product.Welove.name}</h3>
              <hr style={{width:"75%",textAlign:"left",marginLeft:"0"}}/>
              <h1 class="DemoCost">{Product.Welove.price}</h1>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column",alignItems:"center",width:"20%",}}>
            <div class="DemoTopic"><h2>Ebay</h2></div>
            <div class="DemoContentBox">
              <h3>{Product.ebay.name}</h3>
              <hr style={{width:"75%",textAlign:"left",marginLeft:"0"}}/>
              <h1 class="DemoCost">{Product.ebay.price}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Demo