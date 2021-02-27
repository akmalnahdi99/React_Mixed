import React from "react";
import { Redirect } from "react-router-dom";
import { AppContext } from "../../context/settings";

export default function Logout() {
  const {clearSettings, updateAppContext, settings:{isLogged} } = React.useContext(AppContext);

  //   React.useEffect(() => {
 
  //   }, []);
   
  if (isLogged === true) {
    updateAppContext({ accessToken: null, isLogged: false, unitFinancials:null,tenantRentalPaymentStats:null });
    clearSettings();
  }
  
  return <Redirect to="/landlord/login"></Redirect>;

}
