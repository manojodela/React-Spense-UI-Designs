import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import phone from '../Assets/Phone.png';
import TextEditor from '../Assets/Text Editor.png';
const Payment = () => {
    return <>
        <Container fluid className="bg-white ">
            <div className="px-5 py-3 no-pad">
                <div className="px-5  no-pad">
                    <Row className="bg-color align-start py-4  ">
                        <Col lg={6}>
                            <div className="p-3 text-start no-pad">
                                <h1 className="display">Secure your money with Escrow.</h1>
                                <p className="mb-0">Spense uses escrow to secure all payments. We believe Escrow offers the highest level of security for your payments. so you never need to worry about scams.</p>
                            </div>
                            <div className="text-start">
                                <Link className="text-black ps-3">Learn more about Escrow <i className="bi bi-arrow-right text-black"></i></Link>
                            </div>
                        </Col>
                        <Col lg={6} className="">
                            <img src={phone} alt="phone" className="img-fluid" />
                        </Col>
                    </Row>
                </div>
            </div>
        </Container>
        <Container fluid className="bg-white">
            <Row className=" align-start py-4  ">
                <Col lg={5} className="offset-sm-1">
                    <img src={TextEditor} alt="phone" className="img-fluid" />
                </Col>
                <Col lg={6}>
                    <div className="p-3 text-start no-pad">
                        <h1 className="display">A text editor like no other.</h1>
                        <p className="mb-0 w-75">Our text editor pulls you into focus mode with its simplistic design and usability so you can put out your best writings.</p>
                    </div>
                    <div className="text-start">
                        <Link className="text-black ps-3">Text Editor Live Demo <i className="bi bi-arrow-right text-black"></i></Link>
                    </div>
                </Col>

            </Row>
        </Container>
    </>
}
export default Payment;