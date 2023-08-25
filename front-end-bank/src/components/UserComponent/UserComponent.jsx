import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
// import ArgentBankLogo from "../../assets/img/ArgentBankLogo.svg"
import ArgentBankLogo from "../../assets/img/ArgentBankLogo.svg"
import LogOut from "../LogOut";
import Nav from "../Nav/Nav";
import {useNavigate} from "react-router";
import {fetchUserProfile, updateUserProfile} from "../../store/actions/userActions";
import EditableName from "../EditableName/EditableName";
import dataAccount from "../../data/DataAccount"
import Account from "../Account/Account";

export default function UserComponent() {
    const profile = useSelector((state) => state.user.profile);
    const error = useSelector((state) => state.user.error);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [displayName, setDisplayName] = useState("");

    console.log(profile);

    // if (profile.body) {
    //     const firstName = profile.body.firstName;
    //     const lastName = profile.body.lastName;
    // }

    // const handleGetUser = () => {
    //
    // }

    // met a jour le nom d'utilisateur lors de l'affichage du profile
    useEffect(() => {
        if (profile) {
            setDisplayName(profile.fullName);
        }
    }, [profile]);
    /**
     * Met à jour le nom de l'utilisateur dans le profile.
     * @param {*}
     *
     */
    const handleNameUpdate = async (newName) => {
        const jwtToken = localStorage.getItem('jwtToken');
        const updatedProfile = {
            firstName: newName.split(" ")[0],
            lastName: newName.split(" ")[1],
        };

        // appel de l'action "updateUserProfile" pour mettre à jour le profile de l'utilisateur
        // avec les nouvelles informations (updatedProfile) en utilisant le token JWT
        dispatch(updateUserProfile({ token: jwtToken, updatedProfile }));
        setDisplayName(newName);
    }

    useEffect(() => {
        const jwtToken = localStorage.getItem('jwtToken');
        if (!jwtToken) {
            // si l'utilisateur n'est pas connecté (pas de token JWT trouvé), rediriger vers la page de connexion
            navigate("/user")
            // dispatch(fetchUserProfile(jwtToken))
        }else{
            dispatch(fetchUserProfile(jwtToken))
        }
    }, [dispatch, navigate]);
    return(
        <>
            <Nav showLogOut={true} displayName={displayName ? displayName : (profile ? `${profile.body.firstName} ${profile.body.lastName}` : "")} />
            {error && <p className="error-message">Error: {error}</p>}
            <main className="main bg-dark user_main-top">
                <div className="header">
                    <h1>Welcome back<br/>
                    <p className="name-font-size">
                        {displayName ? displayName : (profile ? `${profile.body.firstName} ${profile.body.lastName}` : "")}!
                    </p><br />
                        {profile && (
                            <EditableName
                                fullName={profile.fullName}
                                onSave={handleNameUpdate}
                                />
                        )}
                    </h1>
                    {/*<button className="edit-button">Edit Name</button>*/}
                </div>
                <h2 className="sr-only">Accounts</h2>

                {dataAccount.map((item, index) =>
                        (<Account
                            key={index}
                            title={item.title}
                            accountNumber={item.accountNumber}
                            accountPrice={item.accountPrice}
                            subTitle={item.subTitle}

                        />)
                )}

            </main>
        </>
    )
}
