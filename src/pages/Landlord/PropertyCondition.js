import React from "react";
import { Link } from "react-router-dom";
import Loading from "../../components/static/Loading";
import UnitConditionAreasCard from "../../components/UnitConditionAreasCard";
import { AppContext } from "../../context/settings";
import { apiCall, getMainAreasFromConditionReports } from "../../utils/landlordHelper";

export default function PropertyCondition() {
  const [isLoading, setIsLoading] = React.useState(true);
  const [areaNames, set_areaNames] = React.useState(null);

  var appContext = React.useContext(AppContext);
  const activeUnitId = appContext.settings.activeUnitId;
  var storedConditionReports = appContext.settings.conditionReports || null;

  React.useEffect(() => {
  
    if (!storedConditionReports) {
  
      async function loadConditionReportsWrapper() {
        setIsLoading(true);
        var response = await apiCall("/units/getConditionReports?unitId=" + activeUnitId);

        if (response.status) {
          set_areaNames(getMainAreasFromConditionReports(response.data));
        }

        appContext.updateAppContext({ conditionReports: response.data });
        setIsLoading(false);
      }
      loadConditionReportsWrapper();
      // eslint-disable-next-line
    } else {
   
      set_areaNames(getMainAreasFromConditionReports(storedConditionReports));
      setIsLoading(false);
    }

    // eslint-disable-next-line
  }, [activeUnitId]);

  return (
    <div className="container container-xs">
      <div className="row text-center">
        <div className="col-12 p-2 pt-3">
          <div className="ibox white-bg">
            <div className="ibox-content minhigh">
              <Link to="" className="btn-block text-truncate pt-3">
                <img src="/imgs/immersive.svg" width="24px" alt="" />
                <br />
                Virtual Tour
              </Link>
            </div>
          </div>
        </div>
      </div>
      {isLoading === true ? <Loading /> : <UnitConditionAreasCard areas={areaNames} />}
    </div>
  );
}
