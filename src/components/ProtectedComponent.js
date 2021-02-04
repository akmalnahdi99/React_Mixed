import React from "react";
import { Redirect, Route, useHistory } from "react-router-dom";
import { AppContext } from "../context/settings";
 import ReactGA from "react-ga";

export function ProtectedRoute({ props, children, ...rest }) {

  // console.log("props", props);
  // console.log("children", children);
  // console.log("rest", rest);

  const history = useHistory();

  // Initialize google analytics page view tracking
  history.listen((location) => { 
    ReactGA.set({ page: location.pathname }); // Update the user's current page
    ReactGA.pageview(location.pathname); // Record a pageview for the given page
  });

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
 