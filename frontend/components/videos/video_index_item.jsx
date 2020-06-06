import React from 'react';
import video_container from './video_container';


const VideoItem = (props) => {
    return (
        <>
            <p>{props.video.title}</p>
            <p>{props.video.director_name}</p>
            <p>{props.video.genres}</p>
            <p>{props.video.year}</p>
            <p>{props.video.description}</p>
            {/* <p>{video.title}</p>
            <p>{video.title}</p>
            <p>{video.title}</p>
            <p>{video.title}</p> */}
            {/* <iframe width=s"560" height="315" src="https://www.youtube.com/embed/L3pk_TBkihU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}

        </>
    )

}

export default VideoItem;