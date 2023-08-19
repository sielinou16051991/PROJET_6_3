import React, {useState} from "react";
import {Link} from "react-router-dom";
import {useNavigate} from "react-router";

export default function SignInComponent(){

    const [messageError, setMessageError]= useState('');
    const [email, setEmail]= useState('');
    const [password, setPassword]= useState('');
    const navigate = useNavigate();

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }
    const handleSubmit = async (event) => {
        console.log(event.preventDefault());


        const connexionCredentials = {
            'tony@stark.com': 'password123',
            'steve@rogers.com': 'password456'
        }

        // veérifions si l'email est autorisé
        if (!Object.keys(connexionCredentials).includes(email)) {
            setMessageError('Email non autorisé');
            return;
        }

        // vérifion si le mot de passe entrée correspond a celui de l'email autorisé
        if (connexionCredentials[email] !== password) {
            setMessageError('Mot de passe non autorisé');
            return;
        }

        // try {
        //     const token = await dispatch(loginUser({email, password})).unwrap();
        // }

    }
    return(
        <>
            <nav className="main-nav" >
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
                        Sign In
                    </Link>
                </div>
            </nav>
            <main className="main bg-dark">
                <section className="sign-in-content">
                    <i className="fa fa-user-circle sign-in-icon" />
                    <h1>Sign In</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="input-wrapper">
                            <label htmlFor="username">Username</label
                            ><input
                                type="text"
                                id="username"
                                value={email}
                                autocomplete='new-email'
                                onChange={handleEmailChange}
                            />
                        </div>
                        <div className="input-wrapper">
                            <label htmlFor="password">Password</label
                            ><input
                            type="password"
                            id="password"
                            value={password}
                            onChange={handlePasswordChange}
                            />
                        </div>
                        <div className="input-remember">
                            <input type="checkbox" id="remember-me"/><label htmlFor="remember-me"
                        >Remember me</label
                        >
                        </div>
                        {/*// <!-- PLACEHOLDER DUE TO STATIC SITE -->*/}
                        {messageError && <p>{messageError}</p>}
                        <button type="submit" className="sign-in-button">Sign In</button>
                        {/*// <!-- SHOULD BE THE BUTTON BELOW -->*/}
                        {/*// <!-- <button class="sign-in-button">Sign In</button> -->*/}
                        {/*// <!--  -->*/}
                    </form>
                </section>
            </main>
        </>
    )
}
