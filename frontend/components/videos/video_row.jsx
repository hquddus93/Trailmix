import React from 'react';
import List from '../lists/list_container'
// // class ActionVideos extends React.Component{

// // componentDidMount() {
// //     debugger
// //     this.props.fetchAllVideos()
// //     debugger
// // }
// class VideoRow extends React.Component {
//     // constructor(props){
//     //     super(props);
//     // }

//     componentDidMount() {
//         this.props.fetchAllVideos();
//         // debugger;
//     }

//     render() {
//     if (this.props.videos === undefined) {
//         return <></>
//     } else {
        
//         return (
//                 <div className='video-row'>
//                 {
//                 ["Action", "Comedy", "Family", "Thriller", "Drama"].map(genre => {
//                     return this.props.videos.map(video => {
//                         if (video.genres.includes(genre)) {
//                             return (
                              
//                                 <div className='single-vid-container'>
//                                     <video key={video.id} className='single-vid' autoplay={false} src={video.videoUrl} height='150' width='250' onMouseOver={(e) => e.target.play()}
//                                         onMouseOut={event => event.target.pause()} >{video.title}</video>
//                                     {/* <div id='hidden'>
//                                         <h3>{video.title}</h3>
//                                         <h4>{video.rating}</h4>
//                                         <h4>{video.genres}</h4>
//                                     </div> */}
//                                 </div>
//                             )
//                         }
                    
//                     })
//                 })}
//                 </div>
//         )
//     }
// }
// };




// export default (VideoRow);



const VideoRow = props => {
    return (
        props.videos.map(video => {
            if (video.genres.includes(props.genre)) {
                return (
                    <div className='single-vid-container'>
                        <div className='single-vid' >
                        <video key={video.id} id={video.id} autoplay={false} src={video.videoUrl} poster={video.photoUrl} height='150' width='250' onMouseOver={props.handleMouseOver}
                                onMouseOut={event => event.target.pause()} >{video.title} </video>
                            <div id={`vid-text-${video.id}`} className='vid-text'>
                                <h3>{video.title}</h3>
                                <h4>{video.rating}</h4>
                                <h4>{video.genres}</h4>
                                <List videoId={video.id}/>
                            </div>
                        </div>
                       
                    </div>
               
        
                )
            }
        })
    )

};


export default VideoRow;