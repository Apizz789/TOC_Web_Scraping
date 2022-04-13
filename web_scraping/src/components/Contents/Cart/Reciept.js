import React from 'react'
import '../../../css/component.style.css'

function Reciept(props) {
  return (
    <div >Reciept
          <div class="component-btn" onClick={(e) => props.pageHandle("Order")}> go Order</div>
        <div class="component-btn" onClick={(e) => props.pageHandle("Payment")}> go Payment</div>
    </div>
  )
}

export default Reciept