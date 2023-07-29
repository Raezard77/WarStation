import { Outlet } from "react-router-dom";
import * as filler from "@site-content";
import NavBar from "@components/NavBar";
import logo from "@assets/logo.png";

const Layout = () => {
    return (
        <>
            <NavBar
                logo={logo}
                brandName={filler.brandName}
                pageLinks={filler.pageLinks}
            />
            <Outlet />
        </>
    );
};

export default Layout;
