const initState = {
    usersName: '',
    password: '',
    remember: false,
};
export default function myReducer(state = initState, action) {

    if (action.type === 'CONNEXION') {
        return {...state, remember: true}
    }

}
