import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Footer = () => {
    return <>
        <Container className="mt-5 pb-0">
            <Row>
                <Col lg={3} md={3} sm={3} >
                    <div>
                        <ul className="text-start list-style-type-none">
                            <div className="text-start mb-2">
                                <h5 className="text-uppercase">Our Products</h5>
                            </div>
                            <li><a href="" className="text-black line">Spense for service</a></li>
                            <li><a href="" className="text-black line">Sense for sales</a></li>
                            <li><a href="" className="text-black line">Sunshine platform</a></li>
                            <li><a href="" className="text-black line">Marketplace</a></li>
                        </ul>
                    </div>
                </Col>
                <Col lg={3} md={3} sm={3}>
                    <div>
                        <ul className="text-start list-style-type-none">
                            <div className="text-start mb-2">
                                <h5 className="text-uppercase">TOP FEATURES</h5>
                            </div>
                            <li><a href="" className="text-black line">Ticketing System</a></li>
                            <li><a href="" className="text-black line">Live chat software</a></li>
                            <li><a href="" className="text-black line">Reporting & Analytics</a></li>
                            <li><a href="" className="text-black line">Help desk software</a></li>
                        </ul>
                    </div>
                </Col>
                <Col lg={3} md={3} sm={3}>
                    <div>
                        <ul className="text-start list-style-type-none">
                            <div className="text-start mb-2">
                                <h5 className="text-uppercase">Company</h5>
                            </div>
                            <li><a href="" className="text-black line">About us</a></li>
                            <li><a href="" className="text-black line">Investers</a></li>
                            <li><a href="" className="text-black line">Events</a></li>
                            <li><a href="" className="text-black line">Careers</a></li>
                            <li><a href="" className="text-black line">Contact us</a></li>
                        </ul>
                    </div>
                </Col>
                <Col lg={3} md={3} sm={3}>
                    <div>
                        <ul className="text-start list-style-type-none">
                            <div className="text-start mb-2">
                                <h5 className="text-uppercase">FAVOURITE THINGS</h5>
                            </div>
                            <li><a href="" className="text-black line">What is Spense?</a></li>
                            <li><a href="" className="text-black line">Spense for Enterprise</a></li>
                            <li><a href="" className="text-black line">Spense for small Bussiness</a></li>
                            <li><a href="" className="text-black line">Spense for startups</a></li>
                            <li><a href="" className="text-black line">Spense for Benchmark</a></li>
                        </ul>
                    </div>
                </Col>
            </Row>

            <hr></hr>
            <Row className="my-3 align-items-baseline">
                <Col lg={4} md={4}>
                    <div className="">
                        <h2>Enter the Spense</h2>
                        <p>Subscribe to our newsletter</p>
                    </div>
                </Col>
                <Col lg={4} md={4}>
                    <div className="d-flex flex-row">
                        <input type="text" className="form-control-md border-0 rounded-0 py-1" placeholder="  What's your email?" />
                        <Button className='btn-green fw-bold mx-0 border-0 rounded-0 py-1'>Subscribe</Button>
                    </div>
                </Col>
                <Col lg={4} md={4}>
                    <i class="bi bi-twitter fs-2 p-2"></i>
                    <i class="bi bi-facebook fs-2 p-2"></i>
                    <i class="bi bi-linkedin fs-2 p-2"></i>
                    <i class="bi bi-youtube fs-2 p-2"></i>
                    <i class="bi bi-instagram fs-2 p-2"></i>
                </Col>
            </Row>

            <hr />

            <Row className="my-3">
                <Col className="py-3">
                    <Link className="px-2 ls">Terms of use</Link>
                    <Link className="px-2 ls">Privacy Notice</Link>
                    <Link className="px-2 ls">Cookie Notice</Link>
                    <Link className="px-2 ls">Cookie Settings</Link>
                    <Link className="px-2 ls">©Spense 2023</Link>
                </Col>
            </Row>
        </Container>
    </>
}
export default Footer;