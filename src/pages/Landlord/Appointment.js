// #newPage
//under review
import React from "react";
import AppointmentListDetails from "../../components/AppointmentListDetails";
import AppointmentFilter from "../../components/AppointmentFilter";

const Appointment = () => {
  return (
    
      <div className="wrapper wrapper-content animated fadeInRight gray-bg">
        <div className="container container-xs">
          <div className="row justify-content-center">
            <div className="col-lg-9 mb-3">
              <AppointmentFilter />
              <AppointmentListDetails />
            </div>
          </div>
        </div>
      </div>

     
  );
};

export default Appointment;
