import axios from "axios";
import {environment} from "../environment/environment.dev";

const baseUrl = environment.apiUrl;
export const loginUser = async (email, password) => {
    console.log("data",{
        email: email,
        password: password,
    });
    let data = {
        email: email,
        password: password,
    };
    try {
        const response = await axios.post(`${baseUrl}/user/login`,data);
        console.log(response);
        const jwtToken = response.data.body.token;
        // ou
        // const jwtToken = localStorage.getItem('jwtToken');
        console.log(jwtToken);
        return jwtToken;
    } catch (error) {
        console.error("Erreur de connexion à:", error);
        if (error.response) {
            if (error.response.status === 400) {
                console.error("Invalid fields",error.message);
                alert(error.message);
            } else if (error.response.status === 500) {
                alert('Internal server error');
            }
        }else {
            // alert(error.message);
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
        console.error("Error lors du fetching du profile de l'utilisateur", error);
        return {
            status: error.response ? error.response.status : null,
            message: error.response ? error.response.data.message : null,
            body: null,
        };
    }
};

export const updateProfileApi = async (jwtToken, updatedProfile) => {
    try {
        const response = await axios.put(
            `${baseUrl}/user/profile`,
            updatedProfile,
            {
                headers: {
                    Authorization: `Bearer ${jwtToken}`
                },
            }
        );
        console.log(response);
        if (response.status !== 200) {
            alert('Erreur lors de la mise a jour du profile');
            throw new Error("Erreur lors de la mise a jour du profile");
        }
        return response.data.body;
    } catch (error) {
        console.error(error);
    }
};


