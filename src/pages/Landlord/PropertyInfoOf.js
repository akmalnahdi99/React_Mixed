//TASK under Review
import React from "react";
import { Redirect, useParams } from "react-router-dom";

//TASK put all bills in this page



import TenancyHome from "./TenancyHome";
import Utilities from "./Utilities";
 
import UnitDetailsCard from "../../components/propertyInfoComponent/UnitDetailsCard";
import InfoBuilding from "../../components/propertyInfoComponent/InfoBuilding";
import HomeAppliances from "../../components/propertyInfoComponent/HomeAppliances";

import BuildingInsuranceDetails from "../../components/propertyInfoComponent/BuildingInsuranceDetails";
import InfoInspection from "../../components/propertyInfoComponent/InfoInspectionDetails";

export default function PropertyInfoOf() {
  var t = useParams();
  var propertyinfoType = t.propertyinfoType;

  if (!propertyinfoType) {
    // if you don't have bill type we redirect back
    return <Redirect to="/landlord/UnitInfo" />;
  }
  const data = [
    {
      key: "Tenancy",
      text: "",
      icon: "/imgs/family.svg",
      url: "",
    },
    { key: "Utilities", text: "Utilities", icon: "/imgs/utilities.svg", url: "" },
    { key: "Insurance", text: "Insurance", icon: "/imgs/insurance.svg", url: "" },
    { key: "Building", text: "Building", icon: "/imgs/company.svg", url: "" },
    { key: "Unit", text: "Unit", icon: "/imgs/tenant.svg", url: "" },
    { key: "ServiceCharge", text: "Service Charge", icon: "/imgs/money-bag.svg", url: "" },
    { key: "RateTaxes", text: "Rate & Taxes", icon: "/imgs/pie-chart.svg", url: "" },
    { key: "AssessmentRate", text: "Assessment Rate", icon: "/imgs/assessment.svg", url: "" },
    { key: "QuitRent", text: "Quit Rent", icon: "/imgs/quitrent.svg", url: "" },
    { key: "HomeAppliances", text: "Home Appliances", icon: "/imgs/guide.svg", url: "" },
    { key: "Inspection", text: "Inspection", icon: "/imgs/quitrent.svg", url: "" },
  ];

  var allowed = false;
  for (var i = 0; i < data.length; i++) {
    if (data[i].key.toUpperCase() === propertyinfoType.toUpperCase()) {
      allowed = true;
      break;
    }
  }

  if (!allowed) {
    // if billtype is not exist we go back
    return <Redirect to="/landlord/UnitInfo" />;
  }

  return (
    <div className="wrapper wrapper-content animated fadeInRight py-5 pb-5">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-lg-8 mb-3 px-0">
            {propertyinfoType === "Tenancy" ? <TenancyHome /> : ""}
            {propertyinfoType === "Utilities" ? <Utilities /> : ""}
            {propertyinfoType === "Insurance" ? <BuildingInsuranceDetails title="Insurance" /> : ""}
   
            {propertyinfoType === "Unit" ? <UnitDetailsCard /> : ""}
            {propertyinfoType === "Building" ? <InfoBuilding /> : ""}
            {propertyinfoType === "HomeAppliances" ? <HomeAppliances /> : ""}
            {propertyinfoType === "Inspection" ? <InfoInspection title="Inspection" /> : ""}
          </div>
        </div>
      </div>
    </div>
  );
}
