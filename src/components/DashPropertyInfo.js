//TASK under Review
import React from "react";
import DashIconsBox from "./DashIconsBox";

export default function DashPropertyInfo({ title }) {
  const data = [
    { icon: "/imgs/family.svg", text: "Tenancy", url: "/landlord/propertyinfo/Tenancy" },
    { icon: "/imgs/quitrent.svg", text: "Inspection", url: "/landlord/propertyinfo/Inspection" },
    { icon: "/imgs/utilities.svg", text: "Utilities", url: "/landlord/propertyinfo/Utilities" },
    { icon: "/imgs/guide.svg", text: "User Manual", url: "/landlord/propertyinfo/UserManual" },
    { icon: "/imgs/tenant.svg", text: "Unit", url: "/landlord/propertyinfo/Unit" },
    { icon: "/imgs/company.svg", text: "Building", url: "/landlord/propertyinfo/Building" },
    { icon: "/imgs/insurance.svg", text: "Insurance", url: "/landlord/propertyinfo/Insurance" },
  ];


  return <DashIconsBox title={title} data={data} returnLink="/landlord/propertyinfo" />;
}
