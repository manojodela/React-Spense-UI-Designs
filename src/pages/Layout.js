import { Fragment } from "react";
import Footer from "../components/Footer";
import MainNavbar from "../components/MainNavbar"

const Layout = (props) => {
    return <Fragment >
        <MainNavbar />
        <main>{props.children}</main>
        <Footer />
    </Fragment>
}

export default Layout;