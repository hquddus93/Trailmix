import { RECEIVE_VIDEOS, RECEIVE_VIDEO } from '../actions/video'

const searchReducer = (state = {}, action) => {
    Object.freeze(state)
    switch (action.type) {

        case RECEIVE_VIDEO:
            return Object.assign({}, { keyword: action.keyword });

        case RECEIVE_VIDEOS:
            return Object.assign({}, { keyword: action.keyword });

        default:
            return state;
    }
}

export default searchReducer;