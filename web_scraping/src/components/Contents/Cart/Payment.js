import React from 'react'
import '../../../css/payment.css'

function Payment(props) {
  return (


    <center>
    <div class="component-btn" onClick={(e) => props.pageHandle("Spinlucky","Reciept")}>
      <center>
        <h2>Complete(go Home)</h2>
      </center>
    </div>
  </center>

  
  )
}

export default Payment