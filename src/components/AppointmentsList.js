// #newPage
import { AppContext } from "context/settings";
import React from "react";
import { apiCall } from "utils/landlordHelper";
import AppointmentListItem from "./AppointmentListItem";

import Loading from "./static/Loading";

export default function AppointmentsList(props, filterBy) {
  const appContext = React.useContext(AppContext);
  const activeFilter = appContext.settings.postsFilter;
  const [isLoading, setIsLoading] = React.useState(true);
  const [appointments, set_appointments] = React.useState({});
  const activeUnitId = appContext.settings.activeUnitId;

  React.useEffect(() => {
    async function loadTenantAppointmenetsWrapper() {
      setIsLoading(true);

      var response = await apiCall("/units/tenantAppointments/" + activeUnitId  );

      if (response.status) {

        set_appointments(response.data);
      }
      setIsLoading(false);
    }
    loadTenantAppointmenetsWrapper();
    // eslint-disable-next-line
  }, [activeUnitId]);

  if (isLoading === true) {
    return <Loading />;
  }

  var filteredAppointments = [];

  if (activeFilter === "all") {
  
    for (const key in appointments) {
       var subArray = appointments[key];
       filteredAppointments.push(...subArray);
    } 
  } else if (Object.keys(appointments).indexOf(activeFilter) >= 0) {
    filteredAppointments = appointments[activeFilter];
  }

  if (filteredAppointments.length > 0) {
    return (
      <div className="ibox mt-2">
        <div className="ibox-title">
          <h3>Appointments</h3>
        </div>
        <div className="ibox-content minhigh">
          <div className="row">
            <div className="col-sm-12">
              {filteredAppointments.map((item,index) => {
                return <AppointmentListItem key={index} {...item} />;
              })}
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <h2 style={{ textAlign: "center" }}> No Posts found !!!</h2>;
  }
}
