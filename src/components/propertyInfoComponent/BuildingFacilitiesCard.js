//TASK under Review
import React from "react";
import { AppContext } from "../../context/settings";
import Loading from "../static/Loading";
import { apiCall } from "../../utils/landlordHelper";


export default function BuildingFacilitiesCard() {
 

  const [isLoading, setIsLoading] = React.useState(true);
  const [buildingFacilities, setBuildingFacilities] = React.useState(true);

  const appContext = React.useContext(AppContext);
  const activeUnitId = appContext.settings.activeUnitId;

  const allUnits = appContext.settings.userInfo.units || [];
  var buildingId = allUnits.filter((u) => u.id === activeUnitId)[0].buildingId || null;

  function inBuildingFacilities(facility) {
    if (buildingFacilities === null) return " facility-faint";

    return buildingFacilities.indexOf(facility) >= 0 ? " facility-dark" : " facility-faint";
  }

  React.useEffect(() => {

    async function loadBuildingInfoWrapper() {
      setIsLoading(true);
      var response = await apiCall("/buildings/facilities/" + buildingId);
      if (response.status) {
        setBuildingFacilities(response.data);
     
      }
      setIsLoading(false);
    }
    loadBuildingInfoWrapper();
    // eslint-disable-next-line
  }, [activeUnitId]);

  return (
    <div className="ibox col-12">
      <div className="ibox-title">
        <h3><img src="/imgs/company.svg" alt="..." className="utilityIconTitle" />Faciities &amp; Amenities</h3>
      </div>

      <div className="ibox-content">
        {isLoading === true ? (
          <Loading />
        ) : (
            <div className="row mb-5">
              <div className="col-md-4 p-0 col-12">
                <ul className="folder-list">
                  <li className={"py-3" + inBuildingFacilities("24hoursSecurity")}>
                    <img src="/imgs/sc.svg" width="24px" alt="name" /> 24 hours security
                </li>

                  <li className={"py-3" + inBuildingFacilities("BbqArea")}>
                    <img src="/imgs/bbq.svg" width="24px" alt="name" /> Barbeque area
                </li>

                  <li className={"py-3" + inBuildingFacilities("ChangingRoom")}>
                    <img src="/imgs/changing-room.svg" width="24px" alt="name" /> Changing room
                </li>

                  <li className={"py-3" + inBuildingFacilities("ChildrenPlayground")}>
                    <img src="/imgs/playground.svg" width="24px" alt="name" /> Children's playground
                </li>

                  <li className={"py-3" + inBuildingFacilities("CoveredCarPark")}>
                    <img src="/imgs/garage.svg" width="24px" alt="name" /> Covered car park
                </li>

                  <li className={"py-3" + inBuildingFacilities("FunctionHall")}>
                    <img src="/imgs/hall.svg" width="24px" alt="name" /> Function hall
                </li>
                </ul>
              </div>
              <div className="col-md-4 p-0 col-12">
                <ul className="folder-list">
                  <li className={"py-3" + inBuildingFacilities("PerimeterFencing")}>
                    <img src="/imgs/boundaries.svg" width="24px" alt="name" /> Perimeter fencing
                </li>

                  <li className={"py-3" + inBuildingFacilities("GamesRoom")}>
                    <img src="/imgs/gamepad.svg" width="24px" alt="name" /> Games room
                </li>

                  <li className={"py-3" + inBuildingFacilities("Gymnasium")}>
                    <img src="/imgs/gym.svg" width="24px" alt="name" /> Gymnasium
                </li>

                  <li className={"py-3" + inBuildingFacilities("InfinityPool")}>
                    <img src="/imgs/swim.svg" width="24px" alt="name" /> Infinity pool
                </li>

                  <li className={"py-3" + inBuildingFacilities("LandscapedGarden")}>
                    <img src="/imgs/tree.svg" width="24px" alt="name" /> Landscaped garden
                </li>

                  <li className={"py-3" + inBuildingFacilities("WadingPool")}>
                    <img src="/imgs/wad-pool.svg" width="24px" alt="name" /> Wading pool
                </li>
                </ul>
              </div>
              <div className="col-md-4 p-0 col-12">
                <ul className="folder-list">
                  <li className={"py-3" + inBuildingFacilities("LapPool")}>
                    <img src="/imgs/lap-pool.svg" width="24px" alt="name" /> Lap pool
                </li>

                  <li className={"py-3" + inBuildingFacilities("LoungeArea")}>
                    <img src="/imgs/lounge.svg" width="24px" alt="name" /> Lounge area
                </li>

                  <li className={"py-3" + inBuildingFacilities("QigongYogaArea")}>
                    <img src="/imgs/yoga.svg" width="24px" alt="name" /> Qigong / Yoga area
                </li>

                  <li className={"py-3" + inBuildingFacilities("ReflexologyPath")}>
                    <img src="/imgs/reflex.svg" width="24px" alt="name" /> Reflexology path
                </li>

                  <li className={"py-3" + inBuildingFacilities("SaunaAndSteam")}>
                    <img src="/imgs/hot.svg" width="24px" alt="name" /> Sauna and steam
                </li>
                </ul>
              </div>
            </div>
          )}
      </div>
    </div>
  );
}
