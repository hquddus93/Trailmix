
import React from "react";
import LoginContainer from './splash/login_container'
import SignupContainer from './splash/signup_container'
import { AuthRoute, ProtectedRoute, SignRoute } from '../util/route_util';
import {Route, Redirect, Switch, Link} from 'react-router-dom';
import VideoContainer from './videos/video_index_container';
import SearchResultsContainer from './videos/search_results_container';
import CreateAccountContainer from './splash/create_account_container';
import MyListContainer from './lists/my_list_container';
import Splash from './splash/splash';
import MoviesContainer from './videos/movies_container';
import TvShowsContainer from './videos/tv_shows_container';
import FullScreenPlayerContainer from './videos/fullscreen_player_container';


const App = () => (
    <div>
       
      
        <Switch>
            <AuthRoute exact path='/signin' component={LoginContainer} />
            <SignRoute exact path='/signup' component={SignupContainer}/>
            <AuthRoute exact path='/create_account' component={CreateAccountContainer}/>
            <ProtectedRoute path='/play/:id' component={FullScreenPlayerContainer} />
            <ProtectedRoute path='/tv_shows' component={TvShowsContainer} />
            <ProtectedRoute path='/movies' component={MoviesContainer} />
            <ProtectedRoute path='/my_list' component={MyListContainer} />
            <ProtectedRoute path='/search_results' component={SearchResultsContainer} />
            <ProtectedRoute path='/videos/:id' component={VideoContainer} />
            <ProtectedRoute path='/videos' component={VideoContainer} />
            <AuthRoute exact path='/' component={Splash} />
  
        </Switch>

    </div>
);

export default App;