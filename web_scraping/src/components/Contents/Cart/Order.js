import React from 'react'
import '../../../css/oder.css'

function Order(props) {
  return (

         <center>
          <div class="component-btn" onClick={(e) => props.pageHandle("Cart","Spinlucky")}>
              <center>
                <h2>Spinlucky

                </h2>
              </center>
            </div>
          </center>

  )
}

export default Order