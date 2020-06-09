import React from 'react';

// class ActionVideos extends React.Component{
    
    // componentDidMount() {
    //     debugger
    //     this.props.fetchAllVideos()
    //     debugger
    // }
const ActionVideos = (props) => {
    
            if (props.videos === undefined) {
                return <></>
            } else {
                
            return(
                <div className='video-row'>
                    {props.videos.map(video => {
                        if (video.genres.includes("Action")) {
                            return (
                                <div className='single-vid'>
                                    <video key={video.id} className='video-row-vid' autoplay={true} src={video.videoUrl} height='150' width='250' onMouseOver={event => event.target.play()}
                                    onMouseOut={event => event.target.pause()}>{video.title}</video>
                                    <div id='hidden'>
                                        <h3>{video.title}</h3>
                                        <h4>{video.rating}</h4>
                                        <h4>{video.genres}</h4>
                                    </div>
                                </div>
                            )

                        }
                    })
                    }

                </div>
                )
            }


};


export default ActionVideos;