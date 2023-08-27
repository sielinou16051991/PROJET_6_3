// import {loginUser as loginUserApi} from '../../services/ApiSservice';
// import { getUserProfile as getUserProfileApi} from '../../api/ApiService';
//
// /**
//     * Action asynchrone pour authentifier un utilisateur.
//     * cette action utilise la methode 'loginUser' pour envoyer une requete d'authentification.
//     * cette methode retourne le token si la requette réussit.
//  */
// // @ts-ignore
// import {createAction, createAsyncThunk, props} from '@ngrx/store';
// import {LoginModel} from '../../models/login-model';
//
// /**
//  *  Action permetant de connecter un utilisateur
//  */
// export const loginUser = createAction(
//     'user/loginUser [Utilisateur] connexion',
//     props<{ payload: LoginModel}>()
//     // async ( email: any, password: any ) => {
//     //     const token = await loginUserApi(email, password);
//     //     return  token;
//     // }
// );
//
//
// /**
//  *  Action asynchrone pour récupérer le profile de l'utilisateur.
//  *  cette action utilise la methode 'getUserProfile' pour envoyer une requete
//  *  permettant de récupérer les données de profil de l'utilisateur
//  *
//  *
//  */
// export const fetchUserProfile = createAsyncThunk(
//     "user/fetchUserProfile",
//     async (token) => {
//         const userProfile = await getUserProfileApi(token); // récupération du profile de l'utilisateur
//         return userProfile;
//     }
// )
// /**
//  * Mise à jour du profile de l'utilisateur
//  * @param {string}
//  */
//
// export const updateUserProfile = createAsyncThunk(
//     "user/updatedUserProfile",
//     async ({token, updatedProfile}, rejectWithValue) => {
//         try {
//             console.log(updatedProfile);
//             const userProfile = await updateProfileApi(token, updatedProfile);
//             return userProfile;
//         } catch (err) {
//             console.log(err);
//             return rejectWithValue(err.message);
//         }
//     }
// )
