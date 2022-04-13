import React from 'react'
import '../../../css/component.style.css'

function Cart(props) {
  return (
    <div>
      <div >Cart</div>
      <div class="component-btn" onClick={(e) => props.pageHandle("Home")}> go Home</div>
      <div class="component-btn" onClick={(e) => props.pageHandle("Demo")}> go Demo</div>
    </div>
  )
}

export default Cart
