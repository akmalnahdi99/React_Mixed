import React from "react";
import { Redirect, useParams } from "react-router-dom";
import AppointmentDetailsCard from "../../components/AppointmentDetailsCard";

export default function AppointmentDetails() {
  var t = useParams();
  if (!t || !t.appointmentId) {
    return <Redirect to="/landlord/appointment" />;
  }
  var appointmentId = t.appointmentId;
  return (
    <div className="wrapper wrapper-content animated fadeInRight py-3 pb-5 ">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-lg-8 mb-3 px-0">
            <AppointmentDetailsCard appointmentId={appointmentId} />
          </div>
        </div>
      </div>
    </div>
  );
}
