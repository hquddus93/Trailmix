import {RECEIVE_VIDEOS, RECEIVE_SEARCH_ERRORS} from "../actions/video";


const searchErrorsReducer = (state = [], action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_SEARCH_ERRORS:
            return Object.assign({}, state, action.errors);
        case RECEIVE_VIDEOS:
            return [];
        default:
            return state;
    }
};

export default searchErrorsReducer;