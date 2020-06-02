import {Login, Logout, SignUp} from '../util/session';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';



const receiveCurrentUser = (currentUser) => ({
    type: RECEIVE_CURRENT_USER,
    currentUser
})

const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER
    
})

const receiveErrors = (errors) => ({
    type: RECEIVE_ERRORS,
    errors
})



export const login = (user) => dispatch => {
   return Login(user)
   .then((user) => dispatch(receiveCurrentUser(user)))
}
    // .fail(err => dispatch(receiveErrors(err.responseJSON)));

export const logout = () => dispatch => (Logout())
    .then(() => dispatch(logoutCurrentUser()));


export const signup = (user) => dispatch => (SignUp(user))
    .then((user) => dispatch(receiveCurrentUser(user)))
    .fail(err => dispatch(receiveErrors(err.responseJSON)));


