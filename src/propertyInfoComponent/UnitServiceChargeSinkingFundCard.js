import React from "react";
import Loading from "../components/static/Loading";
import { AppContext } from "../context/settings";
import { apiCall } from "../utils/landlordHelper";

export default function UnitServiceSinkingCard({ title }) {
  console.log("In Facilities");

  const [isLoading, setIsLoading] = React.useState(true);
  const [unitServicesSinkingFund, setUnitServicesSinkingFund] = React.useState(true);

  const appContext = React.useContext(AppContext);
  const activeUnitId = appContext.settings.activeUnitId;
  
  React.useEffect(() => {
    
    async function loadBuildingInfoWrapper() {
      setIsLoading(true);
      var response = await apiCall("/units/ServiceChargeSinkingFund/" + activeUnitId);
      if (response.status) {
        setUnitServicesSinkingFund(response.data); 
      }
      setIsLoading(false);
    }
    loadBuildingInfoWrapper();
    // eslint-disable-next-line
  }, [activeUnitId]);

  return (
    <div className="ibox">
      <div className="ibox-title">
        <h3 className="boldtext"><img src="/imgs/money-bag.svg" alt="..." className="utilityIconTitle" />{title}</h3>
      </div>
      <div className="ibox-content minhigh pt-0">
        {isLoading === true ? (
          <Loading />
        ) : (
          <React.Fragment>
            <div className="row pt-2">
              <div className="col-sm-6">
                <div className="media">
                  <div className="media-body">
                    <h4 className="textclr">Service charge monthly amount</h4>
                    <p className="m-0">{unitServicesSinkingFund.serviceChargeMonthly || "N/A"}</p>
                  </div>
                </div>
                <hr />
              </div>
              <div className="col-sm-6">
                <div className="media">
                  <div className="media-body">
                    <h4 className="textclr">Sinking fund monthly amount</h4>
                    <p className="m-0">{unitServicesSinkingFund.sinkingFundMonthly || "N/A"}</p>
                  </div>
                </div>
                <hr />
              </div>
            </div>
            <div className="row pt-2">
              <div className="col-sm-12">
                <h3 className="boldtext">Payable To</h3>
              </div>
              <div className="col-sm-6">
                <div className="media">
                  <div className="media-body">
                    <h4 className="textclr">Name payable</h4>
                    <p className="m-0">{unitServicesSinkingFund.namePayable || "N/A"}</p>
                  </div>
                </div>
                <hr />
              </div>
              <div className="col-sm-6">
                <div className="media">
                  <div className="media-body">
                    <h4 className="textclr">Contact number</h4>
                    <p className="m-0">{unitServicesSinkingFund.contactNumber || "N/A"}</p>
                  </div>
                </div>
                <hr />
              </div>
            </div>

            <div className="row mb-4 justify-content-center">
              <div className="col-sm-6">
                <div className="media">
                  <div className="media-body">
                    <h4 className="textclr">Bank name</h4>
                    <p className="m-0">{unitServicesSinkingFund.bankName || "N/A"}</p>
                  </div>
                </div>
                <hr />
              </div>
              <div className="col-sm-6">
                <div className="media">
                  <div className="media-body">
                    <h4 className="textclr">Bank account number</h4>
                    <p className="m-0">{unitServicesSinkingFund.bankAccountNumber || "N/A"}</p>
                  </div>
                </div>
                <hr />
              </div>
            </div>
          </React.Fragment>
        )}
      </div>
    </div>
  );
}
