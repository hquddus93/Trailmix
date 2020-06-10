import { ADD_TO_LIST, DELETE_FROM_LIST } from '../actions/list';

const listsReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    console.log(action)
    switch (action.type) {

        case ADD_TO_LIST:
            return Object.assign({}, state, action.video);

            case DELETE_FROM_LIST:
                delete newState[action.videoId]
                return newState;

        default:
            return state;
    }

};

export default listsReducer;