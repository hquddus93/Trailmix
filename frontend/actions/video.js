// import {fetchAllVideos, fetchVideo} from '../util/video_util'
import * as VideoUtil from '../util/video_util'


export const RECEIVE_VIDEOS = 'RECEIVE_VIDEOS';
export const RECEIVE_VIDEO = 'RECEIVE_VIDEO';


const receiveVideo = (video) => ({
    type: RECEIVE_VIDEO,
    video
});

const receiveVideos = (videos) => ({
    type: RECEIVE_VIDEOS,
    videos
});

export const fetchAllVideos = () => dispatch => (VideoUtil.fetchAllVideos())
    .then(videos => dispatch(receiveVideos(videos)));

export const fetchVideo = (video) => dispatch => (VideoUtil.fetchVideo(video))
    .then(video => dispatch(receiveVideo(video)))