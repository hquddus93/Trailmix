import React from 'react';
import {Link} from 'react-router-dom'; 
import Splash from './splash'

const VideosContainer = (props) => {
    return (
        <>
        <h1>Videos Will Be Here</h1>
       
       <button onClick={props.logout}>Logout</button>
     
        </>
    )
};

export default VideosContainer;