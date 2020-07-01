import React from 'react';


class FullscreenPlayer extends React.Component {
    constructor(props) {
        super(props);
        
    }

    componentDidMount() {
      
        this.props.fetchVideo(this.props.match.params.id)
      
    }

    handleMousenter() {
        // e.preventDefault();
        let backBtn = document.getElementById('back-btn');
        backBtn.className = 'back-btn';
    }

    handleMouseLeave() {
        let backButton = document.getElementById('back-btn');
        backButton.className = 'hidden-back-btn';
    }

    handleClick() {
        // this.props.history.pop();
        this.props.history.goBack();
        this.props.fetchAllVideos();
    }

    render() {
        const {video} = this.props;
        if (video !== undefined)  {
            return (
                <div className='fullscreen-container'>
                    <video src={video.videoUrl} poster={video.photoUrl} autoPlay fullscreen='true' controls={true} id={video.id} onMouseMove={() => this.handleMousenter()} onMouseLeave={() => this.handleMouseLeave()}></video>
                    <button id='back-btn' onClick={() => this.handleClick()} onMouseMove={() => this.handleMousenter()} onMouseLeave={() => this.handleMouseLeave()}><i className="fas fa-arrow-left"></i></button>
                </div>
            )

        } else {
            return <> </>
        }
    }

  
    
    
};

export default FullscreenPlayer;