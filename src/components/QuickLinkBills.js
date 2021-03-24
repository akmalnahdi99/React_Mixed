//under review
import React from "react";
import { Redirect, useParams } from "react-router-dom";

//TASK put all bills in this page
import Footer from "./static/Footer";
import Header from "./Header";
import SiteMap from "./SiteMap";
import BillsServiceCharge from "../bills_component/BillsServiceCharge";
import BillsInsurance from "../bills_component/BillsInsurance";
import BillsQuitRent from "../bills_component/BillsQuitRent";
import BillsAssessmentRate from "../bills_component/BillsAssessmentRate";
import BillsSubscriptionFee from "../bills_component/BillsSubscriptionFee";
import BillsMaintenance from "../bills_component/BillsMaintenance";
import BillsWater from "../bills_component/BillsWater";
import BillsElectricity from "../bills_component/BillsElectricity";
import BillsSewage from "../bills_component/BillsSewage";
import BillsInternet from "../bills_component/BillsInternet";
import BillsCableTV from "../bills_component/BillsCableTV";
import BillsGas from "../bills_component/BillsGas";

export default function BillOf() {
  var t = useParams();
  var billType = t.billType;

  const data = [
    {
      key: "ServiceCharge",
      text: "Service Charge",
      icon: "/imgs/money-bag.svg",
      url: "",
    },
    { key: "Insurance", text: "Insurance", icon: "/imgs/insurance.svg", url: "" },
    { key: "QuitRent", text: "Quit Rent", icon: "/imgs/quitrent.svg", url: "" },
    { key: "AssessmentRate", text: "Assessment Rate", icon: "/imgs/assessment.svg", url: "" },
    { key: "Subscription", text: "Subscription Fees", icon: "/imgs/subscription.svg", url: "" },
    { key: "Maintenance", text: "Maintenance", icon: "/imgs/settings.svg", url: "" },
    { key: "Water", text: "Water", icon: "/imgs/water-drop.svg", url: "" },
    { key: "Electricity", text: "Electricity", icon: "/imgs/electricity.svg", url: "" },
    { key: "Sewage", text: "Sewage", icon: "/imgs/sewage.svg", url: "" },
    { key: "Internet", text: "Internet", icon: "/imgs/wifi.svg", url: "" },
    { key: "CableTV", text: "CableTV", icon: "/imgs/tv.svg", url: "" },
    { key: "Gas", text: "Gas", icon: "/imgs/gas.svg", url: "" },
  ];

  var allowed = false;

  return (
    <>
      {billType === "ServiceCharge" ? <BillsServiceCharge /> : ""}
      {billType === "Insurance" ? <BillsInsurance /> : ""}
      {billType === "QuitRent" ? <BillsQuitRent /> : ""}
      {billType === "AssessmentRate" ? <BillsAssessmentRate /> : ""}
      {billType === "Subscription" ? <BillsSubscriptionFee /> : ""}
      {billType === "Maintenance" ? <BillsMaintenance /> : ""}
      {billType === "Water" ? <BillsWater /> : ""}
      {billType === "Electricity" ? <BillsElectricity /> : ""}
      {billType === "Sewage" ? <BillsSewage /> : ""}
      {billType === "Internet" ? <BillsInternet /> : ""}
      {billType === "CableTV" ? <BillsCableTV /> : ""}
      {billType === "Gas" ? <BillsGas /> : ""}
 
    </>
  );
}
