import React from "react";

export default function Nav() {
    return(
        <nav className="main-nav">
            <Link className="main-nav-logo" to="./index.html">
                <img
                    className="main-nav-logo-image"
                    src="../../assets/img/argentBankLogo.png"
                    alt="Argent Bank Logo"
                />
                <h1 className="sr-only">Argent Bank</h1>
            </Link>
            <div>
                <Link className="main-nav-item" to="./user.html">
                    <i className="fa fa-user-circle" />
                    Tony
                </Link>
                <a className="main-nav-item" to="./index.html">
                    <i className="fa fa-sign-out" />
                    Sign Out
                </a>
            </div>
        </nav>
    )
}
