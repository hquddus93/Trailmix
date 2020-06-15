# README
  <a href="trailmix-aa.herokuapp.com">
    <img src="https://fontmeme.com/permalink/200602/b89239ba0483c23a0be252ebcabbe556.png"
    alt="netflix-font"
    id='logo' /></a>

#### TrailMix is a Netflix Clone that has an eclectic mix of movie/tv show trailers. It is built using Ruby on Rails for the backend, PostgreSQL for the database, React/Redux for the frontend, and AWS for video/image storage.  


<a href="trailmix-aa.herokuapp.com">TrailMix</a>

# Features
#### 1. Frontend/Backend user authentication with demo login
#### 2. Videos index page has autoplay on hover and ability to add/delete videos from MyList
#### 3. Main video autoplays when page is loaded and can be unmuted/muted
#### 4. Videos are organized by genre
#### 5. Users are able to search for videos based on title/genre/director name
#### 6. Videos play on fullscreen when clicked
#### 7. Frontend/Backend user authentication with demo login


<video src='https://giphy.com/gifs/SVBF2lXBmIamFFzOFs/html5'></video>

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