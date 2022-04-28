import React from 'react'
import '../../../css/reciept.css'

function Reciept(props) {
  return (


    <center>
          <div class="component-btn" onClick={(e) => props.pageHandle("Order","Payment")}> 
            <center>
              <h2>Payment</h2>
            </center>
          </div>
        </center>

  )
}

export default Reciept