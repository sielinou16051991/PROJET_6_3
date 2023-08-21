import { loginUser as loginUserApi } from "../../api/ApiService";
import { getUserProfile as getUserProfileApi} from "../../api/ApiService";

/**
    * Action asynchrone pour authentifier un utilisateur.
    * cette action utilise la methode 'loginUser' pour envoyer une requete d'authentification.
    * cette methode retourne le token si la requette réussit.
 */
import {createAsyncThunk} from "@reduxjs/toolkit";

export const loginUser = createAsyncThunk(
    "user/loginUser",
    async ({ email, password }) => {
        const token = await loginUserApi(email, password);
        return  token;
    }
)

/**
 *  Action asynchrone pour récupérer le profile de l'utilisateur.
 *  cette action utilise la methode 'getUserProfile' pour envoyer une requete
 *  permettant de récupérer les données de profil de l'utilisateur
 *
 *
 */
export const fetchUserProfile = createAsyncThunk(
    "user/fetchUserProfile",
    async (token) => {
        const userProfile = await getUserProfileApi(token); // récupération du profile de l'utilisateur
        return userProfile;
    }
)
