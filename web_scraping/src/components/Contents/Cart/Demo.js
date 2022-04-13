import React from 'react'
import '../../../css/component.style.css'

function Demo(props) {
  return (
    <div>Demo : {props.header}
    <div class="component-btn" onClick={(e) => props.pageHandle("Cart")}> go Cart</div>
      <div class="component-btn" onClick={(e) => props.pageHandle("Order")}> go Order</div>
    </div>

  )
}

export default Demo