import React from 'react';
// import {Link} from 'react-router-dom';
import { Link } from 'react-router-dom';

import SearchContainer from './search_container';
// import VideoContainer from './video_container'


class SearchResults extends React.Component {
    constructor(props) {
        super(props);

        this.update = this.update.bind(this)
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            inputValue: '',
            // videos: this.props.videos
        }

   
    }

    update(field) {
        return e => (
            this.setState({ [field]: e.target.value })
        )
    }


    handleChange(e) {
        // e.preventDefault();
        this.setState({videos: this.props.searchVideos(this.state.inputValue)});
       
        // <Redirect to='/search_results' videos={this.props.searchVideos(this.state.inputValue)} />
        this.props.history.push('/search_results')

    }



    componentDidMount() {
        // this.props.fetchAllVideos()
        
        this.props.searchVideos(this.state.videos)
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
                        <p>Home</p>
                        <p>TV Shows</p>
                        <p>Movies</p>
                        <p>MyList</p>
                    </ul>

                    <SearchContainer
                        videos={this.props.videos}
                        inputValue={this.state.inputValue}
                        update={this.update}
                        handleChange={this.handleChange} />
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
                            <video key={video.id} autoplay={true} src={video.videoUrl} height='150' width='250'>
                                
                            </video> 
                            ))}
                    </ul>

                </div>

            </div>
        )
    }
}

export default SearchResults;