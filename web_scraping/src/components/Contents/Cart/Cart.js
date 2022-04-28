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


      {/* Item Drop here */}
      <div class="row" >
        <div class="col "> <center>1</center> </div>
        <div class="col "> <center>รองเท้า</center> </div>
        <div class="col "> <center>88</center> </div>
      </div>

      <div class="row" >
        <div class="col "> <center>2</center> </div>
        <div class="col "> <center>รองเท้า</center> </div>
        <div class="col "> <center>88</center> </div>
      </div>

      <div class="row" >
        <div class="col "> <center>3</center> </div>
        <div class="col "> <center>รองเท้า</center> </div>
        <div class="col "> <center>88</center> </div>
      </div>

      <div class="row" >
        <div class="col "> <center>4</center> </div>
        <div class="col "> <center>รองเท้า</center> </div>
        <div class="col "> <center>88</center> </div>
      </div>

      <div class="row" >
        <div class="col "> <center>5</center> </div>
        <div class="col "> <center>รองเท้า</center> </div>
        <div class="col "> <center>88</center> </div>
      </div>

      <br></br>
      <br></br>
      <br></br>
      <hr></hr>

      <div class="row" >
        <div class="col "> <center><u>ราคารวม</u></center> </div>
        <div class="col "> <center></center> </div>
        <div class="col "> <center>88</center> </div>

      </div>
      <br></br>
      <div class="row">


        <div class="col">
          <center>
            <div class="component-btn" onClick={(e) => props.pageHandle("Cart", "Home")}>
              <center>
                <h2>กลับหน้าหลัก</h2>
              </center>
            </div>
          </center>
        </div>

        <div class="col"><center>
          <div class="component-btn" onClick={(e) => props.pageHandle("Cart", "Order")}>
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
