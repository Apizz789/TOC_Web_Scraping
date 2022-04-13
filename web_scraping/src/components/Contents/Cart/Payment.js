import React from 'react'
import '../../../css/component.style.css'

function Payment(props) {
  return (
    <div >Payment
      <div class="component-btn" onClick={(e) => props.pageHandle("Order")}> go Reciept</div>
    </div>
  )
}

export default Payment