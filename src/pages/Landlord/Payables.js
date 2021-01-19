import React from "react";

import Payables from "../../components/PayablesList";


export default function LandLordPay() {
  // const { alert, hideAlert } = React.useContext(UserContext);

  return (
    <div className="wrapper wrapper-content animated fadeInRight py-5 pb-5">
      <div className="container container-xs">
        <div className="row justify-content-center">
          <div className="col-lg-9 mb-3">
            <Payables />
          </div>
        </div>
      </div>
    </div>
  );
} 