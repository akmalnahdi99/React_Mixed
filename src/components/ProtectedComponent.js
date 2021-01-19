import React from "react";
import { Redirect, Route } from "react-router-dom";
import { AppContext } from "../context/settings";
 

export function ProtectedRoute({ props, children, ...rest }) {

  // console.log("props", props);
  // console.log("children", children);
  // console.log("rest", rest);
  var Children = children;

  var appContext = React.useContext(AppContext);
  if (!appContext.settings.isLogged) {
    return (
      <Route>
        <Redirect to="/login" />
      </Route>
    );
  }

  return [Children];
 
}
 