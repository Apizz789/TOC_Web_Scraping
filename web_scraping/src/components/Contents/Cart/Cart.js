import React from 'react'
import '../../../css/cart.style.css'

function Cart(props) {
  return (


    

    <center>
    <div class="component-btn" onClick={(e) => props.pageHandle("Cart", "Order")}>
      <center>
        <h2>Go Order</h2>
      </center>
    </div>
  </center>






  )
}

export default Cart
