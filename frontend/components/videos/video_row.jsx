import React from 'react';
import List from '../lists/list_container'



const VideoRow = props => {
    return (
        props.videos.map(video => {
            if (video.genres.includes(props.genre)) {
                return (
                
                    <div key={video.id} className='single-vid' onMouseOver={props.handleMouseOver}
                        onMouseLeave={props.handleMouseOut}>
                    <video key={video.id} id={video.id} autoPlay={false} src={video.videoUrl} poster={video.photoUrl} height='150' width='250'  
                            onClick={props.handleClick} >{video.title} </video>
                        <div id={`vid-text-${video.id}`} className='vid-text-hidden' >
                            <h3>{video.title}</h3>
                            <h4>{video.rating}</h4>
                            <h4>{video.genres}</h4>
                            <List videoId={video.id} id='hide-on-render'/>
                        </div>
                    </div>
                    
                   
               
        
                )
            }
        })
    )

};


export default VideoRow;