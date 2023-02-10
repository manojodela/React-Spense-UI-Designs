import * as React from 'react';
import { Button, ButtonToolbar, Card, Col, Container, OverlayTrigger, Row, Tooltip } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const PlanForAll = () => {

    const tooltip = (
        <Tooltip id="tooltip" >
            <div className='text-start '>
                <p className='px-1'>An integrated system to engage customers via email, Tweets and Facebook wall posts and easily convert them into tickets.</p>
            </div>
        </Tooltip>
    );


    return (
        <Container fluid className='gx-3'>
            <Row className='g-1'>
                <Col lg={4} md={4} xs={12} className="p-1">
                    <Card className='ft-g'>
                        <h3 className='my-3 display'>Suite Team</h3>
                        <h4 className='my-2 display'>US$ 49</h4>
                        <p className='mb-2'>per agent/month billed annually</p>
                        <Button className='btn-green px-5 mx-3 my-3 fw-bold'>Buy now</Button>
                        <Link className='text-inherit ft-g my-4 fw-bold'>Start free trial <i className="bi bi-arrow-right text-black"></i></Link>

                        <div className='text-start '>
                            <div className='d-flex justify-content-between align-items-center' id="parent">
                                <div>
                                    <p className='m-0 py-2 lh-2'>Industry-leading ticketing system</p>
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
                                    <p className='m-0 py-2 lh-2'>Messaging across web, mobile and social</p>
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
                                    <p className='m-0 py-2 lh-2'>Email, voice, SMS and live chat support</p>
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
                                    <p className='m-0 py-2 lh-2'>Help centre - SINGLE</p>
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
                                    <p className='m-0 py-2 lh-2'>Easy-to-set up automations and workflows</p>
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
                                    <p className='m-0 py-2 lh-2'>AI-powered automated answers - UP TO 50</p>
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
                                    <p className='m-0 py-2 lh-2'>Unified agent workspace</p>
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
                                    <p className='m-0 py-2 lh-2'>Routing based on agent status and capacity</p>
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
                                    <p className='m-0 py-2 lh-2'>Reporting and analytics - <strong></strong></p>
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
                                    <p className='m-0 py-2 lh-2'>Data and file storage - <strong>STANDARD</strong></p>
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
                                    <p className='m-0 py-2 lh-2'>1,000+ apps and integrations - <strong>PREBUILT</strong></p>
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
                                    <p className='m-0 py-2 lh-2'>Robust APIs - <strong>STANDARD RATE LIMIT</strong></p>
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
                                    <p className='m-0 py-2 lh-2'>Reporting and analytics - <strong>PREBUILT</strong></p>
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
                                    <p className='m-0 py-2 lh-2'>Online support from the Zendesk team</p>
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
                                    <p className='m-0 py-2 lh-2'>Onboarding and adoption guidance</p>
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
                <Col lg={4} md={4} xs={12} className="p-1">
                    <Card className='ft-g'>
                        <h3 className='my-3 display'>Suite Growth</h3>
                        <h4 className='my-2 display'>US$ 79</h4>
                        <p className='mb-2'>per agent/month billed annually</p>
                        <Button className='btn-green px-5 mx-3 my-3 fw-bold'>Buy now</Button>
                        <Link className='text-inherit ft-g my-4 fw-bold'>Start free trial <i className="bi bi-arrow-right text-black"></i></Link>

                        <div className='text-start '>
                            <div className='d-flex justify-content-between align-items-center' id="parent">
                                <div>
                                    <p className='m-0 py-2 lh-2'>Industry-leading ticketing system</p>
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
                                    <p className='m-0 py-2 lh-2'>Messaging across web, mobile and social</p>
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
                                    <p className='m-0 py-2 lh-2'>Email, voice, SMS and live chat support</p>
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
                                    <p className='m-0 py-2 lh-2'>Help centre - SINGLE</p>
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
                                    <p className='m-0 py-2 lh-2'>Easy-to-set up automations and workflows</p>
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
                                    <p className='m-0 py-2 lh-2'>AI-powered automated answers - UP TO 50</p>
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
                                    <p className='m-0 py-2 lh-2'>Unified agent workspace</p>
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
                                    <p className='m-0 py-2 lh-2'>Routing based on agent status and capacity</p>
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
                                    <p className='m-0 py-2 lh-2'>Reporting and analytics - <strong></strong></p>
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
                                    <p className='m-0 py-2 lh-2'>Data and file storage - <strong>STANDARD</strong></p>
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
                                    <p className='m-0 py-2 lh-2'>1,000+ apps and integrations - <strong>PREBUILT</strong></p>
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
                                    <p className='m-0 py-2 lh-2'>Robust APIs - <strong>STANDARD RATE LIMIT</strong></p>
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
                                    <p className='m-0 py-2 lh-2'>Reporting and analytics - <strong>PREBUILT</strong></p>
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
                                    <p className='m-0 py-2 lh-2'>Online support from the Zendesk team</p>
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
                                    <p className='m-0 py-2 lh-2'>Onboarding and adoption guidance</p>
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
                                    <p className='m-0 py-2 lh-2'>Self-service customer portal</p>
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
                                    <p className='m-0 py-2 lh-2'>AI-powered knowledge management</p>
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
                                    <p className='m-0 py-2 lh-2'>Customisable ticket layouts</p>
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
                                    <p className='m-0 py-2 lh-2'>Light access licenses - UP TO 50</p>
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
                                    <p className='m-0 py-2 lh-2'>Service Level Agreement (SLA) management</p>
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
                                    <p className='m-0 py-2 lh-2'>Multilingual support and content</p>
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
                <Col lg={4} md={4} xs={12} className="p-1 ">
                    <Card className='ft-g border-green position-relative'>
                        <div className='position-absolute top-0 start-50 translate-middle'>
                        <button className='bg-danger bg-gradient text-white fw-bold border-1'>Most popular</button>
                        </div>
                        <h3 className='my-3 display'>Suite Professional</h3>
                        <h4 className='my-2 display'>US$ 99</h4>
                        <p className='mb-2'>per agent/month billed annually</p>
                        <Button className='btn-green px-5 mx-3 my-3 fw-bold'>Buy now</Button>
                        <Link className='text-inherit ft-g my-4 fw-bold'>Start free trial <i className="bi bi-arrow-right text-black"></i></Link>

                        <div className='text-start '>
                            <div className='d-flex justify-content-between align-items-center' id="parent">
                                <div>
                                    <p className='m-0 py-2 lh-2'>Industry-leading ticketing system</p>
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
                                    <p className='m-0 py-2 lh-2'>Messaging across web, mobile and social</p>
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
                                    <p className='m-0 py-2 lh-2'>Email, voice, SMS and live chat support</p>
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
                                    <p className='m-0 py-2 lh-2'>Help centre - SINGLE</p>
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
                                    <p className='m-0 py-2 lh-2'>Easy-to-set up automations and workflows</p>
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
                                    <p className='m-0 py-2 lh-2'>AI-powered automated answers - UP TO 50</p>
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
                                    <p className='m-0 py-2 lh-2'>Unified agent workspace</p>
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
                                    <p className='m-0 py-2 lh-2'>Routing based on agent status and capacity</p>
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
                                    <p className='m-0 py-2 lh-2'>Reporting and analytics - <strong></strong></p>
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
                                    <p className='m-0 py-2 lh-2'>Data and file storage - <strong>STANDARD</strong></p>
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
                                    <p className='m-0 py-2 lh-2'>1,000+ apps and integrations - <strong>PREBUILT</strong></p>
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
                                    <p className='m-0 py-2 lh-2'>Robust APIs - <strong>STANDARD RATE LIMIT</strong></p>
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
                                    <p className='m-0 py-2 lh-2'>Reporting and analytics - <strong>PREBUILT</strong></p>
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
                                    <p className='m-0 py-2 lh-2'>Online support from the Zendesk team</p>
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
                                    <p className='m-0 py-2 lh-2'>Onboarding and adoption guidance</p>
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
                                    <p className='m-0 py-2 lh-2'>Self-service customer portal</p>
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
                                    <p className='m-0 py-2 lh-2'>AI-powered knowledge management</p>
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
                                    <p className='m-0 py-2 lh-2'>Customisable ticket layouts</p>
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
                                    <p className='m-0 py-2 lh-2'>Light access licenses - UP TO 50</p>
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
                                    <p className='m-0 py-2 lh-2'>Service Level Agreement (SLA) management</p>
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
                                    <p className='m-0 py-2 lh-2'>Multilingual support and content</p>
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
                                    <p className='m-0 py-2 lh-2'>Live agent activity dashboard - <strong>VIEWABLE</strong></p>
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
                                    <p className='m-0 py-2 lh-2'>Integrated community forums</p>
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
                                    <p className='m-0 py-2 lh-2'>Private conversation threads</p>
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
                                    <p className='m-0 py-2 lh-2'>Customisable and shareable dashboards</p>
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
                                    <p className='m-0 py-2 lh-2'>Advanced voice capabilities</p>
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
                                    <p className='m-0 py-2 lh-2'>Data Location Options</p>
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
                                    <p className='m-0 py-2 lh-2'>HIPAA compliance</p>
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
                                    <p className='m-0 py-2 lh-2'>Events Connector for Amazon Web Services</p>
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

            </Row>
        </Container>
    );
};

export default PlanForAll;