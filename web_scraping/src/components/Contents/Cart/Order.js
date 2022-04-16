import React from 'react'
import '../../../css/component.style.css'

function Order(props) {
  return (
    <div>Order
      <div class="component-btn" onClick={(e) => props.pageHandle("Cart","Reciept")}> go Reciept</div>
    </div>
  )
}

export default Order