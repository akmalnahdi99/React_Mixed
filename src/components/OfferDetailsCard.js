//TASK under Review

import React from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../context/settings";
import { apiCall } from "../utils/landlordHelper";
import Loading from "./static/Loading";

export default function OfferDetailsCard({ offerId }) {
  const [isLoading, setIsLoading] = React.useState(true);
  const [offerDetails, set_offerDetails] = React.useState(null);

  const appContext = React.useContext(AppContext);
  const activeUnitId = appContext.settings.activeUnitId;

  React.useEffect(() => {
    async function loadOfferDetailsWrapper() {
      setIsLoading(true);

      var response = await apiCall("/units/tenantOfferDetails/?offerId=" + offerId + "&UnitId=" + activeUnitId);
      if (response.status) {
        set_offerDetails(response.data);
      }
      response.status && setIsLoading(false);
    }
    loadOfferDetailsWrapper();
    // eslint-disable-next-line
  }, [activeUnitId, offerId]);

  return (
    <div className="wrapper wrapper-content animated fadeInRight">
      <div className="container container-xs px-0">
        <div className="ibox">
          <div className="ibox-title minhigh">
            <h3>Offer Details</h3>
          </div>
          {isLoading === true ? (
            <Loading />
          ) : (
            <React.Fragment>
              <div className="ibox-content-viewing border-bottom minhigh">
                <div className="row">
                  <div className="col-sm-6 pb-2">
                    <div className="media">
                      <div className="media-body">
                        <h4 className="text-doorcase3 mt-0">
                          <strong>Listing ID: {offerDetails.listingId || "N/A"}</strong>
                        </h4>
                        <p className="m-0">Applied date: {offerDetails.appliedDate || "N/A"}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row pt-4">
                  <div className="col-sm-6">
                    <div className="media">
                      <div className="media-body ">
                        <p>{offerDetails.buildingName}</p>
                        <p className="m-0"> {offerDetails.unitName} </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ibox-content-viewing">
                <div className="row">
                  <div className="col-sm-12">
                    <div className="media">
                      <img className="align-self-center mr-3" src={offerDetails.urlThumb} style={{ width: "100px", height: "100px", borderRadius: "50%" }} width="100px" alt="Generic placeholder" />
                      <div className="media-body align-self-center">
                        <h2 className="mt-0">{offerDetails.tenantName || "N/A"}</h2>
                      </div>
                    </div>
                    <hr />
                  </div>
                </div>
              </div>
              <div className="ibox-content">
                <div className="row">
                  <div className="col-sm-6 ">
                    <div className="media">
                      <div className="media-body">
                        <h4 className="text-doorcase3">Nationality</h4>
                        <p className="m-0">{offerDetails.nationality || "N/A"}</p>
                      </div>
                    </div>
                    <hr />
                  </div>
                  <div className="col-sm-6">
                    <div className="media">
                      <div className="media-body">
                        <h4 className="text-doorcase3">Total occupants</h4>
                        <p className="m-0">{offerDetails.occupants || "N/A"}</p>
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
                        <p className="m-0">{offerDetails.gender || "N/A"}</p>
                      </div>
                    </div>
                    <hr />
                  </div>
                  <div className="col-sm-6">
                    <div className="media">
                      <div className="media-body">
                        <h4 className="text-doorcase3">Move in date</h4>
                        <p className="m-0">{offerDetails.moveInDate || "N/A"}</p>
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
                        <p className="m-0">{offerDetails.age || "N/A"}</p>
                      </div>
                    </div>
                    <hr />
                  </div>
                  <div className="col-sm-6">
                    <div className="media">
                      <div className="media-body">
                        <h4 className="text-doorcase3">Duration of tenancy</h4>
                        <p className="m-0">{offerDetails.duration + " Months" || "N/A"}</p>
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
                        <p className="m-0">{offerDetails.occupation || "N/A"}</p>
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
                        <p className="m-0">{offerDetails.agentName || "N/A"}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ibox-content-viewing border-top minhigh">
                <div className="row">
                  <div className="container pr-0">
                    <div className="row mt-0 text-center">
                      <div className="col-sm-3">
                        <div className="media">
                          <div className="media-body">
                            <h4 className="text-doorcase3">Status</h4>
                          </div>
                        </div>
                      </div>
                      <div className="col-9 text-center pr-0 pt-1 pl-1">
                        {offerDetails.status.toLocaleLowerCase() === "New".toLocaleLowerCase() ? (
                          <React.Fragment>
                            <Link className="btn btn-primary btn-full text-center ml-1" to="">
                              Accept Offer
                            </Link>
                            <Link className="btn btn-warning btn-full text-center ml-1" to="">
                              Renegociate Offer
                            </Link>
                            <Link className="btn btn-success btn-full text-center ml-1" to="">
                              Reject Offer
                            </Link>
                          </React.Fragment>
                        ) : (
                          <span>{offerDetails.statusText}</span>
                        )}
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
