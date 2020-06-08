import React from 'react';


const Family = (props) => {

    if (props.videos === undefined) {
        return <></>
    } else {
      
        return (
            props.videos.map(video => {
                if (video.genres.includes("Family")) {
                    return (
                        <div>
                            <p>{video.title}</p>
                            <p>{video.year}</p>
                            <p>{video.description}</p>
                            {/* <video controls="controls" preload="none" onMouseOver={event => event.target.play()}>
                            <source type="video/mp4" src={props.video.videoUrl} height="300" width='400' />
                        </video> */}

                        </div>
                    )
                }
            }))
    }


};


export default Family;