import React from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../context/settings";

export default function InlineUnitInfoCard() {
  
  const {
    settings: {
      userInfo: { units },
    },
  } = React.useContext(AppContext);

  const appContext = React.useContext(AppContext);
  const activeUnitId = appContext.settings.activeUnitId;

  const [unit, setUnit] = React.useState(null);

  React.useEffect(() => {
   
    
    var filtered = units.filter((u) => u.id === activeUnitId);

    if (filtered.length === 1) {
      setUnit(filtered[0]);
    }
    // eslint-disable-next-line
  }, [activeUnitId]);

  if (unit === null) return <></>;
  return (
    <Link className="media align-items-center" style={{ cursor: "pointer" }} to="/landlord/unitInfo/Unit">
      <img src={unit.urlThumb} className="rounded-circle boxshadow align-self-center mr-3" style={{ width: "70px", height: "70px" }} alt="" />
      <div className="media-body ">
        <h3 className="mt-0 mb-0 text-doorcase">{unit.name || "N/A"} </h3>
        <p className="m-0 text-doorcase">{unit.buildingName || "N/A"}</p>
      </div>
    </Link>
  );
}
