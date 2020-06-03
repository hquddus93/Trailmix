import React from 'react';
import {Link} from 'react-router-dom'; 
import Splash from './splash'

const VideosContainer = (props) => {
    return (
        <div className='video'>
            <nav className='logout-nav'> 
            <a href="/#/">
                <img src="https://fontmeme.com/permalink/200602/b89239ba0483c23a0be252ebcabbe556.png"
                    alt="netflix-font"
                    border="0"
                    id='logo' /></a>
    
            <button onClick={props.logout} id='logout-btn'>Logout</button>
            </nav>
        <h1>VIDEOS</h1>
        </div>
    )
};

export default VideosContainer;