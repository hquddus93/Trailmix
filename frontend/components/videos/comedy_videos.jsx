import React from 'react';


const ComedyVideos = (props) => {

    if (props.videos === undefined) {
        return <></>
    } else {
      
        return (
            <div className='video-row'>
                {props.videos.map(video => {
                    if (video.genres.includes("Comedy")) {
                        return (
                            <div className='single-vid'>
                                <video key={video.id} className='video-row-vid' autoplay={true} src={video.videoUrl} height='150' width='250' onMouseOver={event => event.target.play()}
                                    onMouseOut={event => event.target.pause()}></video>
                                <div className='vid-text'>{video.title}</div>
                            </div>
                        )

                    }
                })
                }

            </div>
        )
    }


};


export default ComedyVideos;