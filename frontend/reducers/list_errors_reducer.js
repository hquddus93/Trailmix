import { CLEAR_ERRORS } from '../actions/session';
import { LIST_ERROR, ADD_TO_LIST, DELETE_FROM_LIST} from '../actions/list';

const sessionErrorsReducer = (state = [], action) => {
    Object.freeze(state);

    switch (action.type) {
        case LIST_ERROR:
            return Object.assign({}, state, action.err);
        case ADD_TO_LIST:
            return [];
        case DELETE_FROM_LIST:
            return [];
        case CLEAR_ERRORS:
            return [];
        default:
            return state;
    }
};

export default sessionErrorsReducer;