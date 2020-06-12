import React from 'react';
// import {Link} from 'react-router-dom';
import { Link } from 'react-router-dom';

import SearchContainer from './search_container';
// import VideoContainer from './video_container'


class SearchResults extends React.Component {
    constructor(props) {
        super(props);
      

   
        this.state = {
            inputValue: this.props.inputValue,

        }

   
    }



    componentDidMount() {
        if (this.state.inputValue) {
            this.props.searchVideos(this.state.inputValue)
        }
    }

    render() {

        return (
            <div className='search-results-page'>
                <nav className='search-nav'>
                    <a href="/#/">
                        <img src="https://fontmeme.com/permalink/200602/b89239ba0483c23a0be252ebcabbe556.png"
                            alt="netflix-font"
                            border="0"
                            id='logo' /></a>

                    <ul className='videos-page-links'>
                        <Link to='/videos'>Home</Link>
                        <Link to='/tv_shows'>TV Shows</Link>
                        <Link to='/movies'>Movies</Link>
                        <Link to='my_list'>MyList</Link>
                    </ul>

                    <SearchContainer />
                        {/* /> */}

                    <div className='dropdown'>
                        <i className="fas fa-caret-down">
                            {/* <img className='drop-down-trigger'src={window.neflixSmileyUrl} height='50' width='50'/> */}
                            <ul className='dropdown-content'>

                                <li>
                                    <a href='https://github.com/hquddus93'>
                                        <i className="fab fa-github" id='video-fab'>          Github</i>
                                    </a>
                                </li>
                                <li>
                                    <a href='https://www.linkedin.com/in/hira-quddus-94963413b/'>
                                        <i className="fab fa-linkedin" id='video-fab'>          LinkedIn</i>
                                    </a>
                                </li>
                                <li>
                                    <Link to='/' onClick={this.props.logout} id='logout-link-dropdown'>Logout</Link>
                                </li>
                            </ul>
                        </i>
                    </div>
                </nav>
                <div className='search-result-videos'>
                    <h1>Search Results</h1>
                    <ul className='search-videos'>
                        {this.props.videos.map(video => (
                            <video key={video.id} autoplay={true} poster={video.photoUrl} src={video.videoUrl} height='150' width='250'>
                                
                            </video> 
                            ))}
                    </ul>

                </div>

            </div>
        )
    }
}

export default SearchResults;