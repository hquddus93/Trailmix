import React from 'react';



const VideoItem = (props) => {
    debugger
    // let genresArr = props.video.genres.map(genreObj => (
    //     genreObj.genre
    // ));
    // let genre = genresArr.join(" ")
  
   debugger
    return (
        <div>
            <p>{props.video.title}</p>
            <p>{props.video.director_name}</p>
            <ul>{props.video.genres.map(genre => (
                <li>{genre}</li>
            ))}</ul>
            <p>{props.video.year}</p>
            <p>{props.video.description}</p>
 

            <video controls="controls" preload="none" onMouseOver={event => event.target.play()}
                onMouseOut={event => event.target.pause()}>
                <source type="video/mp4" src={props.video.videoUrl} height="300" width='400'/>
            </video>
            {/* <p>{video.title}</p>
            <p>{video.title}</p>
            <p>{video.title}</p>
            <p>{video.title}</p> */}
            {/* <iframe width=s"560" height="315" src="https://www.youtube.com/embed/L3pk_TBkihU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}

        </div>
    )

}

export default VideoItem;