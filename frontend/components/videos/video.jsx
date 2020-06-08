import React from 'react';
import { Link } from 'react-router-dom';
import ActionVideos from './action_videos';
import ThrillerVideos from './thriller_videos';
import DramaVideos from './drama_videos';
import ComedyVideos from './comedy_videos';
import FamilyVideos from './family_videos';
import Search from './search';



class VideosIndex extends React.Component {
    constructor(props) {
        super(props);

        this.update = this.update.bind(this)
        this.handleChange = this.handleChange.bind(this);
        this.state={
            inputValue: ''
        }

        // this.handleSubmit = this.handleSubmit.bind(this)
    }

    update(field) {
        return e => (
            this.setState({[field]: e.target.value})
        )
    }


    handleChange(e) {
        e.preventDefault();
        this.props.searchVideos(this.state.inputValue);
    }

  

    componentDidMount() {
        this.props.fetchAllVideos()
    }

    render() {

      
        if (this.props.videos === undefined) {
            return <> </>
        } 
        // else if (this.state.inputValue.length > 0) {
        
        //     return this.handleSubmit();
        // }
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

                    <Search
                        videos={this.props.videos}
                        inputValue={this.state.inputValue}
                        update={this.update}
                        handleChange={this.handleChange}/>

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
                                    <i className="fab fa-linkedin"  id='video-fab'>          LinkedIn</i>
                                </a>
                            </li>
                            <li>
                                <Link to='/' onClick={this.props.logout} id='logout-link-dropdown'>Logout</Link>
                            </li>
                        </ul>
                        </i> 
                    </div>
                </nav>
                <ul>
                    <li>
                        <h1>Action</h1>
                        <ActionVideos 
                        videos={this.props.videos}
                        />
                    </li>
                    <li>
                        <h1>Thriller</h1>
                        <ThrillerVideos
                            videos={this.props.videos} />
                    </li>
                    <li>
                        <h1>Drama</h1>
                        <DramaVideos
                            videos={this.props.videos} />
                    </li>
                    <li>
                        <h1>Comedy</h1>
                        <ComedyVideos
                            videos={this.props.videos} />
                    </li>
                    <li>
                        <h1>Family</h1>
                        <FamilyVideos
                            videos={this.props.videos} />
                    </li>
                </ul>
               
                
            </div>
        )
        }
    }
}


export default VideosIndex;