// #newPage
//under review
import React from "react";
import AppointmentListDetails from "../../components/AppointmentsList";
import AppointmentFilter from "../../components/AppointmentFilter";

export default function Appointment() {
 
  const [filter, set_filter] = React.useState("all");

  function updateFilter(filter) {
    set_filter(filter);
  }

  return (
    <div className="wrapper wrapper-content animated fadeInRight gray-bg">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-lg-8 mb-3 px-0">
            <AppointmentFilter activeFilter={filter} updateFilter={updateFilter} />
            <AppointmentListDetails activeFilter={filter} />
          </div>
        </div>
      </div>
    </div>
  );
}
