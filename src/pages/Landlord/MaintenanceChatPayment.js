//TASK under Review
import React from "react";



import MaintenanceDetailsList from "../../components/MaintenanceDetailsList";
import MaintenancePaymentChat from "../../components/MaintenancePaymentChat";

export default function Maintenance() {
  // const { alert, hideAlert } = React.useContext(UserContext);

  return (
    <div className="wrapper wrapper-content animated fadeInRight py-5 pb-5">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-lg-8 mb-3 px-0">
            <MaintenanceDetailsList />

            <MaintenancePaymentChat />
          </div>
        </div>
      </div>
    </div>
  );
}
