import { Fragment } from "react";
import { useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import MainNavbar from "../components/MainNavbar"

const Layout = (props) => {
    const location = useLocation();
    const { pathname } = location;
    return <Fragment >
        <MainNavbar />
        <main>{props.children}</main>
       {pathname !== '/login' &&  <Footer />}
    </Fragment>
}

export default Layout;