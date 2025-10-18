import { Outlet } from "react-router-dom";
import Navbar from "../compnents/Navbar";
import Footer from "../compnents/Footer";
function Layout() {
    return (
        <div>
           <Navbar></Navbar>
            <Outlet></Outlet>
        <Footer/>
        </div>
    )
}
export default Layout;