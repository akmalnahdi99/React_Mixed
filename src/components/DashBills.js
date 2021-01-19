import React from "react";
import DashIconsBox from "./DashIconsBox";

export default function DashBills({ title }) {
  const data = [
    {
      icon: "/imgs/subscription.svg",
      text: "Subscription Fees",
      url: "/landlord/bills/Subscription",
    },
    {
      icon: "/imgs/money-bag.svg",
      text: "Service Charge",
      url: "/landlord/bills/ServiceCharges",
    },
    {
      icon: "/imgs/assessment.svg",
      text: "Assessment Rate",
      url: "/landlord/bills/AssessmentRate",
    },
    {
      icon: "/imgs/insurance.svg",
      text: " Insurance",
      url: "/landlord/bills/Insurance",
    },
    {
      icon: "/imgs/quitrent.svg",
      text: " Quit Rent",
      url: "/landlord/bills/QuitRent",
    },
    {
      icon: "/imgs/settings.svg",
      text: "Maintenance",
      url: "/landlord/bills/Maintenance",
    },
    {
      icon: "/imgs/water-drop.svg",
      text: "Water",
      url: "/landlord/bills/Water",
    },
    {
      icon: "/imgs/electricity.svg",
      text: "Electricity",
      url: "/landlord/bills/Electricity",
    },
    {
      icon: "/imgs/more.svg",
      text: "More",
      url: "/landlord/bills",
    },
  ];
  return <DashIconsBox title={title} data={data} returnLink="/landlord/bills" />;
}
