import React from 'react';
// class ActionVideos extends React.Component{

// componentDidMount() {
//     debugger
//     this.props.fetchAllVideos()
//     debugger
// }
class VideoRow extends React.Component {
    // constructor(props){
    //     super(props);
    // }


    render() {
        debugger;
    if (this.props.videos === undefined) {
        return <></>
    } else {

        return (
            <div className='video-row'>

                <ul>
                {
                ["Action", "Comedy", "Family", "Thriller", "Drama"].map(genre => {
                    this.props.videos.map(video => {
                        if (video.genres.includes(genre)) {
                            return (
                                <div className='single-vid-container'>
                                    <video key={video.id} className='single-vid' autoplay={false} src={video.videoUrl} height='150' width='250' onMouseOver={(e) => e.target.play()}
                                        onMouseOut={event => event.target.pause()} onClick={() => this.props.history.push(`/browse/${this.props.video.id}`)}>{video.title}</video>
                                    <div id='hidden'>
                                        <h3>{video.title}</h3>
                                        <h4>{video.rating}</h4>
                                        <h4>{video.genres}</h4>
                                    </div>
                                </div>
                            )
                        }
                    
                    })
                })}
                </ul>
            </div>
        )
    }
}

};


export default (VideoRow);