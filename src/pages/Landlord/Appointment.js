// #newPage
//under review
import React from "react";
import AppointmentListDetails from "../../components/AppointmentListDetails";
import AppointmentFilter from "../../components/AppointmentFilter";

const Appointment = () => {
  return (

    <div className="wrapper wrapper-content animated fadeInRight gray-bg">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-lg-8 mb-3 px-0">
            <AppointmentFilter />
            <AppointmentListDetails />
          </div>
        </div>
      </div>
    </div>


  );
};

export default Appointment;
