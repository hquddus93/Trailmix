import React from 'react';
import { Link } from 'react-router-dom';
import Splash from '../splash/splash'
import VideoIndexItem from './video_index_item'


class VideosIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        debugger
        this.props.fetchAllVideos()
        debugger
    }

    render() {
        if (this.props.videos === undefined) {
            return <></>
        } else {

        
        return (
            <div className='video'>
                <nav className='logout-nav'>
                    <a href="/#/">
                        <img src="https://fontmeme.com/permalink/200602/b89239ba0483c23a0be252ebcabbe556.png"
                            alt="netflix-font"
                            border="0"
                            id='logo' /></a>

                    <button onClick={this.props.logout} id='logout-btn'>Logout</button>
                </nav>
                <ul>
                    {this.props.videos.map((video) => (
                        <li>
                            <VideoIndexItem 
                            video={video}
                            key={video.id}
                            />
                        </li>
                    ))}
                </ul>
                
            </div>
        )
    }
    }
}


export default VideosIndex;