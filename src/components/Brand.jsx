import { Col, Container, Row } from 'react-bootstrap';
import fb from '../Assets/fb.png'
import Dribble from '../Assets/Dribbble.png'
import Google from '../Assets/Google.png'
import Pinterest from '../Assets/Pinterest.png'
import Twitter from '../Assets/Twitter.png'
import Slack from '../Assets/Slack.png'
import Youtube from '../Assets/Youtube.png'
import Reddit from '../Assets/Reddit.png'


const Brand = () => {

    return <>
        <Container fluid className='bg-white py-4'>
            <Row className='justify-content-around'>
                <Col lg={1} xs={2}>
                    <img src={fb} alt="fb" className='img-fluid ' width="100px" />
                </Col>
                <Col lg={1} xs={2}>
                    <img src={Pinterest} alt="pinterest" className='img-fluid' width="100px" />
                </Col>
                <Col lg={1} xs={2}>
                    <img src={Youtube} alt="yt" className='img-fluid' width="100px" />
                </Col>
                <Col lg={1} xs={2}>
                    <img src={Twitter} alt="twitter" className='img-fluid' width="100px" />
                </Col>
                <Col lg={1} xs={2}>
                    <img src={Reddit} alt="reddit" className='img-fluid' width="100px" />
                </Col>
                <Col lg={1} xs={2}>
                    <img src={Google} alt="google" className='img-fluid' width="100px" />
                </Col>
                <Col lg={1} xs={2}>
                    <img src={Slack} alt="Slack" className='img-fluid' width="100px" />
                </Col>
                <Col lg={1} xs={2}>
                    <img src={Dribble} alt="Dribble" className='img-fluid' width="100px" />
                </Col>

            </Row>
        </Container>
    </>
}
export default Brand;