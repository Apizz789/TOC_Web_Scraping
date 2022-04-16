import React from 'react'
import '../../../css/component.style.css'

function Reciept(props) {
  return (
    <div >Reciept
        <div class="component-btn" onClick={(e) => props.pageHandle("Order","Payment")}> go Payment</div>
    </div>
  )
}

export default Reciept