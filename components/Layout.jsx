import { Fragment } from "react";
import { Header } from "./Header.jsx";
import { Footer } from "./Footer.jsx";
import { Outlet } from "react-router-dom";

export function Layout() {
    return (
        <Fragment>
            <Header/>
            <Outlet/>
            <Footer/>
        </Fragment>  
    );
}