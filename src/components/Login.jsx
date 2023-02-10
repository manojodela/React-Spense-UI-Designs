import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import googleIcon from '../Assets/GoogleIcon.png';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Login = () => {
    return <>
        <Container className="pb-5 pt-2">
            <Card className="w-75 m-auto no-width ">
                <Row className="">
                    <Col lg={6} md={6} sm={12} className="">
                        <Carousel showArrows={true}  autoPlay showThumbs={false} showStatus={false} showArrow={false} infiniteLoop={true} >
                            <div>
                                <img src="https://i.pinimg.com/originals/86/22/b4/8622b4e4fe27666501e6a7c39db1d842.jpg" className="img-fix img-fluid" />
                            </div>
                            <div>
                                <img src="https://wallpaper-mania.com/wp-content/uploads/2018/09/High_resolution_wallpaper_background_ID_77700213367.jpg" className="img-fix img-fluid" />
                            </div>
                            <div>
                                <img src="https://www.teahub.io/photos/full/197-1971826_trippy-iphone-hd-wallpaper-iphone-high-resolution-psychedelic.jpg" className="img-fix img-fluid" />
                            </div>
                            <div>
                                <img src="https://w0.peakpx.com/wallpaper/246/907/HD-wallpaper-psychedelic-38-art-patterns.jpg" className="img-fix img-fluid" />
                            </div>
                        </Carousel>
                    </Col>
                    <Col lg={6} md={6}>
                        <div className="px-4 py-1">
                            <div className="spence my-4 display ">Spence</div>
                            <br />
                            <p className="">Welcome to Spence</p>
                        </div>
                        <form className="px-4">
                            <div className="floating-label-group">
                                <input type="text" id="username" className="form-control txt border-0" autocomplete="off" autofocus required />
                                <label className="floating-label">Username</label>
                            </div>

                            <div className="floating-label-group">
                                <input type="password" id="password" className="form-control txt border-0" autocomplete="off" required />
                                <label className="floating-label">Password</label>
                            </div>
                            <div className="text-end">
                                <Link className="text-black" >Forgot password?</Link>
                            </div><br />
                            <div className="py-4">
                                <Button className="bg-dark px-5 rounded-5">Sign in</Button>
                            </div>
                        </form>

                        <p className="text-center py-3">
                            <span className="dash">&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;</span>&nbsp; or &nbsp;<span className="dash">&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;</span>
                        </p>

                        <div className="py-3">
                            <img src={googleIcon} alt="google" width="20px" />
                            <strong>&nbsp; Sign in with Google</strong>
                        </div>
                        <br />
                        <span>New Spence? </span><Link className="text-black">Create Account</Link>
                    </Col>
                </Row>
            </Card>
        </Container>
    </>
}

export default Login;