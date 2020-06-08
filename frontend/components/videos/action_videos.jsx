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
            props.videos.map(video => {
                if (video.genres.includes("Action")) {
                return (
                    <div>
                        {/* <h1>Action</h1> */}
                        <p>{video.title}</p>
                        <p>{video.year}</p>
                        <p>{video.description}</p>
                        {/* <video controls="controls" preload="none" onMouseOver={event => event.target.play()}>
                            <source type="video/mp4" src={props.video.videoUrl} height="300" width='400' />
                        </video> */}
    
                    </div>
                )}
            }))
            }


};


export default ActionVideos;