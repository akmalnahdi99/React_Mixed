import React from "react";

import { Redirect, useParams } from "react-router-dom";
import { AppContext } from "../../context/settings";
import { getConditionReportsOflocation } from "../../utils/landlordHelper";
import InventoryFilter from "../../components/InventoryAreaFilter";
import Empty from "../../components/Empty";
import ConditionReportItemCard from "../../components/ConditionReportItemCard";

export default function EntranceCondition() {
  var t = useParams();
  var location = t.location;
  var appContext = React.useContext(AppContext);
  var conditionReports = appContext.settings.conditionReports || null;
  //const activeUnitId = appContext.settings.activeUnitId;
  const [inventoryOf, set_inventoryOf] = React.useState("CheckIn");
  const [items, set_items] = React.useState([]); // condition report items

  React.useEffect(() => {
    console.log("redraw");
    var it = getConditionReportsOflocation(conditionReports, inventoryOf, location);
    set_items(it);

    // eslint-disable-next-line
  }, [inventoryOf]);

  if (!location) {
    return <Redirect to="/landlord/propertyCondition" />;
  }

  function updateFilter(newInventoryOf) {
    set_inventoryOf(newInventoryOf);
  }

  return (
    <div className="wrapper wrapper-content animated fadeInRight py-5 pb-5">
      <div className="row p-0 justify-content-center pb-0">
        <div className="col-lg-5 px-3 ">
          <InventoryFilter updateFilter={updateFilter} selectedFilter={inventoryOf} />
        </div>
      </div>
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-lg-8 mb-3 px-0">
            {items && items.length > 0 ? (
              items.map((item, index) => {
                return <ConditionReportItemCard key={index} data={item} />;
              })
            ) : (
              <Empty />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
