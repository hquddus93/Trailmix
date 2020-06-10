import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import SearchContainer from './search_container';
import VideoRowContainer from './video_row';



class VideoIndex extends React.Component {
    constructor(props) {
        super(props);


        this.handleMouseOver = this.handleMouseOver.bind(this)
        this.handleChange = this.handleChange.bind(this);
        this.state={
            inputValue: ''
        }

       
    }

    update(field) {
        return e => (
            this.setState({[field]: e.target.value})
        )
    }


    handleChange(e) {
        e.preventDefault();
        this.props.searchVideos(this.state.inputValue);
        this.props.history.push('/search_results')
    
    }

    handleMouseOver(e) {
        e.persist();
        
    //   debugger
            e.target.play();
            this.videoId = parseInt(e.target.id)
            this.props.history.push(`/videos/${e.target.id}`)

        //    return <List videoId={e.target.id}/>

            // e.className='target-vid'

          
   
        
    }

    handleClick(e) {
        this.props.history.push(`/show/${e.target.id}`)

    }

    handleMouseOut(){
        return e => {
            e.target.pause()
            e.className='video-row-vid'

        }
    }

    componentDidMount() {
        this.props.fetchAllVideos()
    }

    render() {

      
        if (this.props.videos === undefined) {
            return <> </>
        } 
     
        else {
        
        return (
            <div className='video'>
                <nav className='videos-nav'>
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
                </nav>
                <div className='video-rows'>
                    {["Action", "Comedy", "Family", "Thriller", "Drama"].map(genre => (
                        <div className='video-row'>
                            <h1>{genre}</h1>
                            <VideoRowContainer 
                                videos={this.props.videos}
                                genre={genre}
                                handleMouseOver={this.handleMouseOver}
                                videoId={this.videoId}/>
                        </div>

                    ))}
               </div>
                
            </div>
        )
        }
    }
}


export default VideoIndex;