import React from 'react'
import '../../css/footer.style.css'

const contact_img = "https://github.com/Apizz789/TOC_Web_Scraping/blob/main/web_scraping/public/images/QRCode.png?raw=true"
const contact_url = "www.google.com"

function Footer(props) {
    return (

        <div class="footer">
            <div class="footer-container box1">
                <div class="footer-container-child">Dazala © 2022</div>
            </div>

            <div class="footer-container box2">

            <div class="footer-container-child" onClick={(e) => props.pageHandle("Home", "ContactUs")}>
                    <div >ContactUs</div>
                </div>

            </div>
            <div class="footer-container box1">
                <div class="footer-container-child"><a href="https://github.com/Apizz789/TOC_Web_Scraping">GitHub</a><img class="contact-img" src={contact_img} /></div>
            </div>








            
            </div>

    )
}

export default Footer