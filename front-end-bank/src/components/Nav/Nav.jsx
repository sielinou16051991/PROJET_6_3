import React from "react";
import { Link } from 'react-router-dom';
import ARgentBankLogo from "../../assets/img/ARgentBankLogo.png";
import {NavItem} from "./NavBarStyles";
import LogOut from "../LogOut";

export default function Nav({ showLogOut, displayName}) {
    const isLoggedIn = localStorage.getItem("jwtToken") !== null;
    return(
        <nav className="main-nav">
            <Link className="main-nav-logo" to="/">
                <img
                    className="main-nav-logo-image"
                    src= {ARgentBankLogo}
                    alt="Argent Bank Logo"
                />
                <h1 className="sr-only">Argent Bank</h1>
            </Link>
            <NavItem className="nav-item">
                {showLogOut && isLoggedIn ?  (
                    <>
                        <Link className="main-nav-item" to="/sign-in">
                            <i className="fa fa-user-circle" />
                            {displayName}
                        </Link>
                        <LogOut />
                    </>
                ) : (
                    <Link className="main-nav-item"
                          to={isLoggedIn ? "/user" : "/home"}>
                        <i className="fa fa-sign-out" />
                        Sign Out
                    </Link>
                )}
                {/*<Link className="main-nav-item" to="/home">*/}
                {/*    <i className="fa fa-sign-out" />*/}
                {/*    Sign Out*/}
                {/*</Link>*/}
            </NavItem>
        </nav>
    )
}
