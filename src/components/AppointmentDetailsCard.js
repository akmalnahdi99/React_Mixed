// #newPage
//TASK under Review
import React from "react";
import { AppContext } from "../context/settings";
import {apiCall} from "../utils/landlordHelper";
import Loading from "./static/Loading";

export default function AppointmentDetailsCard({appointmentId}) {
  const appContext = React.useContext(AppContext);
  const [isLoading, setIsLoading] = React.useState(true);
  const [appointment, set_appointment] = React.useState({});
  const activeUnitId = appContext.settings.activeUnitId;

  React.useEffect(() => {
    async function loadTenantAppointmenetDetailsWrapper() {
      setIsLoading(true);

      var response = await apiCall("/units/tenantAppointmentDetails?unitId=" + activeUnitId + "&appointmentId=" + appointmentId);

      if (response.status) {
     
        set_appointment(response.data);
      }
      setIsLoading(false);
    }
    loadTenantAppointmenetDetailsWrapper();
    // eslint-disable-next-line
  }, [activeUnitId]);

  if (isLoading === true) {
    return <Loading />;
  }

  //     Category1: "Periodical or Priority maintenance (Plumbing)",
  //     Category2: "Pay by cash",
  //     Category3: "Property Inspection",
  //     Category4: "New Prospect Viewing",

  const data = appointment;
 
  return (
    <div className="wrapper wrapper-content animated fadeInRight">
      <div className="container container-xs px-0">
        <div className="ibox">
          <div className="ibox-title minhigh">
            <h3>Appointment Details</h3>
          </div>
          <div className="ibox-content-viewing border-bottom minhigh">
            <div className="row mb-2">
              <div className="col-sm-12">
                <div className="media">
                  <div className="media-body">
                    <h4 className="text-doorcase3">Title</h4>
                    <p className="m-0">{data.title || "N/A"}</p>
                  </div>
                </div>
                <hr />
              </div>
            </div>
            <div className="row mb-2">
              <div className="col-sm-12">
                <div className="media">
                  <div className="media-body">
                    <h4 className="text-doorcase3">Category of Appointment</h4>
                    <p className="m-0">{data.purpose}</p>
                  </div>
                </div>
                <hr />
              </div>
            </div>
            <div className="row mb-2">
              <div className="col-sm-12">
                <div className="media">
                  <div className="media-body">
                    <h4 className="text-doorcase3">Date</h4>
                    <p className="m-0">{data.date}</p>
                  </div>
                </div>
                <hr />
              </div>
            </div>
            <div className="row mb-2">
              <div className="col-sm-12">
                <div className="media">
                  <div className="media-body">
                    <h4 className="text-doorcase3">Time</h4>
                    <p className="m-0">{data.time}</p>
                  </div>
                </div>
                <hr />
              </div>
            </div>
            <div className="row mb-2">
              <div className="col-sm-12">
                <div className="media">
                  <div className="media-body">
                    <h4 className="text-doorcase3">Status of Appointment</h4>
                    <p className="m-0">{data.status}</p>
                  </div>
                </div>
                <hr />
              </div>
            </div>
            <div className="row mb-2">
              <div className="col-sm-12">
                <div className="media">
                  <div className="media-body">
                    <h4 className="text-doorcase3">Description</h4>
                    <p className="m-0">{data.description}</p>
                  </div>
                </div>
                <hr />
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12">
                <div className="media">
                  <div className="media-body">
                    <h4 className="text-doorcase3">Agent</h4>
                    <img className="align-self-center mr-3" src="/imgs/avatar.svg" width="100px" alt="Agent profile" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}