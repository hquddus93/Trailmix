import { RECEIVE_EMAIL } from '../actions/session';

const emailReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_EMAIL:
            return action.email;
           
        default:
            return state;
    }
};

export default emailReducer;