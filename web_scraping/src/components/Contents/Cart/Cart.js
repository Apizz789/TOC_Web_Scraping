import React from 'react'
import '../../../css/component.style.css'

function Cart(props) {
  return (
    <div>
      <div >Cart</div>
      <div class="component-btn" onClick={(e) => props.pageHandle("Cart","Order")}> go Order</div>
    </div>
  )
}

export default Cart
