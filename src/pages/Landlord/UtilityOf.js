import React from "react";
import { Redirect, useParams } from "react-router-dom";

//TASK put all bills in this page

import { AppContext } from "../../context/settings";
import Loading from "../../components/static/Loading";
import { apiCall } from "../../utils/landlordHelper";
import InfoWaterDetails from "../../components/propertyInfoComponent//InfoWaterDetails";
import InfoSewageDetails from "../../components/propertyInfoComponent//InfoSewageDetails";
import InfoElectricityDetails from "../../components/propertyInfoComponent//InfoElectricityDetails";
import InfoGasDetails from "../../components/propertyInfoComponent//InfoGasDetails";
import InfoCableTvDetails from "../../components/propertyInfoComponent//InfoCableTvDetails";
import InfoInternetDetails from "../../components/propertyInfoComponent//InfoInternetDetails";

export default function UtilitiesOf() {
  const [isLoading, setIsLoading] = React.useState(true);
  const [utilityDetails, setUtilityDetails] = React.useState(true);
  const appContext = React.useContext(AppContext);
  const activeUnitId = appContext.settings.activeUnitId;
  var t = useParams();
  var utilityType = t.utilityType;

  React.useEffect(() => {
    async function loadUtilityDetailsWrapper() {
      setIsLoading(true);
      var response = await apiCall("/units/utilityInfo/unitId=" + activeUnitId + "&companyFor=" + utilityType);
      if (response.status) {
        setUtilityDetails(response.data);
      }
      setIsLoading(false);
    }
    loadUtilityDetailsWrapper();
    // eslint-disable-next-line
  }, [activeUnitId]);

  if (!utilityType) {
    // if you don't have bill type we redirect back /land/bills/water
    return <Redirect to="/landlord/propertyinfo" />;
  }

  const data = [
    { key: "Water", text: "Water", icon: "/imgs/water-drop.svg", url: "" },
    { key: "Electricity", text: "Electricity", icon: "/imgs/electricity.svg", url: "" },
    { key: "Sewage", text: "Sewage", icon: "/imgs/sewage.svg", url: "" },
    { key: "Internet", text: "Internet", icon: "/imgs/wifi.svg", url: "" },
    { key: "Cabletv", text: "Cabletv", icon: "/imgs/tv.svg", url: "" },
    { key: "Gas", text: "Gas", icon: "/imgs/gas.svg", url: "" },
  ];

  var allowed = false;
  for (var i = 0; i < data.length; i++) {
    if (data[i].key.toUpperCase() === utilityType.toUpperCase()) {
      allowed = true;
      break;
    }
  }
  
  var selectedIcon = data.filter((x) => x.key === utilityType)[0].icon || "";
  if (!allowed) {
    // if billtype is not exist we go back
    return <Redirect to="/landlord/propertyinfo" />;
  }
 
  return isLoading === true ? (
    <Loading />
  ) : (
    <div className="wrapper wrapper-content animated fadeInRight py-5 pb-5">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-lg-8 mb-3 px-0">
            {utilityType === "Water" ? <InfoWaterDetails expand={true} icon={selectedIcon} title="Water Rate" {...utilityDetails} /> : ""}
            {utilityType === "Electricity" ? <InfoElectricityDetails expand={true} icon={selectedIcon} title="Electricity Rate" {...utilityDetails} /> : ""}
            {utilityType === "Sewage" ? <InfoSewageDetails expand={true} icon={selectedIcon} title="Sewage" {...utilityDetails} /> : ""}
            {utilityType === "Internet" ? <InfoInternetDetails expand={true} icon={selectedIcon} title="Internet" {...utilityDetails} /> : ""}
            {utilityType === "Cabletv" ? <InfoCableTvDetails expand={true} icon={selectedIcon} title="Cable TV" {...utilityDetails} /> : ""}
            {utilityType === "Gas" ? <InfoGasDetails expand={true} icon={selectedIcon} title="Gas Rate" {...utilityDetails} /> : ""}
          </div>
        </div>
      </div>
    </div>
  );
}
