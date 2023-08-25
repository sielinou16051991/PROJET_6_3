import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {Navigate, useNavigate} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {fetchUserProfile, loginUser} from "../../store/actions/userActions";
import ARgentBankLogo from "../../assets/img/ARgentBankLogo.png"
import {LoginPayload} from "../../models/models";

/*
    *Formulaire de connexion permettent a un utilisateur de se connecter un e-mail et un pot de passe tous enregisté dans la bd;
    * une case a cochée permettant l'enregistrement des information pour la prochaine connexion
    *
 */

export default function SignInComponent(){

    const [messageError, setMessageError]= useState('');
    const [email, setEmail]= useState('');
    const [password, setPassword]= useState('');
    const [rememberMe, setRememberMe]= useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [loggedIn, setLoggedIn] = useState(false);
    const error = useSelector((state) => state.user.error);

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }
    const handleRememberMeChange = (event) => {
        setRememberMe(event.target.checked);
    }
    useEffect(() => {
        // console.log(localStorage);
        if (localStorage.getItem('jwtToken') === 'true') {
            const storedEmail = localStorage.getItem('email');
            const storedPassword = localStorage.getItem('password');
            console.log(localStorage.getItem('email'));
            if (storedEmail) setEmail(storedEmail);
            if (storedPassword) setPassword(storedPassword);
            setRememberMe(false);
        }

        // vérifie si JWT est présent dans le localStorage
        if (localStorage.getItem('jwtToken')) {
            setLoggedIn(true);
        }
    }, []);

    const handleSubmit = async (event) => {
        console.log(event.preventDefault());

        const connexionCredentials = {
            'tony@stark.com': 'password123',
            'steve@rogers.com': 'password456'
        }

        // vérifions si l'email est autorisé
        if (!Object.keys(connexionCredentials).includes(email)) {
            setMessageError('Email non autorisé');
            return;
        }

        // vérifion si le mot de passe entrée correspond a celui de l'email autorisé
        if (connexionCredentials[email] !== password) {
            setMessageError('Mot de passe non autorisé');
            return;
        }

        try {
            console.log('token');
            const data = new LoginPayload({email}, {password});
            console.log('data', data);
            // console.log({email, password});
            const token = await dispatch(loginUser({email, password})).unwrap(); // connexion de l'utilisateur et attente du jeton
                                                                                    // "token" correspondant aux parametres {email, password}
            console.log(token);
            localStorage.setItem('jwtToken', token);  // envoi des parametres de connexion dans le localStorage
            if (token) {
                await dispatch(fetchUserProfile(token)).unwrap();
                navigate("/user");
                if (rememberMe) {
                    localStorage.setItem("rememberMe", true);
                    localStorage.setItem("email", email);
                    localStorage.setItem("password", password);
                } else {
                    localStorage.removeItem("rememberMe");
                    localStorage.removeItem("email");
                    localStorage.removeItem("password");
                }
            }
        } catch (err) {
            console.error(err);
        }
    };

    return(
        <>
            {loggedIn && <Navigate to="/user" replace />} {/*cette ligne implique que lorsqu'un utilisateur est connectén, il ne peut plus rentrer sur le formulaire de connection par un simple click sur la fleche en haut a gauche pour revenir au formulaire de connexion */}
            <nav className="main-nav" >
                <Link className="main-nav-logo" to="/">
                    <img
                        className="main-nav-logo-image"
                        src={ARgentBankLogo}
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
            <main className="main bg-dark signIn_main-top">
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
                            <input
                                type="checkbox"
                                id="remember-me"
                                value={rememberMe}
                                onChange={handleRememberMeChange}
                            /><label htmlFor="remember-me"
                        >Remember me</label
                        >
                        </div>
                        {/*// <!-- PLACEHOLDER DUE TO STATIC SITE -->*/}
                        {messageError && <p className="error-message">{messageError}</p>}
                        <button type="submit" className="sign-in-button">Sign In</button>
                        {error && <p className="error-message">{error}</p>}
                        {/*// <!-- SHOULD BE THE BUTTON BELOW -->*/}
                        {/*// <!-- <button class="sign-in-button">Sign In</button> -->*/}
                        {/*// <!--  -->*/}
                    </form>
                </section>
            </main>
        </>
    )
}
