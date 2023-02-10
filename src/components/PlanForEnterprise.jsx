import { Button, ButtonToolbar, Card, Col, Container, OverlayTrigger, Row, Tooltip } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const PlanForEnterprise = () => {

    const tooltip = (
        <Tooltip id="tooltip" >
            <div className='text-start '>
                <p className='px-1'>An integrated system to engage customers via email, Tweets and Facebook wall posts and easily convert them into tickets.</p>
            </div>
        </Tooltip>
    );

    return <>
        <Container fluid className='gx-3 '>
            <Row className='g-1'>
                <Col lg={4} md={4} xs={12} className="p-1 d-flex align-items-stretch">
                    <Card className='ft-g'>
                        <h3 className='my-3 display'>Suite Enterprise</h3>
                        <h4 className='my-2 display'>US$ 150</h4>
                        <p className='mb-2'>per agent/month billed annually</p>
                        <Button className='btn-green px-5 mx-3 my-3 fw-bold'>Buy now</Button>
                        <Link className='text-inherit ft-g my-4 fw-bold'>Start free trial <i className="bi bi-arrow-right text-black"></i></Link>

                        <div className='text-start '>
                            <div className='d-flex justify-content-between align-items-center' id="parent">
                                <div>
                                    <p className='m-0 py-2 lh-2'>Custom team roles and permissions</p>
                                </div>
                                <div className='mr-auto'>
                                    <ButtonToolbar>
                                        <OverlayTrigger placement="top" overlay={tooltip}>
                                            <i class="bi bi-info-circle-fill" ></i>
                                        </OverlayTrigger>
                                    </ButtonToolbar>
                                </div>
                            </div>
                            <div className='d-flex justify-content-between align-items-center' id="parent">
                                <div>
                                    <p className='m-0 py-2 lh-2'>Advanced knowledge management</p>
                                </div>
                                <div className='mr-auto'>
                                    <ButtonToolbar>
                                        <OverlayTrigger placement="top" overlay={tooltip}>
                                            <i class="bi bi-info-circle-fill" ></i>
                                        </OverlayTrigger>
                                    </ButtonToolbar>
                                </div>
                            </div> <div className='d-flex justify-content-between align-items-center' id="parent">
                                <div>
                                    <p className='m-0 py-2 lh-2'>Customisable agent workspaces</p>
                                </div>
                                <div className='mr-auto'>
                                    <ButtonToolbar>
                                        <OverlayTrigger placement="top" overlay={tooltip}>
                                            <i class="bi bi-info-circle-fill" ></i>
                                        </OverlayTrigger>
                                    </ButtonToolbar>
                                </div>
                            </div>
                            <div className='d-flex justify-content-between align-items-center' id="parent">
                                <div>
                                    <p className='m-0 py-2 lh-2'>Customisable branding for web conversations</p>
                                </div>
                                <div className='mr-auto'>
                                    <ButtonToolbar>
                                        <OverlayTrigger placement="top" overlay={tooltip}>
                                            <i class="bi bi-info-circle-fill" ></i>
                                        </OverlayTrigger>
                                    </ButtonToolbar>
                                </div>
                            </div>
                            <div className='d-flex justify-content-between align-items-center' id="parent">
                                <div>
                                    <p className='m-0 py-2 lh-2'>Light access licenses - UP TO 1,000</p>
                                </div>
                                <div className='mr-auto'>
                                    <ButtonToolbar>
                                        <OverlayTrigger placement="top" overlay={tooltip}>
                                            <i class="bi bi-info-circle-fill" ></i>
                                        </OverlayTrigger>
                                    </ButtonToolbar>
                                </div>
                            </div>
                            <div className='d-flex justify-content-between align-items-center' id="parent">
                                <div>
                                    <p className='m-0 py-2 lh-2'>Live data and external dashboard sharing</p>
                                </div>
                                <div className='mr-auto'>
                                    <ButtonToolbar>
                                        <OverlayTrigger placement="top" overlay={tooltip}>
                                            <i class="bi bi-info-circle-fill" ></i>
                                        </OverlayTrigger>
                                    </ButtonToolbar>
                                </div>
                            </div>
                            <div className='d-flex justify-content-between align-items-center' id="parent">
                                <div>
                                    <p className='m-0 py-2 lh-2'>Live agent activity dashboard - <strong>Customisable, agent capacity, plus live agent status drill-in</strong></p>
                                </div>
                                <div className='mr-auto'>
                                    <ButtonToolbar>
                                        <OverlayTrigger placement="top" overlay={tooltip}>
                                            <i class="bi bi-info-circle-fill" ></i>
                                        </OverlayTrigger>
                                    </ButtonToolbar>
                                </div>
                            </div>
                            <div className='d-flex justify-content-between align-items-center' id="parent">
                                <div>
                                    <p className='m-0 py-2 lh-2'>Sandbox environment for change management</p>
                                </div>
                                <div className='mr-auto'>
                                    <ButtonToolbar>
                                        <OverlayTrigger placement="top" overlay={tooltip}>
                                            <i class="bi bi-info-circle-fill" ></i>
                                        </OverlayTrigger>
                                    </ButtonToolbar>
                                </div>
                            </div>
                            <div className='d-flex justify-content-between align-items-center' id="parent">
                                <div>
                                    <p className='m-0 py-2 lh-2'>Robust APIs -  <strong>ENTERPRISE RATE LIMIT</strong></p>
                                </div>
                                <div className='mr-auto'>
                                    <ButtonToolbar>
                                        <OverlayTrigger placement="top" overlay={tooltip}>
                                            <i class="bi bi-info-circle-fill" ></i>
                                        </OverlayTrigger>
                                    </ButtonToolbar>
                                </div>
                            </div>
                            <div className='d-flex justify-content-between align-items-center' id="parent">
                                <div>
                                    <p className='m-0 py-2 lh-2'>AI-powered triage and conversation insights - <strong>RETAIL ONLY</strong></p>
                                </div>
                                <div className='mr-auto'>
                                    <ButtonToolbar>
                                        <OverlayTrigger placement="top" overlay={tooltip}>
                                            <i class="bi bi-info-circle-fill" ></i>
                                        </OverlayTrigger>
                                    </ButtonToolbar>
                                </div>
                            </div>
                        </div>


                    </Card>
                </Col>
                <Col lg={8} md={8} xs={12} className="p-1 d-flex align-items-stretch">
                    <Card className='ft-g'>
                        <div className='p-2'>
                            <h3 className='display wrdspc'>It gets even more powerful</h3>
                            <p className='w-75 mx-auto mb-1'>Keep your support system agile with a plan that tailors Zendesk exactly to your needs.</p>
                            <p>Additional enterprise-ready plans from</p>
                            <h4 className='my-2 display'>US$ 215</h4>
                            <p className='m-0'>per agent/month billed annually</p>
                            <Button className='btn-green px-3 mx-3 my-3 fw-bold'>Talk to sales</Button>
                        </div>
                        <Row>
                            <Col lg={6}  className="border border-bottom-0">
                                <div className='px-2'>
                                    <h5 className='pt-3'>TRUSTED BY 169,000+ COMPANIES IN 160+ COUNTRIES</h5>
                                </div>
                                <div className='d-flex justify-content-around px-2 my-4'>
                                    <span><img src="https://web-assets.zendesk.com/images/p-pricing/2021/logo-tesco.svg" alt="tesco" width="80px" /></span>
                                    <span><img src="https://web-assets.zendesk.com/images/p-pricing/2021/logo-netflix.svg" alt="netflix" width="80px" /></span>
                                    <span><img src="https://web-assets.zendesk.com/images/p-pricing/2021/logo-uber.svg" alt="uber" width="80px" /></span>
                                </div>
                                <h4 className='my-2'>#1 IN DIGITAL CUSTOMER SERVICE USE CASE BY</h4>
                                <h3 className='display my-3'>Gartner</h3>
                                <h5 className=''>THE ADVANCED SECURITY YOU NEED</h5>
                                <img src="https://web-assets.zendesk.com/images/p-pricing/2021/security-2x.png" alt="footerImg" className='img-fluid my-3' width="280px" />
                            </Col>
                            <Col lg={6} className="border border-bottom-0">
                                <div className='px-1 mb-1'>
                                    <h5 className='pt-3'>Talk to us for a comprehensive solution that meets all your enterprise needs.</h5>
                                </div>
                                <div className='text-start px-2 pt-3 no-pad'>
                                    <ul class="list-shape-bullets">
                                        <li class="katamari-field" data-katamari-field-id="113">Protect your data with best-in-class security and compliance.</li>
                                        <li class="katamari-field" data-katamari-field-id="114">Fine-tune operations with granular controls and greater change management flexibility.</li>
                                        <li class="katamari-field" data-katamari-field-id="115">Extend your Zendesk instance and unify your data with custom integrations.</li>
                                        <li class="katamari-field" data-katamari-field-id="116">Get set up for success with advanced support and services from the Zendesk team.</li>
                                    </ul>
                                </div>
                            </Col>
                        </Row>
                    </Card>
                </Col>
            </Row>
        </Container>
    </>
}
export default PlanForEnterprise