import axios from "axios";
import {environment} from "../environment/environment.dev";

const baseUrl = environment.apiUrl;
export const loginUser = async (email, password) => {
    console.log("data",{
        email: email,
        password: password,
    });
    try {
        const response = await axios.post(
            `${baseUrl}/user/login`,
            {
                email: email,
                password: password,
            }
        );
        const jwtToken = response.data.body.token;
        // ou
        // const jwtToken = localStorage.getItem('jwtToken');
        console.log(jwtToken);
        return jwtToken;
    } catch (error) {
        console.error("Erreur de connexion à:", error);
        if (error.response.status === 404) {
            console.error(error.message);
            alert(error.message);
        } else if (error.response.status === 500) {
            alert('Internal server error');
        }
    }
}

export const getUserProfile = async (jwtToken) => {
    try {
        const response = await axios.post(
            `${baseUrl}/user/profile`,
            {},
            {
                headers: {
                    Authorization: `Bearer ${jwtToken}`,
                },
            }
        );
        console.log(response);
        return {
            status: response.data.status,
            message: response.data.message,
            body: response.data.body,
        };
    } catch (error) {
        console.log("Error lors du fetching du profile de l'utilisateur", error);
        return {
            status: error.response ? error.response.status : null,
            message: error.response ? error.response.data.message : null,
            body: null,
        };
    }
};


