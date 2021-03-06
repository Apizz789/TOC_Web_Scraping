import React from 'react'
import '../../css/contactus.css'
import Image from "react-bootstrap/Image";
import axios from "axios";
import {
    InputGroup,
    FormControl,
    Col,
    Row,
    Button,
    Container,
    Form,
    Table,
} from "react-bootstrap";

const contact_img = "https://th.qr-code-generator.com/wp-content/themes/qr/new_structure/markets/basic_market/generator/dist/generator/assets/images/websiteQRCode_noFrame.png"
const contact_url = "www.google.com"

function ContactUS(props) {
    return (

        <div style={{ marginTop: "10px", width: "100%" }}>
            <br></br>
            <br></br>
            <h1 align="center ">Contact Us</h1>
            {/* <Row style={{ borderRadius: "20px", width: "auto", height: "23px", margin: "1px", backgroundColor: "#2F2F35", color: "#ffff", fontsize: "20px", fontWeight: "bold" }} /> */}
            <br /><br />
            <Container>
                <Row style={{ textAlign: "center" }}>
                    <Col>
                        <Image
                            src="../images/user.png"
                            roundedCircle
                            style={{ width: "300px" }}
                        />
                        <br></br>
                        <br></br>
                        <b>
                            <p align="center">
                                61010014 กนิฏฐา ศศิปรียจันทร์ <br></br>{" "}
                            </p>
                        </b>
                    </Col>
                    <Col>
                        <Image
                            src="../images/user.png"
                            roundedCircle
                            style={{ width: "300px" }}
                        />
                        <br></br>
                        <br></br>
                        <b>
                            <p align="center">
                                61010994 ศตพร อินทร์งาม <br></br> {" "}
                            </p>
                        </b>
                    </Col>
                    <Col>
                        <Image
                            src="../images/Arika.png"
                            roundedCircle
                            style={{ width: "300px" }}
                        />
                        <br></br>
                        <br></br>
                        <b>
                            <p align="center" size="20px">
                                62010029 กฤติกามาส สุโนภักดิ์ <br></br> {" "}
                            </p>{" "}
                        </b>
                    </Col>
                </Row>
                <br></br>
                <br></br>
                <Row style={{ textAlign: "center" }}>
                    <Col>
                        <Image
                            src="../images/Kao.png"
                            roundedCircle
                            style={{ width: "300px" }}
                        />
                        <br></br>
                        <br></br>
                        <b>
                            <p align="center">
                                62010090 คัมภีรดา ภู่ทอง <br></br> {" "}
                            </p>
                        </b>
                    </Col>
                    <Col>
                        <Image
                            src="../images/Tum.png"
                            roundedCircle
                            style={{ width: "300px" }}
                        />
                        <br></br>
                        <br></br>
                        <b>
                            <p align="center">
                                62010142 ฉัตรดนัย สิงห์โต <br></br> {" "}
                            </p>{" "}
                        </b>
                    </Col>
                    <Col>
                        <Image
                            src="../images/Kob.png"
                            roundedCircle
                            style={{ width: "300px" }}
                        />
                        <br></br>
                        <br></br>
                        <b>
                            <p align="center">
                                62010153 ชนสรณ์ ศิริวงศ์ <br></br> {" "}
                            </p>
                        </b>
                    </Col>
                    
                </Row>
                <br></br>
                <br></br>
                <Row style={{ textAlign: "center" }}>
                    
                    <Col>
                        <Image
                            src="../images/Minor.png"
                            roundedCircle
                            style={{ width: "300px" }}
                        />
                        <br></br>
                        <br></br>
                        <b>
                            <p align="center">
                                62010175 ชวกร เหลาแก้ว <br></br> {" "}
                            </p>
                        </b>
                    </Col>
                    <Col>
                        <Image
                            src="../images/Brill.png"
                            roundedCircle
                            style={{ width: "300px" }}
                        />
                        <br></br>
                        <br></br>
                        <b>
                            <p align="center">
                                62010193 ชาติกุล รัตนฤทธิกุล <br></br> {" "}
                            </p>
                        </b>
                    </Col>
                    <Col>
                        <Image
                            src="../images/Boyz.png"
                            roundedCircle
                            style={{ width: "300px" }}
                        />
                        <br></br>
                        <br></br>
                        <b>
                            <p align="center">
                                62011019 อภิรักษ์ อุลิศ <br></br> {" "}
                            </p>
                        </b>
                    </Col>
                </Row>


            </Container>

            <Container>
                <div class="bodycontact">
                    <div className="contact-wrap">
                        <div className="contact-in" align="center">
                            <Container
                                style={{ backgroundColor: "#85D4BE", borderRadius: "10px" }}
                            >
                                <Row style={{ textAlign: "center" }}>
                                    <h1>Contact Info</h1>
                                    <Col>
                                        <h2>
                                            <i className="fa fa-phone" aria-hidden="true" /> Phone
                                        </h2>
                                        <p>02-999-9999</p>
                                    </Col>
                                    <Col>
                                        <h2>
                                            <i className="fa fa-envelope" aria-hidden="true" /> Email
                                        </h2>
                                        <p>info@Dalaza.com</p>
                                    </Col>
                                    <Col>
                                        <h2>
                                            <i className="fa fa-map-marker" aria-hidden="true" />{" "}
                                            Address
                                        </h2>
                                        <p>Bangkok, Thailand</p>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                        <br />
                        <div className="contact-in" align="center" margin="60px">
                            <Container
                                style={{ backgroundColor: "#AEE6CB", borderRadius: "10px" }}
                            >
                              
                                <form></form>
                            </Container>
                        </div>
                        <br />
                        <div className="contact-in mb-3" style={{ borderRadius: "10px" }}>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7751.731092026345!2d100.775403!3d13.72658900000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x50ff92d38918ed0d!2zMTPCsDQzJzM1LjUiTiAxMDDCsDQ2JzMxLjIiRQ!5e0!3m2!1sen!2sth!4v1636875622225!5m2!1sen!2sth"
                                width="100%"
                                height="250"
                                frameBorder={0}
                                style={{ border: 0 }}
                                allowFullScreen
                                aria-hidden="false"
                                tabIndex={0}
                            />
                        </div>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default ContactUS