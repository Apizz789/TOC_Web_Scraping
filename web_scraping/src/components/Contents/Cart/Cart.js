import React from 'react'
import '../../../css/cart.style.css'

function Cart(props) {
  return (

    <div class="container titlebox-chart  ">
      <br></br>
      <div ><center><h1 ><b>My Cart</b></h1></center></div>
      <hr></hr>

      <div class="row " >
        <div class="col table-box "> <center>ลำดับ</center> </div>
        <div class="col  table-box"> <center>รายการ</center> </div>
        <div class="col table-box"> <center>ราคา(บาท)</center> </div>
      </div>
      <hr></hr>


      {props.kCart.products.length !== 0 && props.kCart.products.map((each) =>
          <div class="row" >
          <div class="col "> <center>{each.id}</center> </div>
          <div class="col "> <center>{each.name}</center> </div>
          <div class="col "> <center>{each.price}</center> </div>
        </div>)}

      <br></br>
      <br></br>
      <br></br>
      <hr></hr>

      <div class="row" >
        <div class="col "> <center><u>ราคารวม</u></center> </div>
        <div class="col "> <center></center> </div>
        <div class="col "> <center>{props.kCart.totalPrice}</center> </div>

      </div>
      <br></br>
      <div class="row">


        <div class="col">
          <center>
          <div class="component-btn" onClick={(e) => props.clearCart("Clear")}>

                    <center>
                      <h2>ลบตะกร้า</h2>
                    </center>
                  </div>
            <div class="component-btn" onClick={(e) => props.pageHandle("Cart", "Home")}>
              <center>
                <h2>กลับหน้าหลัก</h2>
              </center>
            </div>
          </center>
        </div>

        <div class="col"><center>
          <div class="component-btn" onClick={(e) => props.clearCart("Complete")}>
            <center>
              <h2>ต่อไป</h2>
            </center>
          </div>
        </center>
        </div>

      </div>





    </div>




  )
}

export default Cart
