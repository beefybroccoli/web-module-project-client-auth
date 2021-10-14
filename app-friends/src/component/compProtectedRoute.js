import React from "react";
import { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { ContextObject } from "../App";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const { stateToken } = useContext(ContextObject);
  console.log("ProtectedRoute, stateToken = ", stateToken);

  return (
    <Route
      {...rest}
      render={(props) =>
        stateToken !== "" ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  ); //end return
};

export default ProtectedRoute;

/*
why this block is not working?
<Route {...rest}>
      {stateToken !== "" ? (
        () => {
          return <Component {...rest} />;
        }
      ) : (
        <Redirect to="/" />
      )}
  </Route>

*/
