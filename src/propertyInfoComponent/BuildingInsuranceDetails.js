import React from "react";
import Loading from "../components/static/Loading";
import { AppContext } from "../context/settings";
import { apiCall } from "../utils/landlordHelper";

// same as building info logically 
export default function BuildingInsuranceDetails({ title }) {
  const [isLoading, setIsLoading] = React.useState(true);
  const [buildingInsuranceDetails, setBuildingInsuranceDetails] = React.useState(true);

  const appContext = React.useContext(AppContext);
  const activeUnitId = appContext.settings.activeUnitId;

  const allUnits = appContext.settings.userInfo.units || [];
  var buildingId = allUnits.filter((u) => u.id === activeUnitId)[0].buildingId || null;

  React.useEffect(() => {
    
    async function loadBuildingInsuranceDetailsWrapper() {
      setIsLoading(true);
      var response = await apiCall("/buildings/insuranceCompany/" + buildingId);
      if (response.status) {
        setBuildingInsuranceDetails(response.data);
      }
      setIsLoading(false);
    }
    loadBuildingInsuranceDetailsWrapper();
    // eslint-disable-next-line
  }, [activeUnitId]);

  return (
          
    <div className="ibox">
      <div className="ibox-title">
      
        <h3><img src="/imgs/insurance.svg" alt="..." className="utilityIconTitle" />{title}</h3>
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
                  <h4 className="text-doorcase3">Name</h4>
                  <p className="m-0">{buildingInsuranceDetails.name}</p>
                </div>
              </div>
              <hr />
            </div>
            <div className="col-sm-6">
              <div className="media">
                <div className="media-body">
                  <h4 className="text-doorcase3">Address</h4>
                  <p className="m-0">{buildingInsuranceDetails.address}</p>
                </div>
              </div>
              <hr />
            </div>
            <div className="col-sm-6">
              <div className="media">
                <div className="media-body">
                  <h4 className="text-doorcase3">Developer</h4>
                  <p className="m-0">{buildingInsuranceDetails.developer}</p>
                </div>
              </div>
              <hr />
            </div>

            <div className="col-sm-6">
              <div className="media">
                <div className="media-body">
                  <h4 className="text-doorcase3">Type</h4>
                  <p className="m-0">{buildingInsuranceDetails.type}</p>
                </div>
              </div>
              <hr />
            </div>
            <div className="col-sm-6">
              <div className="media">
                <div className="media-body">
                  <h4 className="text-doorcase3">Tenure</h4>
                  <p className="m-0">{buildingInsuranceDetails.tenure}</p>
                </div>
              </div>
              <hr />
            </div>

            <div className="col-sm-6">
              <div className="media">
                <div className="media-body">
                  <h4 className="text-doorcase3">Completion date</h4>
                  <p className="m-0">{buildingInsuranceDetails.completiondate}</p>
                </div>
              </div>
              <hr />
            </div>
            <div className="col-sm-6">
              <div className="media">
                <div className="media-body">
                  <h4 className="text-doorcase3">Total Units</h4>
                  <p className="m-0">{buildingInsuranceDetails.totalUnits}</p>
                </div>
              </div>
              <hr />
            </div>

            <div className="col-sm-6">
              <div className="media">
                <div className="media-body">
                  <h4 className="text-doorcase3">Total levels</h4>
                  <p className="m-0">{buildingInsuranceDetails.totalLevels}</p>
                </div>
              </div>
              <hr />
            </div>
            <div className="col-sm-6">
              <div className="media">
                <div className="media-body">
                  <h4 className="text-doorcase3">Total Blocks</h4>
                  <p className="m-0">{buildingInsuranceDetails.totalBlocks}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
 