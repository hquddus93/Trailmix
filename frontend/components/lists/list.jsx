import React from 'react';

class List extends React.Component {
    constructor(props){
        super(props);
     
        this.buttonText = currentUser.myListVideoIds.includes(this.props.videoId) ? "x" : "+";

        // this.handleClick = this.handleClick.bind(this);
    }


handleClick() {
    // e.preventDefault();
    let {videoId} = this.props;

    if (this.props.list[videoId]) {
        if (currentUser.myListVideoIds.includes(videoId)) {
            
            currentUser.myListVideoIds = currentUser.myListVideoIds.filter( id => id !== videoId);
          
        }
    this.props.deleteFromList(videoId) 
       
    } else {
        this.props.addToList(this.props.videos[videoId]);
       
    };
    

}

    render() {

        if (!currentUser) {
            return <></>
        } else {
            
            return(
                // <button onClick={() => this.handleClick()}>test</button>
                
                /* {buttonText = this.props.list.listVideoIds.values.includes(this.props.match.params.videoId ? "-" : "+")} */
            <button className='list-btn' onClick={() => this.handleClick()}> {this.buttonText} </button>
            
                )
        }
    }
};


export default List;