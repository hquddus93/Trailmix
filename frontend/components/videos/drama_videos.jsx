import React from 'react';

// class DramaVideos extends React.Component{

// componentDidMount() {
//     debugger
//     this.props.fetchAllVideos()
//     debugger
// }
const DramaVideos = (props) => {

    if (props.videos === undefined) {
        return <></>
    } else {
   
        return (
            <div className='video-row'>
                {props.videos.map(video => {
                    if (video.genres.includes("Drama")) {
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

            </div>)
    }


};


export default DramaVideos;