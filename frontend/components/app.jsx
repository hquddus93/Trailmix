
import React from "react";
import LoginContainer from './splash/login_container'
import SignupContainer from './splash/signup_container'
import { AuthRoute, ProtectedRoute, SignRoute } from '../util/route_util';
import {Route, Redirect, Switch, Link} from 'react-router-dom';
import VideoContainer from './videos/video_index_container';
import SearchResultsContainer from './videos/search_results_container';
import CreateAccountContainer from './splash/create_account_container';
import VideoShowContainer from './videos/video_show_container';
import Splash from './splash/splash';
import Complete from './splash/complete';
import GenreContainer from './genres/genre_index_container'

const App = () => (
    <div>
       
      
        <Switch>
            <AuthRoute exact path='/signin' component={LoginContainer} />
            <SignRoute exact path='/signup' component={SignupContainer}/>
            <AuthRoute exact path='/create_account' component={CreateAccountContainer}/>
            {/* <ProtectedRoute path='/videos/:id' component={VideoShowContainer} /> */}
            <ProtectedRoute path='/search_results' component={SearchResultsContainer} />
            <ProtectedRoute path='/videos/:id' component={VideoContainer} />
            <ProtectedRoute path='/videos' component={VideoContainer} />
            <ProtectedRoute path='/genres' component={GenreContainer} />
            <Route exact path='/complete' component={Complete}/>
            <AuthRoute exact path='/' component={Splash} />
  
        </Switch>

    </div>
);

export default App;