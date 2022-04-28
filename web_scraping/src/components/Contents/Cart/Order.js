import React from 'react'
import '../../../css/oder.css'

function Order(props) {
  return (
    <div className="text-center">

     
          <center>
          <div class="component-btn" onClick={(e) => props.pageHandle("Cart","Spinlucky")}>
              <center>
                <h2>Spinlucky
                </h2>
              </center>
            </div>
          </center>
        </div>
    

  )
}

export default Order