import * as ApiListUtil from '../util/list_util';
// import { RECEIVE_VIDEOS } from './video';

export const ADD_TO_LIST = 'ADD_TO_LIST';
export const DELETE_FROM_LIST = 'DELETE_FROM_LIST';
export const RECEIVE_LIST_VIDEOS = "RECEIVE_LIST_VIDEOS"
export const LIST_ERROR = 'LIST_ERROR';

const receiveListVideo = (video, currentUser) => ({
    type: ADD_TO_LIST,
    video,
    currentUser
   
});

// const receiveVideos = (videos) => ({
//     type: RECEIVE_LIST_VIDEOS,
//     videos

// })

const deleteListVideo = (videoId, currentUser) => ({
    type: DELETE_FROM_LIST,
    videoId,
    currentUser
});

const receiveListError = (err) => ({
    type: LIST_ERROR,
    err
})


export const addToList = (video, currentUser) => dispatch => (ApiListUtil.addToList(video))
.then(video => dispatch(receiveListVideo(video, currentUser)))
.fail(err => dispatch(receiveListError(err)));


export const deleteFromList = (videoId, currentUser) => dispatch => (ApiListUtil.deleteFromList(videoId))
.then(() => dispatch(deleteListVideo(videoId, currentUser)))
.fail(err => dispatch(receiveListError(err)))

