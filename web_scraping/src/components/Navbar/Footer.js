import React from 'react'
import '../../css/footer.style.css'

const contact_img = "https://th.qr-code-generator.com/wp-content/https://raw.githubusercontent.com/Apizz789/TOC_Web_Scraping/main/web_scraping/public/images/QR.png/qr/new_structure/markets/basic_market/generator/dist/generator/assets/images/websiteQRCode_noFrame.png"
const contact_url = "www.google.com"

function Footer(props) {
    return (

        <div class="footer">
            <div class="footer-container box1">
                <div class="footer-container-child">Dazala © 2022</div>
            </div>

            <div class="footer-container box2">

                <div class="footer-container-child" onClick={(e) => props.pageHandle("ContactUs", "Home")}>
                    <div >ContactUs</div>
                </div>

            </div>
            <div class="footer-container box1">
                <div class="footer-container-child"><img class="contact-img" src={contact_img} /></div>
            </div>








            
            </div>

    )
}

export default Footer