// #newPage
import React from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../context/settings";
import {  appointment_status_cancelled, appointment_status_scheduled, appointment_status_completed, apiLoadData } from "../../utils/landlordHelper";
import EmptyDashboard from "../EmptyDashboard";
import InfoCardItem from "../InfoCardItem";
import Loading from "../static/Loading";

export default function DashAppoinment() {
  const appContext = React.useContext(AppContext);
  const [isLoading, setIsLoading] = React.useState(true);
  const [appointments, set_appointments] = React.useState({});
  const activeUnitId = appContext.settings.activeUnitId;

  React.useEffect(() => {
    async function loadTenantAppointmenetsWrapper() {
      setIsLoading(true);

      var response = await apiLoadData("tenantAppointments", {activeUnitId});
 
        set_appointments(response); 
      setIsLoading(false);
    }
    loadTenantAppointmenetsWrapper();
    // eslint-disable-next-line
  }, [activeUnitId]);

  function convertAppointmentStatusToColor(appointment) {
    if (appointment.status === "Completed") {
      return "green";
    } else if (appointment.status === "Scheduled") {
      return "blue";
    } else if (appointment.status === "Cancelled") {
      return "yellow";
    }
  }

  var data = [];
  var counter = 0;
  var statoos = [appointment_status_scheduled, appointment_status_cancelled, appointment_status_completed];
  if (isLoading === false){
 
    for (let i = 0; i < statoos.length; i++) {
      const status = statoos[i];
      var elements = appointments && appointments[status] || [];
      
      for (let j = 0; j < elements.length; j++) {
        const cur_appointment = elements[j];
        data.push({ ...cur_appointment, title: "Date: " + cur_appointment.date, body: cur_appointment.purpose, color: convertAppointmentStatusToColor(cur_appointment), address: "/landlord/appointmentDetails/" + cur_appointment.appointmentId });
        counter++;
        if (counter >= 3) break;
      }
      if (counter >= 3) break;
    }
  }

  return (
    <div className="ibox">
      <div className="ibox-title bg-white">
        <h5>
          <Link to="/landlord/appointment">Appointment</Link>
        </h5>
        <div className="ibox-tools">
          <Link to="/landlord/appointment">
            <i className="fas fa-arrow-right"></i>
          </Link>
        </div>
      </div>

      <div className="ibox-content bg-white">
        <ul className="sortable-list connectList agile-list ui-sortable"></ul>
        {isLoading === true ? <Loading /> : data.length > 0 ? data.map((item, index) => <InfoCardItem key={index} {...item} />) : <EmptyDashboard />}
      </div>
    </div>
  );
}
