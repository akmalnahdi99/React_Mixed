//TASK under Review
import React from "react";

import BuildingFacilitiesCard from "../propertyInfoComponent/BuildingFacilitiesCard";
import BuildingManagementCard from "../propertyInfoComponent/BuildingManagementCard";

export default function InfoBuilding() {
  return (
    <React.Fragment>
      <BuildingFacilitiesCard />
      <BuildingManagementCard title="Building Management" />
    </React.Fragment>
  );
}
