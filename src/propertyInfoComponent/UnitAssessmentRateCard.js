import React from "react";
import Loading from "../components/static/Loading";
import { AppContext } from "../context/settings";
import { apiCall } from "../utils/landlordHelper";

export default function UnitAssessmentRateCard({ title }) {
  console.log("In Facilities");

  const [isLoading, setIsLoading] = React.useState(true);
  const [unitAssessmentRate, setUnitAssessmentRate] = React.useState(true);

  const appContext = React.useContext(AppContext);
  const activeUnitId = appContext.settings.activeUnitId;

  React.useEffect(() => {
    
    async function loadAssessmentRateWrapper() {
      setIsLoading(true);
      var response = await apiCall("/units/AssessmentRate/" + activeUnitId);
      if (response.status) {
        setUnitAssessmentRate(response.data);
      }
      setIsLoading(false);
    }
    loadAssessmentRateWrapper();
    // eslint-disable-next-line
  }, [activeUnitId]);

  return (
    <div className="ibox">
      <div className="ibox-title">
        <h3> <img src="/imgs/assessment.svg" alt="..." className="utilityIconTitle" />{title}</h3>
      </div>
      <div className="ibox-content minhigh pt-0">
        {isLoading === true ? (
          <Loading />
        ) : (
          <div className="row pt-2">
            <div className="col-sm-6">
              <div className="media">
                <div className="media-body">
                  <h4 className="text-doorcase3">Half yearly rate</h4>
                  <p className="m-0">{unitAssessmentRate.halfYearlyRate || "N/A"}</p>
                </div>
              </div>
              <hr />
            </div>
            <div className="col-sm-6">
              <div className="media">
                <div className="media-body">
                  <h4 className="text-doorcase3">Company name</h4>
                  <p className="m-0">{unitAssessmentRate.companyName || "N/A"}</p>
                </div>
              </div>
              <hr />
            </div>
            <div className="col-sm-6">
              <div className="media">
                <div className="media-body">
                  <h4 className="text-doorcase3">Name Payable</h4>
                  <p className="m-0">{unitAssessmentRate.namePayable || "N/A"}</p>
                </div>
              </div>
              <hr />
            </div>

            <div className="col-sm-6">
              <div className="media">
                <div className="media-body">
                  <h4 className="text-doorcase3">Contact number</h4>
                  <p className="m-0">{unitAssessmentRate.contactNumber || "N/A"}</p>
                </div>
              </div>
              <hr />
            </div>
            <div className="col-sm-6">
              <div className="media">
                <div className="media-body">
                  <h4 className="text-doorcase3">Reference number</h4>
                  <p className="m-0">{unitAssessmentRate.referenceNumber || "N/A"}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
