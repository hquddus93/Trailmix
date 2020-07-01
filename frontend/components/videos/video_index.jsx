import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import SearchContainer from './search_container';
import VideoRowContainer from './video_row';
import BackgroundVideo from './backgroundvideo';
import FullscreenPlayerContainer from './fullscreen_player_container';



class VideoIndex extends React.Component {
    constructor(props) {
        super(props);


        // this.update = this.update.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleMouseOver = this.handleMouseOver.bind(this)
        this.handleMouseOut = this.handleMouseOut.bind(this)
        // this.handleChange = this.handleChange.bind(this);
        this.state={
            inputValue: ''
        }

       
    }
    
  

    handleClick(e) {
     

        this.props.history.push(`/play/${e.target.id}`)
     

        return <FullscreenPlayerContainer />
    }

    handleMouseOver(e) {
        e.persist();
            e.target.play();
            this.videoId = parseInt(e.target.id);
            this.props.history.push(`/videos/${e.target.id}`);
            let textDiv = document.getElementById(`vid-text-${e.target.id}`);
            textDiv.className = 'vid-text';
            let listBtn = document.getElementById('list-btn');
            listBtn.className = 'list-btn';
    }



    handleMouseOut(e){
       e.persist();
            e.target.pause()
            e.target.currentTime = 0;
            e.target.load();
            let textDiv1 = document.getElementById(`vid-text-${e.target.id}`);
            textDiv1.className='vid-text-hidden';
            let listButton = document.getElementById('list-btn');
            listButton.className = 'hidden-list-btn'

    }

    componentDidMount() {
        this.props.fetchAllVideos()
        // let hideBtn = document.getElementById('hide-on-render');
        // hideBtn.className = 'hideBtn';
    }
    
    render() {
        

        if (this.props.videos === undefined) {
            return <> </>
        } 
     
        else {
        
        return (
            <div className='video'>
                <nav className='videos-nav'>
                <div className='first-part'>
                    <img src="https://fontmeme.com/permalink/200602/b89239ba0483c23a0be252ebcabbe556.png"
                        alt="netflix-font"
                        border="0"
                        id='logo' />

                    <ul className='videos-page-links'>
                        <Link to='/videos'>Home</Link>
                        <Link to='/tv_shows'>TV Shows</Link>
                        <Link to='/movies'>Movies</Link>
                        <Link to='/my_list'>MyList</Link>
                    </ul>
                </div>

                <div className='second-part'>
                    <SearchContainer />

                    <div className='dropdown'>
                        <i className="fas fa-caret-down">
                            {/* <img className='drop-down-trigger'src={window.neflixSmileyUrl} height='50' width='50'/> */}
                        <ul className='dropdown-content'>
                            
                            <li>
                                <a href='https://github.com/hquddus93'>
                                    <p>Github</p>
                                </a>
                            </li>
                            <li>
                                <a href='https://www.linkedin.com/in/hira-quddus-94963413b/'>
                                    <p>LinkedIn</p>
                                </a>
                            </li>

                            <li>
                                <Link to='/' onClick={this.props.logout} id='logout-link-dropdown'>Logout</Link>
                            </li>
                        </ul>
                        </i> 
                    </div>
                </div>
                </nav>

                <BackgroundVideo />
                <div className='video-rows'>
                    {["Action", "Comedy", "Family", "Thriller", "Drama"].map(genre => (
                        <div className='vid-catgeory'>   
                            <h1>{genre}</h1>
                            <div className='video-row'>
                                <VideoRowContainer 
                                    // key={["Action", "Comedy", "Family", "Thriller", "Drama"].indexOf(genre)}
                                    videos={this.props.videos}
                                    genre={genre}
                                    handleMouseOut={this.handleMouseOut}
                                    handleMouseOver={this.handleMouseOver}
                                    handleClick={this.handleClick}
                                    videoId={this.videoId}
                                    />
                            </div>
                        </div>
                    ))}
               </div>
                
            </div>
        )
        }
    }
}


export default VideoIndex;