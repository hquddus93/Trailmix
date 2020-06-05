import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';

const Auth = ({ component: Component, path, loggedIn, exact }) => (
    <Route path={path} exact={exact} render={(props) => (
        !loggedIn ? (
           
            <Component {...props} />

        ) : (
             <Redirect to="/videos" />
               
            )
    )} />
);

const Sign = ({ component: Component, path, loggedIn, exact }) => (
    <Route path={path} exact={exact} render={(props) => (
        !loggedIn ? (

            <Component {...props} />

        ) : (
                <Redirect to="/complete" />

            )
    )} />
);


const Protected = ({ component: Component, path, loggedIn, exact }) => (
    <Route path={path} exact={exact} render={(props) => (
        loggedIn ? (
            <Component {...props} />
        ) : (
                <Redirect to="/" />
            )
    )} />
);

const mapStateToProps = state => (
    { loggedIn: Boolean(state.session.id) }
);

export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));
export const SignRoute = withRouter(connect(mapStateToProps)(Sign));
export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected));
