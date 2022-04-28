import React from 'react'
import '../../../css/reciept.css'

function Reciept(props) {
  return (



    <div className="text-center">


    <div className="container">


      <div class="col box-cart-main">

        <div class="row ">


          <div class="text-cart-header"><center><h1>Reciept</h1></center></div>

        </div>


        <div className="col box-cart-table">
          <div class="column"><center><b>HEADER LIST</b></center></div>
          <div class="header-table">
            <center>
              <b></b>
            </center>
            <hr></hr>
          </div>

        </div>
        <div className="col box-cart-table">
          <div class="column"><center><b>HEADER LIST</b></center></div>
          <div class="header-table">
            <center>
              <b></b>
            </center>
            <hr></hr>
          </div>

        </div>


        <center>
          <div class="component-btn" onClick={(e) => props.pageHandle("Order","Payment")}> 
            <center>
              <h2>Payment</h2>
            </center>
          </div>
        </center>
      </div>
    </div>
  </div>

    // <div >Reciept
    //     <div class="component-btn" onClick={(e) => props.pageHandle("Order","Payment")}> go Payment</div>
    // </div>





  )
}

export default Reciept