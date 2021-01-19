import React from "react";

import Payables from "../../components/PayablesList";


export default function LandLordPay() {
  // const { alert, hideAlert } = React.useContext(UserContext);

  return (
   
      <div className="wrapper wrapper-content animated fadeInRight">
        <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-lg-8 mb-3 px-0">
              <Payables />
            </div>
          </div>
        </div>
      </div>

  
  );
}
