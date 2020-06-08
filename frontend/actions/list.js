import * as ApiListUtil from '../util/list_util';

export const ADD_TO_LIST = 'ADD_TO_LIST';
export const DELETE_FROM_LIST = 'DELETE_FROM_LIST';
export const LIST_ERROR = 'LIST_ERROR';

const receiveListVideo = (video) => ({
    type: ADD_TO_LIST,
    video
});


const deleteListVideo = (videoId) => ({
    type: DELETE_FROM_LIST,
    videoId
});

const receiveListError = (err) => ({
    type: LIST_ERROR,
    err
})


export const addToList = (video) => dispatch => (ApiListUtil.addToList(video))
.then(video => dispatch(receiveListVideo(video)))
.fail(err => dispatch(receiveListError(err)));


export const deleteFromList = (videoId) => dispatch => (ApiListUtil.deleteFromList(videoId))
.then(() => dispatch(deleteListVideo(videoId)))
.fail(err => dispatch(receiveListError(err)))

