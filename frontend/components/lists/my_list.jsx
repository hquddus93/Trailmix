import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import SearchContainer from '../videos/search_container';
import FullscreenPlayerContainer from '../videos/fullscreen_player_container';

class myList extends React.Component {
    constructor(props){
        super(props);

        this.handleMouseOver = this.handleMouseOver.bind(this);
        this.handleMouseOut = this.handleMouseOut.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            inputValue: '',
            
        }
        this.loaded = false;
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

    handleMouseOut(e) {
        e.persist();
        e.target.pause();
        e.target.currentTime = 0;
        e.target.load();
    }

    componentDidMount() {
        debugger
        this.props.fetchAllVideos();
        this.loaded = true;
        debugger
  
    }

    render() {
        debugger;
        if (!this.loaded) {
            return <> </>
        } else {
        return (
            <div className='mylist'>
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

                <div className='my-list-container'>
                    <h1>My List</h1>
                    <div className='my-list-vids'>
                        {this.props.currentUser.myListVideoIds.map(vidId => {
                          
                            let video = (this.props.videos[vidId]);
                          
                            return (
                            <video key={vidId} id={vidId} autoPlay={false} src={video.videoUrl} poster={video.photoUrl} height='150' width='250'
                                onMouseOver={event => event.target.play()}
                                onMouseOut={this.handleMouseOut} 
                                onClick={this.handleClick}>
                            </video>
                                )
                        })}
                    </div>
                </div>
        </div>
        )}
    }
    
};

export default myList;