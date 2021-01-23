import React from "react";
import { Link, Redirect, useParams } from "react-router-dom";
import Loading from "../../components/static/Loading";
import { AppContext } from "../../context/settings";
import { apiCall } from "../../utils/landlordHelper";
export default function UnitKits() {
  var t = useParams();
  var inventoryOf = t.inventoryOf;
  const [isLoading, setIsLoading] = React.useState(true);
 
  // const [kitsCats, set_kitsCats] = React.useState(null);

  var appContext = React.useContext(AppContext);
  const activeUnitId = appContext.settings.activeUnitId;
  var storedKitsItems = appContext.settings.kitsData || null;

  React.useEffect(() => {
    if (!storedKitsItems) {
 
      async function loadInventoryDataWrapper() {
        setIsLoading(true);

        var response = await apiCall("/units/getKits?unitId=" + activeUnitId);

        if (response.status) {
        
          // set_kitsCats(getUnitMainKitsCats(response.data, inventoryOf));
        }

        appContext.updateAppContext({ kitsData: response.data });
        setIsLoading(false);
      }
      loadInventoryDataWrapper();
      // eslint-disable-next-line
    } else {
 
   
      // set_kitsCats(getUnitMainKitsCats(storedKitsItems));
      setIsLoading(false);
    }

    // eslint-disable-next-line
  }, [activeUnitId]);
  if (["CheckIn", "CheckOut"].indexOf(inventoryOf) === -1) {
    return <Redirect to="/landlord/UnitCheckInOut" />;
  }

  return (
    <div className="wrapper wrapper-content animated fadeInRight ">
      <div className="container">
        <div className="row text-center">
          {isLoading === true ? (
            <Loading />
          ) : (
            <div className="col-12 align-self-center mt-4">
              <Link to="/landlord/checkinleaflet" className="btn btn-dashboardicon  btn-default width180 btn-lg m-2">
                <img src="/imgs/write-letter.svg" width="30px" alt="" />
                <br />
                <span>Information leaflet</span>
              </Link>
              <Link to={"/landlord/unitKits/Details/" + inventoryOf + "/Key"} className="btn btn-dashboardicon  btn-default width160 btn-lg m-2">
                <img src="/imgs/key.svg" width="30px" alt="" />
                <br />
                <span>Keys</span>
              </Link>
              <Link to={"/landlord/unitKits/Details/" + inventoryOf + "/AccessCard"} className="btn btn-dashboardicon  btn-default width160 btn-lg m-2">
                <img src="/imgs/access.svg" width="30px" alt="" />
                <br />
                <span>Access Cards</span>
              </Link>
              <Link to={"/landlord/unitKits/Details/" + inventoryOf + "/RemoteControl"} className="btn btn-dashboardicon  btn-default width160 btn-lg m-2">
                <img src="/imgs/remote-control.svg" width="30px" alt="" />
                <br />
                <span>Remote Controls</span>
              </Link>
              <Link to={"/landlord/unitKits/Details/" + inventoryOf + "/VehicleSticker"} className="btn btn-dashboardicon  btn-default width160 btn-lg m-2">
                <img src="/imgs/car.svg" width="30px" alt="" />
                <br />
                <span>Vehicle Stickers</span>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
