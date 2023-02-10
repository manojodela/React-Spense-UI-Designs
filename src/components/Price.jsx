import { Col, Container, Row } from 'react-bootstrap';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { Link } from 'react-router-dom';
import PlanForAll from './PlanForAll';
import PlanForEnterprise from './PlanForEnterprise';


const Price = () => {
    return (
        <Container className='my-3'>
            <Row className='text-start mb-5 align-items-center'>
                <Col lg={6}>
                    <h1 className='display w-75'>Everything you need for best in class service</h1>
                </Col>
                <Col lg={6}>
                    <div className='mb-3'>
                        <h3>FOUNDATIONAL SUPPORT ONLY</h3>
                        <Link className='text-black fs-4'>Starting at US$ 19/month <i className="bi bi-arrow-right text-black"></i></Link>
                    </div>
                    <div>
                        <h3>SPENCE FOR SALES</h3>
                        <Link className='text-black fs-4'>See pricing <i className="bi bi-arrow-right text-black"></i></Link>
                    </div>
                </Col>
            </Row>
            <Container fluid>
                <Tabs
                    defaultActiveKey="profile"
                    id="justify-tab-example"
                    className="mb-3 bg-white"
                    justify
                >
                    <Tab eventKey="home" title="Plans for everyone" className='text-black'>
                        <PlanForAll />
                    </Tab>
                    <Tab eventKey="profile" title="plans for enterprises" className='text-black'>
                        <PlanForEnterprise />
                    </Tab>
                </Tabs>
            </Container>
        </Container>
    );
}

export default Price;