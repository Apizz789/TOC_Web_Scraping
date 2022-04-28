import React from 'react'
import '../../../css/payment.css'

function Payment(props) {
  return (


    <div className="text-center">


      <div className="container">


        <div class="col box-cart-main">

          <div class="row ">


            <div class="text-cart-header"><center><h1>Payment</h1></center></div>

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

          <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    TEST Dropdown button
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" href="#">Action</a>
    <a class="dropdown-item" href="#">Another action</a>
    <a class="dropdown-item" href="#">Something else here</a>
  </div>
</div>
          <center>
            <div class="component-btn" onClick={(e) => props.pageHandle("Reciept","Home")}>
              <center>
                <h2>Complete(go Home)</h2>
              </center>
            </div>
          </center>
        </div>
      </div>
    </div>

    // <div >Payment
    //   <div class="component-btn" onClick={(e) => props.pageHandle("Reciept","Home")}> Complete(go Home)</div>
    // </div>
  )
}

export default Payment