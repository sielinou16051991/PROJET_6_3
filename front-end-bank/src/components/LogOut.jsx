import {Link} from "react-router-dom";
import React from "react";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {logoutUser} from "../store/reducer/userReducer";

/**
 * Lorsque l'utilisateur clic sur le button de déconnexion,
 * -sonjeton (token) "jwtToken" est suprimé du localStorage
 * -il est redirigé vers la page d'accueuil
 * @returns {*}
 * @constructor
 */
export default function LogOut() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handelerLogOut = () => {
        console.log("Déconnexion de l'utilisateur");
        dispatch(logoutUser());
        localStorage.removeItem('jwtToken');
        navigate("/");
    }
    return (
        <button className="main-nav-item btn-decoration-none" role="button" onClick={handelerLogOut}>
            <i className="fa fa-sign-out" />
            Sign Out
        </button>
    )
}
