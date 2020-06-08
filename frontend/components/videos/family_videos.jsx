import React from 'react';


const Family = (props) => {

    if (props.videos === undefined) {
        return <></>
    } else {
      
        return (
            
            <div className='video-row'>
                    {props.videos.map(video => {
                    if (video.genres.includes("Family")) {
                        return (

                            <video key={video.id} className='video-row-vid' autoplay={true} src={video.videoUrl} height='150' width='250' onMouseOver={event => event.target.play()}
                                onMouseOut={event => event.target.pause()}></video>
                        )
                
                    }
                })
                }
                
            </div>
                            
            )
    }

};


export default Family;