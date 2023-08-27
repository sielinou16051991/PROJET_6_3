//
// import { createSlice } from '@ngrx/store';
// import {loginUser, fetchUserProfile} from "../actions/userActions";
// // import {loginUser} from "../../api/ApiService";
//
// const userSlice = createSlice({
//     name: 'user',
//     initialState: {
//         profile: null,
//         error: null,
//         isLoggedIn: false
//     },
//     reducers: {
//         logoutUser: (state: any) => {
//             state.profile = null;
//             state.isLoggedIn = false;
//         },
//     },
//     extraReducers: (builder: any) => {
//         builder
//             .addCase(fetchUserProfile.fulfilled, (state, action) => {
//                 state.profile = action.payload;
//             })
//             .addCase(fetchUserProfile.rejected, (state, action) => {
//                 state.error = action.error.message;
//             })
//             .addCase(loginUser.rejected, (state, action) => {
//                 state.error = action.error.message;
//             });
//     },
// });
//
//
// export const { logoutUser, updateName } = userSlice.actions;
// export default userSlice.reducer;
