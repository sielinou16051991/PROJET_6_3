import React from "react";
import { Link } from 'react-router-dom';

export default function Nav() {
    return(
        <nav className="main-nav">
            <Link className="main-nav-logo" to="/">
                <img
                    className="main-nav-logo-image"
                    src="../../assets/img/argentBankLogo.png"
                    alt="Argent Bank Logo"
                />
                <h1 className="sr-only">Argent Bank</h1>
            </Link>
            <div>
                <Link className="main-nav-item" to="/sign-in">
                    <i className="fa fa-user-circle" />
                    Tony
                </Link>
                <Link className="main-nav-item" to="/home">
                    <i className="fa fa-sign-out" />
                    Sign Out
                </Link>
            </div>
        </nav>
    )
}
