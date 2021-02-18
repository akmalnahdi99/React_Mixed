//TASK under Review
import React from "react";

import { apiCall } from "../../utils/landlordHelper";
import { Link } from "react-router-dom";
import Loading from "./../static/Loading";
import { AppContext } from "../../context/settings";

export default function UnitDetailsCard() {
  const [isLoading, setIsLoading] = React.useState(true);
  const [unitDetails, setUnitDetails] = React.useState(null);

  const {
    settings: { activeUnitId },
  } = React.useContext(AppContext);

  React.useEffect(() => {
    async function loadUnitDetails() {
      setIsLoading(true);
      var response = await apiCall("/units/info/" + activeUnitId);
      if (response.status) {
        var r = response.data;
        setUnitDetails(r);
      }
      setIsLoading(false);
    }
    loadUnitDetails();
    // eslint-disable-next-line
  }, []);

  var imageGallery = null;
  if (unitDetails && unitDetails.images != null) {
    imageGallery = unitDetails.images.map((image, index) => {
      return (
        <li className="col-6 col-sm-4 col-md-2 col-lg-2 p-2" key={index}>
          <a target="_blank" rel="noopener noreferrer" href={image.urlImage}>
            <img className="img-responsive" src={image.urlThumb} alt="post som" />
          </a>
        </li>
      );
    });
  }

  return (
    <div className="ibox ss" style={{ border: "0px solid red" }}>
      <div className="ibox-title">
        <h3><img src="/imgs/tenant.svg" alt="..." className="utilityIconTitle" />Details</h3>
      </div>
      <div className="ibox-content">
        {isLoading === true ? (
          <Loading />
        ) : (
          <React.Fragment>
            <div className="row mb-5">
              <div className="col-sm-12 ">
                <div className="demo-gallery">
                  <ul id="lightgallery" className="list-unstyled row">
                    {imageGallery}
                  </ul>
                </div>
                <hr />
              </div>
              <div className="col-sm-4 col-6">
                <div className="media">
                  <div className="media-body">
                    <h4 className="text-doorcase3">Block</h4>
                    <p className="m-0">{unitDetails.block || "N/A"}</p>
                  </div>
                </div>
                <hr />
              </div>
              <div className="col-sm-4 col-6">
                <div className="media">
                  <div className="media-body">
                    <h4 className="text-doorcase3">Level</h4>
                    <p className="m-0">{unitDetails.level || "N/A"}</p>
                  </div>
                </div>
                <hr />
              </div>
              <div className="col-sm-4 col-6">
                <div className="media">
                  <div className="media-body">
                    <h4 className="text-doorcase3">Unit</h4>
                    <p className="m-0">{unitDetails.unitNumber || "N/A"}</p>
                  </div>
                </div>
                <hr />
              </div>
              <div className="col-sm-4 col-6">
                <div className="media">
                  <div className="media-body">
                    <h4 className="text-doorcase3">Furnishing</h4>
                    <p className="m-0">{unitDetails.furnishing || "N/A"}</p>
                  </div>
                </div>
                <hr />
              </div>
              <div className="col-sm-4 col-6">
                <div className="media">
                  <div className="media-body">
                    <h4 className="text-doorcase3">Type</h4>
                    <p className="m-0">{unitDetails.type || "N/A"}</p>
                  </div>
                </div>
                <hr />
              </div>
              <div className="col-sm-4 col-6">
                <div className="media">
                  <div className="media-body">
                    <h4 className="text-doorcase3">Sqft.</h4>
                    <p className="m-0">{unitDetails.area || "N/A"}</p>
                  </div>
                </div>
                <hr />
              </div>
              <div className="col-sm-4 col-6">
                <div className="media">
                  <div className="media-body">
                    <h4 className="text-doorcase3">Room</h4>
                    <p className="m-0">{unitDetails.roomCount || "N/A"}</p>
                  </div>
                </div>
                <hr />
              </div>
              <div className="col-sm-4 col-6">
                <div className="media">
                  <div className="media-body">
                    <h4 className="text-doorcase3">Utility room</h4>
                    <p className="m-0">{unitDetails.utilityRoomCount || "N/A"}</p>
                  </div>
                </div>
                <hr />
              </div>
              <div className="col-sm-4 col-6">
                <div className="media">
                  <div className="media-body">
                    <h4 className="text-doorcase3">Bath</h4>
                    <p className="m-0">{unitDetails.bathRoomCount || "N/A"}</p>
                  </div>
                </div>
                <hr />
              </div>
              <div className="col-sm-4 col-6">
                <div className="media">
                  <div className="media-body">
                    <h4 className="text-doorcase3">Car park</h4>
                    <p className="m-0">{unitDetails.carParkCount || "N/A"}</p>
                  </div>
                </div>
                <hr />
              </div>
              <div className="col-sm-4 col-6">
                <div className="media">
                  <div className="media-body">
                    <h4 className="text-doorcase3">Car park No</h4>
                    <p className="m-0">{unitDetails.carParkLocation || "N/A"}</p>
                  </div>
                </div>
                <hr />
              </div>
              {/* <div className="col-sm-4 col-6">
                <div className="media">
                  <div className="media-body">
                    <h4 className="text-doorcase3">Service charges</h4>
                    <p className="m-0">{unitDetails.servicesCharge || "N/A"}</p>
                  </div>
                </div>
                <hr />
              </div>
              <div className="col-sm-4 col-6">
                <div className="media">
                  <div className="media-body">
                    <h4 className="text-doorcase3">Sinking fund</h4>
                    <p className="m-0">{unitDetails.sinkingFund || "N/A"}</p>
                  </div>
                </div>
              </div>
              <div className="col-sm-4 col-6">
                <div className="media">
                  <div className="media-body">
                    <h4 className="text-doorcase3">Insurance amount</h4>
                    <p className="m-0">{unitDetails.insuranceAmount || "N/A"}</p>
                  </div>
                </div>
              </div> */}
            </div>
          </React.Fragment>
        )}
      </div>
    </div>
  );
}
