import React from "react";
import { Link, Redirect, Route, useLocation } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const location = useLocation();

  return (
    // <Route {...rest}>
    //   {fakeAuth.isAuthenticated === true ?
    //     <Component />
    //   :
    //     <Redirect to={{ pathname: "/login", state: { from: location } }} />
    //   }
    // </Route>
    <Route {...rest} render={props => (
      Storage.getItem('token') ?
          <Component {...props} />
      : <Link to={{ pathname: "/login", state: { from: location } }} />
  )} />
  );
};

export default PrivateRoute;