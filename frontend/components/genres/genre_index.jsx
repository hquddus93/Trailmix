import React from 'react';
import videosReducer from '../../reducers/videos_reducer';

class GenreIndex extends React.Component {
    constructor(props) {
        super(props);

        let genres = ["Action", "Thriller", "Comedy", "Drama"]

    }

    componentDidMount() {
        debugger
        this.props.fetchAllVideos();
        this.props.fetchGenres();
        debugger
    }

    render() {
        
        // this.props.videos.map(video => {
        //     if (video)
        // })



        if (this.props.vid === undefined) {
            return <> </>
        } else {
        return (
            <ul>
                {this.props.genres.map(genre => {
                    this.props.videos.map(video => {
                        if (genre.id === videosReducer.id) {
                            return <li>{video.title}</li>
                        }})

                    })
                    }    
            </ul>
        )        
            // <div>TEST</div>
        
        }
    }
};

export default GenreIndex