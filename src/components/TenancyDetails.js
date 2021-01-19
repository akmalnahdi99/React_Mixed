import React from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../context/settings";
import { apiCall } from "../utils/landlordHelper";
import Loading from "./static/Loading";

export default function TenancyDetails({ title }) {
    const [isLoading, setIsLoading] = React.useState(true); 
    const [contract, setContract] = React.useState(null);

    const appContext = React.useContext(AppContext);
    const activeUnitId = appContext.settings.activeUnitId;

    React.useEffect(() => {
      async function loadUserInfoAndTenancyDetails() {
        setIsLoading(true);
        var response = await apiCall("/units/tenancyInfo/" + activeUnitId);
        if (response.status) {
          setContract(response.data);
        } 
        setIsLoading(false);
      }
      loadUserInfoAndTenancyDetails();
      // eslint-disable-next-line
    }, [activeUnitId]);
    
  return (
    <div className="ibox">
      <div className="ibox-content minhigh450px pt-0">
      <div className="ibox-title ">
        <h3>{title}</h3>
        <hr />
      </div>
      
        {isLoading === true ? (
          <Loading />
        ) : (
          <React.Fragment>
            <div className="row">
              <div className="col-sm-12">
                <div className="media">
                  <div className="media-body">
                    <h4 className="text-doorcase3">Duration</h4>
                    <p className="m-0">{contract.duration} Months</p>
                  </div>
                </div>
                <hr />
              </div>
              <div className="col-sm-6">
                <div className="media">
                  <div className="media-body">
                    <h4 className="text-doorcase3">Start date</h4>
                    <p className="m-0">{contract.startDate}</p>
                  </div>
                </div>
                <hr />
              </div>
              <div className="col-sm-6">
                <div className="media">
                  <div className="media-body">
                    <h4 className="text-doorcase3">Expiry date</h4>
                    <p className="m-0">{contract.endDate}</p>
                  </div>
                </div>
                <hr />
              </div>
            </div>
            <div className="row mb-4 justify-content-center">
              <div className="col-sm-6">
                <div className="media">
                  <div className="media-body">
                    <h4 className="text-doorcase3">Rental amount</h4>
                    <p className="m-0">{contract.rental}</p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="media">
                  <div className="media-body">
                    <h4 className="text-doorcase3">Total occupants</h4>
                    <p className="m-0">{contract.occupants}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mb-4 justify-content-center">
              <div className="col-6 text-center">
                <Link to="tenancy-agreement.html" className="btn btn-success btn-block btn-lg mt-4">
                  Tenancy agreement
                </Link>
              </div>
              <div className="col-6 text-center">
                {/* <Link to="/landlord/TenancyDocs/" className="btn btn-primary btn-block btn-lg mt-4">
                  Tenant's Documents
                </Link> */}
              </div>
            </div>
          </React.Fragment>
        )}
      </div>
    </div>
  );
}
