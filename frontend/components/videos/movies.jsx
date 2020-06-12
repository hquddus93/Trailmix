import React from 'react';
import {Link} from 'react-router-dom';
import SearchContainer from './search_container';

class Movies extends React.Component{
    constructor(props){
        super(props);

        this.handleMouseOver = this.handleMouseOver.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.state = {inputValue: ""};
    }

    componentDidMount() {
        this.props.fetchAllVideos()
    }

    update(field) {
        return e => (
            this.setState({ [field]: e.target.value })
        )
    }


    handleChange(e) {
        e.preventDefault();
        this.props.searchVideos(this.state.inputValue);
        this.props.history.push('/search_results')

    }

    handleMouseOver(e) {
        e.persist();

 
        e.target.play();
        this.videoId = parseInt(e.target.id)
        this.props.history.push(`/videos/${e.target.id}`)
    }

    handleClick(e) {
        this.props.history.push(`/play/${e.target.id}`)
        return <FullscreenPlayerContainer />
    }


    render() {
        if (!this.props.videos) {
            return <> </>
        } else {
            return (
                <div className='movies'>
                    <nav className='list-nav'>
                        <a href="/#/">
                            <img src="https://fontmeme.com/permalink/200602/b89239ba0483c23a0be252ebcabbe556.png"
                                alt="netflix-font"
                                border="0"
                                id='logo' /></a>

                        <ul className='videos-page-links'>
                            <Link to='/videos'>Home</Link>
                            <Link to='/tv_shows'>TV Shows</Link>
                            <Link to='/movies'>Movies</Link>
                            <Link to='/my_list'>MyList</Link>
                        </ul>

                        <SearchContainer inputValue={this.state.inputValue} />

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
                    </nav>
                    <div className='movie-vids-container'>
                        <h1>Movies</h1>
                        <div className='movie-vids'>
                            {this.props.videos.map(video => {
                                if (!video.season_id) {
                                return  (
                                <div className='single-vid-container-movie'>
                                    <video key={video.id} id={video.id} autoPlay={false} src={video.videoUrl} poster={video.photoUrl} height='150' width='250' onMouseOver={event => event.target.play()}
                                        onMouseOut={event => event.target.pause()} 
                                        onClick={this.handleClick}></video>
                                </div>
                                )}
                            })}
                        </div>
                    </div>
                </div>
            )
        }
    }

};

export default Movies;