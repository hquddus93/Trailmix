import React from 'react';

class BackgroundVideo extends React.Component{

    constructor(props){
        super(props);

        this.state = { muted: true, buttonText: <i className="fa fa-volume-off" aria-hidden="true"></i>}
    }


    toggleMute() {
        let vid = document.getElementById("mainvid")
        if (this.state.muted) {
            this.setState({ muted: false, buttonText: <i className="fa fa-volume-up" aria-hidden="true"></i> });
            vid.muted = false;
        }
        else {
            this.setState({ muted: true, buttonText: <i className="fa fa-volume-off" aria-hidden="true"></i> });
            vid.muted = true;
        }
    }
    render(){
        return (
            <div className='background-vid'>
                <video autoPlay loop muted type='video/mp4' src={window.backgroundVid} id='mainvid'>
                    {/* <source src={window.BackgroundVid} type='video/mp4'></source> */}
                </video>
                <div className='main-vid-text'>
                    <img src={window.bplogo} height='75' width='150'/>
                    <p>After the death of his father, T'Challa returns home to the African nation of Wakanda to take his rightful place as king.</p>
                </div>
                <button className='main-vid-audio-button' onClick={() => this.toggleMute()}>{this.state.buttonText}</button>

            </div>
        )
    }

};

export default BackgroundVideo;