import React from "react";
import Loading from "../components/static/Loading";
import { AppContext } from "../context/settings";
import { apiCall } from "../utils/landlordHelper";

export default function  UnitQuitRentCard  ({ title })  {
 console.log("In Facilities");

 const [isLoading, setIsLoading] = React.useState(true);
 const [unitQuitRent, setUnitQuitRent] = React.useState(true);

 const appContext = React.useContext(AppContext);
 const activeUnitId = appContext.settings.activeUnitId;

 React.useEffect(() => {
   
   async function loadAssessmentRateWrapper() {
     setIsLoading(true);
     var response = await apiCall("/units/QuitRent/" + activeUnitId);
     if (response.status) {
       setUnitQuitRent(response.data);
     }
     setIsLoading(false);
   }
   loadAssessmentRateWrapper();
   // eslint-disable-next-line
 }, [activeUnitId]);

  return (
    <div className="ibox">
      <div className="ibox-title">
        <h3><img src="/imgs/quitrent.svg" alt="..." className="utilityIconTitle" />{title}</h3>
        <hr />
      </div>
      <div className="ibox-content minhigh pt-0">
        {isLoading === true ? (
          <Loading />
        ) : (
          <div className="row pt-2">
            <div className="col-sm-6">
              <div className="media">
                <div className="media-body">
                  <h4 className="text-doorcase3">Annual charges</h4>
                  <p className="m-0">{unitQuitRent.halfYearlyRate}</p>
                </div>
              </div>
              <hr />
            </div>
            <div className="col-sm-6">
              <div className="media">
                <div className="media-body">
                  <h4 className="text-doorcase3">Bank name</h4>
                  <p className="m-0">{unitQuitRent.bankName || "N/A"}</p>
                </div>
              </div>
              <hr />
            </div>
            <div className="col-sm-6">
              <div className="media">
                <div className="media-body">
                  <h4 className="text-doorcase3">Contact Number</h4>
                  <p className="m-0">{unitQuitRent.contactNumber || "N/A"}</p>
                </div>
              </div>
              <hr />
            </div>

            <div className="col-sm-6">
              <div className="media">
                <div className="media-body">
                  <h4 className="text-doorcase3">Reference number</h4>
                  <p className="m-0">{unitQuitRent.referenceNumber || "N/A"}</p>
                </div>
              </div>
              <hr />
            </div>
            <div className="col-sm-6">
              <div className="media">
                <div className="media-body">
                  <h4 className="text-doorcase3">Company name</h4>
                  <p className="m-0">{unitQuitRent.companyName || "N/A"}</p>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="media">
                <div className="media-body">
                  <h4 className="text-doorcase3">Bank account number</h4>
                  <p className="m-0">{unitQuitRent.accountNumber || "N/A"}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

 