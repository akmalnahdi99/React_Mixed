import React from "react";
import { Redirect, useParams } from "react-router-dom";
import Empty from "../../components/Empty";
import { AppContext } from "../../context/settings";

export default function UnitMeters() {
  var t = useParams();
  var meterName = t.meterName;
  var appContext = React.useContext(AppContext);
  if (["Gas", "Electricity", "Water"].indexOf(meterName) === -1) {
    return <Redirect to="/landlord/unitInventory" />;
  }

  const metersData = (appContext.settings && appContext.settings.metersData) || null;

  var data = (metersData && metersData["CheckIn"] && metersData["CheckIn"].filter((x) => x.meterType === meterName)[0]) || null;


  if (!data)
  return <Empty title="No Data Found"/>

  return (
    <div className="wrapper wrapper-content animated fadeInRight py-5 pb-5">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-lg-8 mb-3 px-0">
            <div className="ibox-content minhigh">
              <div className="row mb-4 pt-3">
                <div className="col-md-12">
                  <div className="media">
                    <div className="media-body">
                      <h3 className="text-doorcase3">{meterName}</h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="demo-gallery">
                    <ul id="lightgallery" className="list-unstyled row">
                      <img src={data.urlThumb} alt="..." />
                    </ul>
                  </div>
                </div>
              </div>
              <hr />
              <div className="row mb-4">
                <div className="col-md-12">
                  <div className="media">
                    <div className="media-body">
                      <h4 className="text-doorcase3">Reading</h4>
                      <p className="m-0">{data.reading}</p>
                    </div>
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
