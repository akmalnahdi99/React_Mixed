// #newPage
//TASK under Review
import React from "react";
import AppointmentDetailsList from "../../components/AppointmentDetailsList";


export default function Offers() {
  // const { alert, hideAlert } = React.useContext(UserContext);

  return (
     

      <div className="wrapper wrapper-content animated fadeInRight py-3 pb-5 ">
        <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-lg-8 mb-3 px-0">
          <AppointmentDetailsList />
          </div>
          </div>
        </div>
      </div>
 
  );
}
