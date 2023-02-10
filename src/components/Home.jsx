import { Button, Col, Container, Row } from "react-bootstrap";
import heroImage from '../Assets/HeroImage.png';
import checkmark from '../Assets/Checkmark.svg';

const Home = () => {
    return <>
        <Container className="my-4">
            <Row className="align-items-center justify-content-between g-3">
                <Col lg={6} md={6} xs={12} >
                    <div className="text-start">
                        <h1 className="display">Share your unfiltered thoughts, Get paid.</h1>
                        <p className="m-0 w-75">Spense is and open platfrom for individuals to share their unfiltered thoughts.</p>
                        <p className="m-0 mb-3">Discuss the topics you love, and get paid for doing <i>just that</i></p>
                        <div className="mb-2">
                            <strong ><img src={checkmark} alt="check" />&nbsp;&nbsp; Receive 99% off the earnings.</strong> <br />
                            <strong ><img src={checkmark} alt="check" />&nbsp;&nbsp; Get paid via Debit Card, ACH, or paypal.</strong> <br />
                            <strong ><img src={checkmark} alt="check" />&nbsp;&nbsp; Withdraw your earning anytime.</strong>
                        </div><br />
                        <Row className="g-3">
                            <Col lg={4} md={7} sm={12} className="me-2">
                                <input className="form-control-md border-0 bg-white py-2 rounded" placeholder="  john@example.com  " />
                            </Col>
                            <Col lg={4} md={5} sm={12}>
                                <Button className="bg-dark border-0 btn" >Get Started</Button>
                            </Col>
                        </Row>
                    </div>
                </Col>
                <Col lg={5} md={6} xs={12}>
                    <img src={heroImage} className="img-fluid" />
                </Col>
            </Row>
        </Container>
    </>
}
export default Home;