import { Accordion, Col, Container, Row } from 'react-bootstrap';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { Link } from 'react-router-dom';
import PlanForAll from './PlanForAll';
import PlanForEnterprise from './PlanForEnterprise';


const Price = () => {
    return (
        <Container className='mb-4 mt-3'>
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
            <Tabs
                defaultActiveKey="home"
                id="justify-tab-example"
                className="mb-3 bg-white"
                justify
            >
                <Tab eventKey="home" title="Plans for everyone" className='text-black'>
                    <PlanForAll />
                </Tab>
                <Tab eventKey="profile" title="Plans for enterprises" className='text-black'>
                    <PlanForEnterprise />
                </Tab>
            </Tabs>

            <Row className='my-5'>
                <h3>Frequently asked questions, answered.</h3>
                <div className='text-start'>
                    <h5 className='my-3'>Purchase</h5>
                </div>
                <Accordion className='bg'>
                    <Accordion.Item eventKey="0" className='bg'>
                        <Accordion.Header>How can I Buy your software</Accordion.Header>
                        <Accordion.Body className='text-start'>
                            After clicking “Buy now”, you will create a Spense account and immediately be able to purchase your software.
                            You can easily pay by credit card or PayPal. Customers who prefer to purchase through our sales representatives can opt to pay via invoice.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1" className='bg'>
                        <Accordion.Header>How long are your contracts? Can I upgrade or downgrade my subscription?</Accordion.Header>
                        <Accordion.Body className='text-start'>
                            Plans are month-to-month or annual. You can start/stop or make changes to your plan at any time (but note that refunds are not given for cancellation or downgrades). Learn more here or contact us for details.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2" className='bg'>
                        <Accordion.Header>What if I do not need all the capabilities in Spense Suite?</Accordion.Header>
                        <Accordion.Body className='text-start'>
                            The Spense Suite is the simplest way to get up and running with everything your team needs to deliver seamless support across channels, at great value. If you are looking for a lighter solution, check out our Support-only plans, starting from US$ 19 per agent/month (billed annually).
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Row>

            <Row className='my-4'>
                <div className='text-start'>
                    <h5 className='my-3'>Trial</h5>
                </div>
                <Accordion className='bg'>
                    <Accordion.Item eventKey="0" className='bg'>
                        <Accordion.Header>How does the free trial works?</Accordion.Header>
                        <Accordion.Body className='text-start'>
                            When you sign up for your trial of Zendesk Suite, you will have access to all features on the Zendesk Suite Professional plan. If you want to trial a specific plan, just contact us. At any point during the trial you can choose a plan and pay by credit card or PayPal from within your account.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1" className='bg'>
                        <Accordion.Header>What happens after the trial ends?</Accordion.Header>
                        <Accordion.Body className='text-start'>
                            At the end of your Zendesk Suite trial, your data and setup remains intact. You can log in and select a plan to purchase.                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Row>

            <Row className='my-4'>
                <div className='text-start'>
                    <h5 className='my-3'>General</h5>
                </div>
                <Accordion className='bg'>
                    <Accordion.Item eventKey="0" className='bg'>
                        <Accordion.Header>What resources are available to ensure I am getting the most out of my Spense?</Accordion.Header>
                        <Accordion.Body className='text-start'>
                            Customers on any Spense Suite plan have access to online support, as well as the Spense Help Centre, on-demand training and Community. For additional fees, customers can access prescriptive guidance, custom training, hands-on configuration, 24/7 support and implementation services to ensure teams are set up for success.                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1" className='bg'>
                        <Accordion.Header>Does Spense integrate with other applications and systems?</Accordion.Header>
                        <Accordion.Body className='text-start'>
                            We have thousands of pre-built apps and integrations available through the Zendesk Marketplace. You can also build almost anything you want on top of the Zendesk platform via our developer API.                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2" className='bg'>
                        <Accordion.Header>How do you protect your customers’ data?</Accordion.Header>
                        <Accordion.Body className='text-start'>
                            We combine enterprise-class security features with comprehensive audits of our applications, systems, and networks to ensure customer and business data is always protected. Take a look at the security measures we take to protect your business and your customers.                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Row>
        </Container >
    );
}

export default Price;