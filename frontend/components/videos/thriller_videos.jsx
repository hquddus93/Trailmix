import React from 'react';
import video_container from './video_container';


const ThrillerVideos = (props) => {
    let genresArr = props.video.genres.map(genreObj => (
        genreObj.genre
    ));
    // let genre = genresArr.join(" ");

    if (props.video.genre === 'Thriller') {
        return (

        <div>
            <p>{props.video.title}</p>
            <p>{props.video.director_name}</p>
            <p>{props.video.year}</p>
            <p>{props.video.description}</p>
            <video controls="controls" preload="none">
                <source type="video/mp4" src={props.video.videoUrl} height="300" width='400' />
            </video>
        </div>
        )


    }


    //    if (genresArr.includes("Action")) {

    //        return (
    //         <div>
    //             <h1>Action</h1>
    //                <p>{props.video.title}</p>
    //                <p>{props.video.director_name}</p>
    //                {/* <p>{genre}</p> */}
    //                <p>{props.video.year}</p>
    //                <p>{props.video.description}</p>
    //                <video controls="controls" preload="none">
    //                    <source type="video/mp4" src={props.video.videoUrl} height="300" width='400' />
    //                </video>
    //         </div>
    //        )
    // }

    // if (genresArr.includes('Thriller')) {
    //         return (
    //             <div>
    //                 <h1>Thriller</h1>
    //                 <p>{props.video.title}</p>
    //                 <p>{props.video.director_name}</p>
    //                 {/* <p>{genre}</p> */}
    //                 <p>{props.video.year}</p>
    //                 <p>{props.video.description}</p>
    //                 <video controls="controls" preload="none">
    //                     <source type="video/mp4" src={props.video.videoUrl} height="300" width='400' />
    //                 </video>
    //             </div>
    //         )
    //    } 
    //    if (genresArr.includes('Comedy')) {

    //     return (
    //            <div>
    //                <h1>Comedy</h1>
    //                <p>{props.video.title}</p>
    //                <p>{props.video.director_name}</p>
    //                {/* <p>{genre}</p> */}
    //                <p>{props.video.year}</p>
    //                <p>{props.video.description}</p>
    //                <video controls="controls" preload="none">
    //                    <source type="video/mp4" src={props.video.videoUrl} height="300" width='400' />
    //                </video>
    //            </div>
    //        )
    //    }  else {
    //        return ""
    //    }



}

export default ThrillerVideos;