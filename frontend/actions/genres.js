import * as ApiGenre from '../util/genre_util'

export const RECEIVE_GENRES = 'RECEIVE_GENRES';
export const RECEIVE_GENRE = 'RECEIVE_GENRE';


const receiveGenres = (genres) => ({
    type: RECEIVE_GENRES,
    genres
})
const receiveGenre = (genre) => ({
    type: RECEIVE_GENRES,
    genre
})


export const fetchGenres = () => dispatch => (ApiGenre.fetchGenres())
.then(genres => dispatch(receiveGenres(genres)));

export const fetchGenre = (genreId) => dispatch => (ApiGenre.fetchGenre(genreId))
.then(genre => dispatch(receiveGenre(genre)));