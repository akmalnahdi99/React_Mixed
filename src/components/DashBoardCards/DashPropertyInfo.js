//TASK under Review
import React from "react";
import DashIconsBox from "./DashIconsBox";

export default function DashPropertyInfo({ title }) {
  const data = [
    { icon: "/imgs/family.svg", text: "Tenancy", url: "/landlord/unitInfo/Tenancy" },
    { icon: "/imgs/quitrent.svg", text: "Inspection", url: "/landlord/unitInfo/Inspection" },
    { icon: "/imgs/utilities.svg", text: "Utilities", url: "/landlord/unitInfo/Utilities" },
    { icon: "/imgs/guide.svg", text: "User Manual", url: "/landlord/unitInfo/HomeAppliances" },
    { icon: "/imgs/tenant.svg", text: "Unit", url: "/landlord/unitInfo/Unit" },
    { icon: "/imgs/company.svg", text: "Building", url: "/landlord/unitInfo/Building" },
    { icon: "/imgs/insurance.svg", text: "Insurance", url: "/landlord/unitInfo/Insurance" },
  ];


  return <DashIconsBox title={title} data={data} returnLink="/landlord/unitInfo" />;
}
