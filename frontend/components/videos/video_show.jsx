import React from 'react';

class VideoShow extends React.Component {
    // constructor(props){
    //     super(props);
    // }

    componentDidMount(){
        this.props.fetchVideo(this.props.match.params.videoId)
    }


    render(){
        const {video} = this.props;
        return(
            <video src={video.video_url} autoplay={true} fullscreen={true}></video>
        )


        
    }
};

export default VideoShow;