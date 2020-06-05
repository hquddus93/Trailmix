import { RECEIVE_ERRORS, RECEIVE_CURRENT_USER, CLEAR_ERRORS } from '../actions/session';

const sessionErrorsReducer = (state = [], action) => {
    Object.freeze(state);
    
    switch (action.type) {
        case RECEIVE_ERRORS:
            return Object.assign({}, state, action.errors);
        case RECEIVE_CURRENT_USER:
            return [];
        case CLEAR_ERRORS:
            return [];
        default:
            return state;
    }
};

export default sessionErrorsReducer;