// import {fetchAllVideos, fetchVideo} from '../util/video_util'
import * as VideoUtil from '../util/video_util'


export const RECEIVE_VIDEOS = 'RECEIVE_VIDEOS';
export const RECEIVE_VIDEO = 'RECEIVE_VIDEO';
export const RECEIVE_SEARCH_ERRORS = 'RECEIVE_SEARCH_ERRORS'


const receiveVideo = (video) => ({
    type: RECEIVE_VIDEO,
    video
});

const receiveVideos = (videos) => ({
    type: RECEIVE_VIDEOS,
    videos
});

const receiveSearchErrors = (errors) => ({
    type: RECEIVE_SEARCH_ERRORS,
    errors
}) 

export const fetchAllVideos = () => dispatch => (VideoUtil.fetchAllVideos())
    .then(videos => dispatch(receiveVideos(videos)));

export const fetchVideo = (video) => dispatch => (VideoUtil.fetchVideo(video))
    .then(video => dispatch(receiveVideo(video)))


export const searchVideos = (keyword) => dispatch => (VideoUtil.searchVideos(keyword))
.then(videos => dispatch(receiveVideos(videos)))
.fail(res => dispatch(receiveSearchErrors(res.responseJSON)))