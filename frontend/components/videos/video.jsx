import React from 'react';
import { Link } from 'react-router-dom';
import Splash from '../splash/splash'
// import VideoIndexItem from './video_index_item'
import ActionVideos from './action_videos';
import ThrillerVideos from './thriller_videos';
import DramaVideos from './drama_videos';
import VideoItem from './video_index_item';


class VideosIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchAllVideos()
    }

    render() {

        
        if (this.props.videos === undefined) {
            return <> </>
        } else {

        debugger
        return (
            <div className='video'>
                <nav className='logout-nav'>
                    <a href="/#/">
                        <img src="https://fontmeme.com/permalink/200602/b89239ba0483c23a0be252ebcabbe556.png"
                            alt="netflix-font"
                            border="0"
                            id='logo' /></a>

                    <ul className='videos-page-linkss'>
                        <p>Home</p>
                        <p>TV Shows</p>
                        <p>Movies</p>
                        <p>MyList</p>
                    </ul>
                    
                    <ul className='videos-nav-dropdown'>
                        <li>
                            <a href='https://github.com/hquddus93'>
                                <i class="fab fa-github" ></i>
                            </a>
                        </li>
                        <li>
                            <a href='https://www.linkedin.com/in/hira-quddus-94963413b/'>
                                <i class="fab fa-linkedin" aria-hidden="true"></i>
                            </a>
                        </li>
                        <li>
                            <button onClick={this.props.logout} id='logout-btn'>Logout</button>
                        </li>
                    </ul>
                </nav>
                <ul>
                {this.props.videos.map((video) => (
                    <li>
                        <VideoItem 
                            video={video}
                            key={video.id}
                        />
                    </li>
                ))}

                </ul>
                    {/* {this.props.videos.map((video) => {
                <ul>
                        <li>
                            <ActionVideos
                                video={video}
                                fetchAllVideos={this.props.fetchAllVideos}
                                key={video.id}
                            />
                        </li>
                        <li>
                            <ThrillerVideos
                                video={video}
                                fetchAllVideos={this.props.fetchAllVideos}
                                key={video.id}
                            />
                        </li>
                        <li>
                            <DramaVideos
                                video={video}
                                fetchAllVideos={this.props.fetchAllVideos}
                                key={video.id}
                            />
                        </li>
                </ul>
                })} */}
                
            </div>
        )
    }
    }
}


export default VideosIndex;