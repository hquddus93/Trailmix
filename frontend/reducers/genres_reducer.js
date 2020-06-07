import {RECEIVE_GENRES, RECEIVE_GENRE} from '../actions/genres'


const genresReducer = (state={}, action) => {
    let id = 1;
    Object.freeze(state);
    let newState = Object.assign({}, state)
    switch (action.type) {
        case RECEIVE_GENRES:
            console.log(action);
            
            action.genres.map(genre => {
                if (newState[genre.genre]) {
                newState[genre.genre].push(genre.video_id)
            } else {
                newState[genre.genre] = [genre.video.id]
            }

            })
            
            return Object.assign({}, state, action.genres);
            case RECEIVE_GENRE:
            if (newState[action.genre]) {
                newState[action.genre].push(action.video_id)
            } else {
                newState[action.genre] = [action.video.id]
            }
            return newState;
            default:
            return state;
    }
};

export default genresReducer;