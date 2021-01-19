import React from "react";
import { Redirect } from "react-router-dom";
import { AppContext } from "../../context/settings";

export default function Logout() {
  const {clearSettings, updateAppContext, settings:{isLogged} } = React.useContext(AppContext);

  //   React.useEffect(() => {
  //     console.log("in Profile: try to get info");
  //   }, []);
  console.log("[Logout page] with isLogged = " , isLogged);
  if (isLogged === true) {
    updateAppContext({ accessToken: null, isLogged: false });
    clearSettings();
  }
  
  return <Redirect to="/landlord/login"></Redirect>;

}
