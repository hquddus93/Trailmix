import React from 'react';

class List extends React.Component {
    constructor(props){
        super(props);
     
        let buttonText = this.props.currentUser.myListVideoIds.includes(this.props.videoId) ? <i className="fa fa-check-circle" ></i> : <i className="fa fa-plus-circle" aria-hidden="true"></i>;
        
        this.state = {buttonText: buttonText}

        // this.handleClick = this.handleClick.bind(this);
    }


handleClick() {
    let {videoId} = this.props;
    if (this.props.currentUser.myListVideoIds.includes(videoId)) {       
     this.props.deleteFromList(videoId, this.props.currentUser)  
        this.setState({ buttonText:<i className="fa fa-plus-circle" aria-hidden="true"></i>})  
    } else {
        this.props.addToList(this.props.videos[videoId], this.props.currentUser);
        this.setState({ buttonText: <i className="fa fa-check-circle" ></i> })
       
    };
    

}

    render() {
        
        // this.buttonText = this.props.currentUser[currentUser.id].myListVideoIds.includes(this.props.videoId) ? "x" : "+";
       
        
        if (!this.props.currentUser) {
            return <></>
        } else {
            
            return(
                // <button onClick={() => this.handleClick()}>test</button>
                
                /* {buttonText = this.props.list.listVideoIds.values.includes(this.props.match.params.videoId ? "-" : "+")} */
                <button id='list-btn' onClick={() => this.handleClick()}> {this.state.buttonText} </button>
            
                )
        }
    }
};


export default List;