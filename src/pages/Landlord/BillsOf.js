//under review
import React from "react";
import { Redirect, useParams } from "react-router-dom";

//TASK put all bills in this page

import BillsUnpaid from "../../bills_component/BillsUnpaid";

import InfoWaterDetails from "../../components/propertyInfoComponent/InfoWaterDetails";
import InfoElectricityDetails from "../../components/propertyInfoComponent//InfoElectricityDetails";
import InfoSewageDetails from "../../components/propertyInfoComponent/InfoSewageDetails";
import InfoInternetDetails from "../../components/propertyInfoComponent/InfoInternetDetails";
import InfoCableTvDetails from "../../components/propertyInfoComponent/InfoCableTvDetails";
import InfoGasDetails from "../../components/propertyInfoComponent/InfoGasDetails";
import Loading from "../../components/static/Loading";
import { AppContext } from "../../context/settings";
import { apiCall } from "../../utils/landlordHelper";
import RentalPayables from "./../../bills_component/RentalPayables";

export default function BillOf() {
  var t = useParams();
  var billType = t.billType;
  const appContext = React.useContext(AppContext);
  const activeUnitId = appContext.settings.activeUnitId;
  const [isLoading, setIsLoading] = React.useState(true);
  const [utilityDetails, setUtilityDetails] = React.useState(true);
  const [setPayments] = React.useState([]);

  React.useEffect(() => {
    async function loadUtilityDetailsWrapper() {
      setIsLoading(true);
      var response = await apiCall("/units/utilityInfo/unitId=" + activeUnitId + "&companyFor=" + billType);
      if (response.status) {
        setUtilityDetails(response.data);
      }
      setIsLoading(false);
    }

    var withInvoices = ["ServiceCharges", "Insurance", "QuitRent", "AssessmentRate", "Subscription", "Maintenance"];

    if (withInvoices.indexOf(billType) >= 0) {
      var financials = appContext.settings && appContext.settings.unitFinancials;
      var currMonth = new Date().getMonth() + 1;
      var result = [];

      for (let month = currMonth; month >= 1; month--) {
        const element = financials[month].landlord[billType];
        if (element.paid !== null) {
          result[month] = element;
        }
      }
      setPayments(result);
    }

    loadUtilityDetailsWrapper();
    // eslint-disable-next-line
  }, [activeUnitId]);

  if (!billType) {
    // if you don't have bill type we redirect back /land/bills/water
    return <Redirect to="/landlord/bills" />;
  }

  const data = [
    {
      key: "ServiceCharges",
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
    { key: "Cabletv", text: "Cabletv", icon: "/imgs/tv.svg", url: "" },
    { key: "Gas", text: "Gas", icon: "/imgs/gas.svg", url: "" },
    { key: "Rental", text: "Rental", icon: "/imgs/gas.svg", url: "" },
  ];

  var allowed = false;
  for (var i = 0; i < data.length; i++) {
    if (data[i].key.toUpperCase() === billType.toUpperCase()) {
      allowed = true;
      break;
    }
  }
  debugger;
  if (!allowed) {
    // if billtype is not exist we go back
    return <Redirect to="/landlord/bills" />;
  }

  var bills = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"].map((x, index) => (
    <React.Fragment key={index}>
      {billType === "Water" ? <BillsUnpaid title={x} {...BillsUnpaid} /> : ""}
      {billType === "Electricity" ? <BillsUnpaid title={x} {...BillsUnpaid} /> : ""}
      {billType === "Sewage" ? <BillsUnpaid title={x} {...BillsUnpaid} /> : ""}
      {billType === "Internet" ? <BillsUnpaid title={x} {...BillsUnpaid} /> : ""}
      {billType === "Cabletv" ? <BillsUnpaid title={x} {...BillsUnpaid} /> : ""}
      {billType === "Gas" ? <BillsUnpaid title={x} {...BillsUnpaid} /> : ""}
    </React.Fragment>
  ));

  return isLoading === true ? (
    <Loading />
  ) : (
    <React.Fragment>
      <div className="wrapper wrapper-content animated fadeInRight">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-lg-8 mb-3 px-0">
              {billType === "Rental" ? (
                <RentalPayables siteMap={"Rental Payables"} />
              ) : (
                <React.Fragment>
                  {billType === "Water" ? <InfoWaterDetails expand={false} title="Water Rate" {...utilityDetails} /> : ""}
                  {billType === "Electricity" ? <InfoElectricityDetails expand={false} title="Electricity Rate" {...utilityDetails} /> : ""}
                  {billType === "Sewage" ? <InfoSewageDetails expand={false} title="Sewage" {...utilityDetails} /> : ""}
                  {billType === "Internet" ? <InfoInternetDetails expand={false} title="Internet" {...utilityDetails} /> : ""}
                  {billType === "Cabletv" ? <InfoCableTvDetails expand={false} title="Cable TV" {...utilityDetails} /> : ""}
                  {billType === "Gas" ? <InfoGasDetails expand={false} title="Gas Rate" {...utilityDetails} /> : ""}
                  {bills}
                </React.Fragment>
              )}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
