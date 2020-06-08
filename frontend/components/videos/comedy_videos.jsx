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

                            <video key={video.id} className='video-row-vid' autoplay={true} src={video.videoUrl} height='150' width='250' onMouseOver={props.handleMouseOver()}
                                onMouseOut={event => event.target.pause()}></video>
                        )

                    }
                })
                }

            </div>
        )
    }


};


export default ComedyVideos;