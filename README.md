# README
  <a href="trailmix-aa.herokuapp.com">
    <img src="https://fontmeme.com/permalink/200602/b89239ba0483c23a0be252ebcabbe556.png"
    alt="netflix-font"
    id='logo' /></a>

#### TrailMix is a Netflix Clone that has an eclectic mix of movie/tv show trailers. It is built using Ruby on Rails for the backend, PostgreSQL for the database, React/Redux for the frontend, and AWS for video/image storage.  


<a href="trailmix-aa.herokuapp.com">TrailMix</a>
<br />
<br />
<img src="./app/assets/images/trailmix.png">

# Features
#### 1. Frontend/Backend user authentication with demo login
#### 2. Videos index page has autoplay on hover and ability to add/delete videos from MyList
#### 3. Main video autoplays when page is loaded and can be unmuted/muted
#### 4. Videos are organized by genre
#### 5. Users are able to search for videos based on title/genre/director name
#### 6. Videos play on fullscreen when clicked
#### 7. Frontend/Backend user authentication with demo login
***
![Alt Text](https://media.giphy.com/media/SVBF2lXBmIamFFzOFs/giphy.gif)
<!-- <video src='https://giphy.com/gifs/SVBF2lXBmIamFFzOFs/html5'></video> -->

Videos play when hovered over and display video information such as title/genre/rating using onMouseOver and onMouseOut event handlers. Using an onClick event handlers videos will play in a separate fullscreen window when clicked. 

```

handleMouseOver(e) {
        e.persist();
            e.target.play();
            this.videoId = parseInt(e.target.id);
            this.props.history.push(`/videos/${e.target.id}`);
            let textDiv = document.getElementById(`vid-text-${e.target.id}`);
            textDiv.className = 'vid-text';
            let listBtn = document.getElementById('list-btn');
            listBtn.className = 'list-btn';
    }



    handleMouseOut(e){
       e.persist();
            e.target.pause()
            e.target.currentTime = 0;
            e.target.load();
            let textDiv1 = document.getElementById(`vid-text-${e.target.id}`);
            textDiv1.className='vid-text-hidden';
            let listButton = document.getElementById('list-btn');
            listButton.className = 'hidden-list-btn'

    }

```


Users are able to add and remove videos from their list from the main videos page. 

![Alt Text](https://media.giphy.com/media/gjZewLrLG20suefVpV/giphy.gif)

```

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
```