import React from "react";
import * as FaIcons from "react-icons/fa";
import { Link } from "react-router-dom";
import { AppContext } from "./../../context/settings";
import { apiCall, getUnitMainCategories } from "../../utils/landlordHelper";
import InventoryRoomsCard from "./../../components/InventoryRoomsCard";
import Loading from "../../components/static/Loading";

export default function UnitInventories() {
  const [isLoading, setIsLoading] = React.useState(true);
  const [inventoryData, set_inventoryData] = React.useState(null);
  // const [metersData, set_metersData] = React.useState(null);
  const [unitRoomsCategories, set_unitRoomsCategories] = React.useState(null);

  var appContext = React.useContext(AppContext);
  const activeUnitId = appContext.settings.activeUnitId;
  var storedInventoryItems = appContext.settings.inventoryData || null;

  React.useEffect(() => {
    if (!storedInventoryItems) {
      console.log("Inventory items not exists so load them");
      async function loadInventoryDataWrapper() {
        setIsLoading(true);

        var response = await apiCall("/units/getInventoryList?unitId=" + activeUnitId);
        var responseMeters = await apiCall("/units/getMeters?unitId=" + activeUnitId);

        if (response.status) {
          set_inventoryData(response.data);
          set_unitRoomsCategories(getUnitMainCategories(response.data));
        }

        appContext.updateAppContext({ inventoryData: response.data, metersData: responseMeters.data });
        setIsLoading(false);
      }
      loadInventoryDataWrapper();
      // eslint-disable-next-line
    } else {
      console.log("Inventory items found");
      set_inventoryData(storedInventoryItems);
      set_unitRoomsCategories(getUnitMainCategories(storedInventoryItems));
      setIsLoading(false);
    }

    // eslint-disable-next-line
  }, [activeUnitId]);

  var meterReadings = [
    {
      id: "Electricity",
      name: "Electricity",
      image: "/imgs/electricity.svg",
    },
    {
      id: "Water",
      name: "Water",
      image: "/imgs/water-drop.svg",
    },
    {
      id: "Gas",
      name: "Gas",
      image: "/imgs/gas.svg",
    },
  ];

  if (isLoading) return <Loading />;

  return (
    <div className="container container-xs">
      <div className="row text-center">
        <div className="col-12 p-2 pt-3">
          <div className="ibox white-bg">
            <div className="ibox-content minhigh">
              <Link to="/" className="btn-block text-truncate pt-3">
                <img src="/imgs/immersive.svg" width="24px" alt="name" />
                <br />
                Virtual Tour
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="row pb-5">
        {unitRoomsCategories.length>0 && unitRoomsCategories.map((item, index) => {
          return (
            <div key={index} className="col-lg-4 px-2">
              <div className="ibox">
                <div className="ibox-title">
                  <h3>{item}</h3>
                </div>
                <InventoryRoomsCard category={item} inventoryData={inventoryData} />
              </div>
            </div>
          );
        })}

        <div className="col-lg-4 px-2">
          <div className="ibox">
            <div className="ibox-title">
              <h3>Meter Readings</h3>
            </div>
            <div className="ibox-content minhigh350px">
              <ul className="folder-list">
                {meterReadings.map((item, index) => {
                  return (
                    <li key={index}>
                      <Link to={"/landlord/unitMeters/" + item.id}>
                        <img src={item.image} className="align-self-center mr-2" width="25px" alt="..." />
                        {item.name}
                        <FaIcons.FaArrowRight className="float-right fa-xs" />
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
