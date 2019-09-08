import React from 'react';

import { Route, Redirect } from 'react-router-dom';

import { isLoggedIn } from '../utils/fake-login'

// High Order Component
// HOC

const PrivateRoute = ({ component: Page, ...props }) => (
    <Route
        {...props}
        render={routeProps => (
            isLoggedIn()
                ? <Page {...routeProps} />
                : <Redirect
                    to={{
                        pathname: "/login",
                        state: {
                            previousPath: routeProps.location
                        }
                    }}
                />
        )}
    />
);

export default PrivateRoute;
