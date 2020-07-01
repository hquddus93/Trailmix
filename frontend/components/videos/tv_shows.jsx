import React from 'react';
import { Link } from 'react-router-dom';
import SearchContainer from './search_container';
import FullscreenPlayerContainer from './fullscreen_player_container';


class TvShows extends React.Component {
    constructor(props) {
        super(props);

        this.handleMouseOver = this.handleMouseOver.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleMouseOut = this.handleMouseOut.bind(this);

       
    }

    handleMouseOut(e) {
        // e.persist();
        e.target.pause()
        e.target.currentTime = 0;
        e.target.load();
     
    }

    handleClick(e) {
        this.props.history.push(`/play/${e.target.id}`)
        return <FullscreenPlayerContainer />
    }

    handleMouseOver(e) {
        e.persist();
        e.target.play();
        this.videoId = parseInt(e.target.id)
        this.props.history.push(`/videos/${e.target.id}`)
    }

    render() {
        if (!this.props.videos) {
            return <> </>
        } else {
            return (
                <div className='movies'>
                    <nav className='list-nav'>
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
                        <SearchContainer  />

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
                    <div className='movie-vids-container'>
                        <h1>TV Shows</h1>
                        <div className='movie-vids'>
                            {this.props.videos.map(video => {
                                if (video.show) {
                                    return (
                                        
                                        <video key={video.id} id={video.id} autoPlay={false} src={video.videoUrl} poster={video.photoUrl} height='150' width='250' onMouseOver={event => event.target.play()}
                                            onMouseLeave={this.handleMouseOut} 
                                            onClick={this.handleClick}></video>
                                       
                                    )
                                }
                            })}
                        </div>
                    </div>
                </div>
            )
        }
    }

};

export default TvShows;