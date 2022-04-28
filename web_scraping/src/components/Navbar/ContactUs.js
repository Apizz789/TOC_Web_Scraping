import React from 'react'
import '../../css/contactus.css'
    
const contact_img = "https://th.qr-code-generator.com/wp-content/themes/qr/new_structure/markets/basic_market/generator/dist/generator/assets/images/websiteQRCode_noFrame.png"
const contact_url = "www.google.com"

function ContactUS(props) {
    return (
       
        <div>
             <h1>Header Contact</h1>
            <div onClick={(e) => props.pageHandle("ContactUs","Home")}>Home</div>
        </div>
    )
}

export default ContactUS