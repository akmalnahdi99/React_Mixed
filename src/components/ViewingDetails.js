import React from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/settings";
import { apiCall } from "../utils/landlordHelper";
import Loading from "./static/Loading";

export default function ViewingDetails() {

    var t = useParams();
    var appointmentId = t.appointmentId;

  const [isLoading, setIsLoading] = React.useState(true);
  const [vieweingDetails, set_vieweingDetails] = React.useState(null);

  const appContext = React.useContext(AppContext);
  const activeUnitId = appContext.settings.activeUnitId;

  React.useEffect(() => {
    async function loadViewingDetailsWrapper() {
      setIsLoading(true);
 
      var response = await apiCall("/units/tenantAppointmentDetails/?unitId=" + activeUnitId + "&appointmentId=" + appointmentId);

      if (response.status) {
        set_vieweingDetails(response.data);
      }
      setIsLoading(false);
    }
    loadViewingDetailsWrapper();
    // eslint-disable-next-line
  }, [activeUnitId]);

  return (
    <div className="wrapper wrapper-content animated fadeInRight">
      <div className="container container-xs">
        <div className="ibox white-bg">
          <div className="ibox-title">
            <h3>Viewing Details</h3>
            <div className="media pt-2">
              {isLoading === true ? (
                <Loading />
              ) : (
                <React.Fragment>
                  <img className="align-self-center mr-3" src={vieweingDetails.thumbUrl} style={{ width: "100px", height: "100px", borderRadius: "50%" }} alt={vieweingDetails.tenantName} />
                  <div className="media-body align-self-center">
                    <h2 className="mt-0">{vieweingDetails.tenantName || "N/A"}</h2>
                  </div>
                </React.Fragment>
              )}
            </div>
          </div>
          {isLoading === true ? (
            <Loading />
          ) : (
            <React.Fragment>
              <div className="ibox-content">
                <div className="row">
                  <div className="col-sm-6 ">
                    <div className="media">
                      <div className="media-body">
                        <h4 className="text-doorcase3">Nationality</h4>
                        <p className="m-0">{vieweingDetails.nationality || "N/A"}</p>
                      </div>
                    </div>
                    <hr />
                  </div>
                  <div className="col-sm-6">
                    <div className="media">
                      <div className="media-body">
                        <h4 className="text-doorcase3">Total occupants</h4>
                        <p className="m-0">{vieweingDetails.occupants || "N/A"}</p>
                      </div>
                    </div>
                    <hr />
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="media">
                      <div className="media-body">
                        <h4 className="text-doorcase3">Gender</h4>
                        <p className="m-0">{vieweingDetails.gender || "N/A"}</p>
                      </div>
                    </div>
                    <hr />
                  </div>
                  <div className="col-sm-6">
                    <div className="media">
                      <div className="media-body">
                        <h4 className="text-doorcase3">Move in date</h4>
                        <p className="m-0">{vieweingDetails.moveInDate || "N/A"}</p>
                      </div>
                    </div>
                    <hr />
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="media">
                      <div className="media-body">
                        <h4 className="text-doorcase3">Age</h4>
                        <p className="m-0">{vieweingDetails.age || "N/A"}</p>
                      </div>
                    </div>
                    <hr />
                  </div>
                  <div className="col-sm-6">
                    <div className="media">
                      <div className="media-body">
                        <h4 className="text-doorcase3">Duration of tenancy</h4>
                        <p className="m-0">{vieweingDetails.duration + " Months" || "N/A"}</p>
                      </div>
                    </div>
                    <hr />
                  </div>
                </div>

                <div className="row">
                  <div className="col-sm-6">
                    <div className="media">
                      <div className="media-body">
                        <h4 className="text-doorcase3">Occupation</h4>
                        <p className="m-0">{vieweingDetails.occupation || "N/A"}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ibox-content-viewing border-top">
                <div className="row">
                  <div className="col-sm-3 ">
                    <div className="media">
                      <div className="media-body">
                        <h4 className="text-doorcase3">Date of viewing</h4>
                        <p className="m-0">{vieweingDetails.appointmentDate || "N/A"}</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-3">
                    <div className="media">
                      <div className="media-body">
                        <h4 className="text-doorcase3">Time of viewing</h4>
                        <p className="m-0">{vieweingDetails.appointmentTime || "N/A"}</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-3">
                    <div className="media">
                      <div className="media-body">
                        <h4 className="text-doorcase3">Location</h4>
                        <p className="m-0">{vieweingDetails.location || "N/A"}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ibox-content-viewing border-top">
                <div className="row">
                  <div className="col-sm-4 ">
                    <div className="media">
                      <div className="media-body">
                        <h4 className="text-doorcase3">Attending agent name</h4>
                        <p className="m-0">{vieweingDetails.agentName || "N/A"}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </React.Fragment>
          )}
        </div>
      </div>
    </div>
  );
}
