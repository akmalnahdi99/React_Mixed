import React from "react";
import { AppContext } from "../context/settings";
import { CompanyServicesIcons } from "../utils/landlordHelper";
import Empty from "./Empty";
import PayableItem from "./PayableItem";

export default function PayablesList() {
  var appContext = React.useContext(AppContext);
  var financials = (appContext.settings && appContext.settings.unitFinancials) || [];
  var curMonth = new Date().getMonth();

  var result = {};
  for (let month = 1; month <= curMonth; month++) {
    const curMonthFinancials = financials[month].landlord || [];

    for (const paymentName in curMonthFinancials) {
      if (curMonthFinancials[paymentName].paid !== true) {
        if (!result[paymentName]) {
          result[paymentName] = {date:curMonthFinancials[paymentName].paymentDue, paymentOf: paymentName, amount: 0, paid: false, icon: (CompanyServicesIcons[paymentName] && CompanyServicesIcons[paymentName].img) || "" };
        }
        result[paymentName].amount += curMonthFinancials[paymentName].amountRequired;
      }
    }
  }
  

  var overdue = [
    {
      id: 0,
      date: "20/02/2020",
      title: "Gas",
      icon: "/imgs/gas.svg",
      redirect: "/landlord/InvoiceGas",
    },
    {
      id: 1,
      date: "15/03/2020",
      title: "Internet",
      icon: "/imgs/wifi.svg",
      redirect: "/landlord/InvoiceInternet",
    },
    {
      id: 2,
      date: "17/02/2020",
      title: "CableTV",
      icon: "/imgs/tv.svg",
      redirect: "/landlord/InvoiceCabletv",
    },
  ];

  var due = [
    {
      id: 0,
      date: "13/09/2020",
      title: "Rent",
      amount: "RM XXXX",
      icon: "/imgs/subscription.svg",
      redirect: "/landlord/rentalpayables",
    },
    {
      id: 1,
      date: "13/09/2020",
      title: "Water",
      amount: "RM XXXX",
      icon: "/imgs/water-drop.svg",
      redirect: "/landlord/InvoiceWater",
    },
    {
      id: 2,
      date: "13/09/2020",
      title: "Electricity",
      amount: "RM XXXX",
      icon: "/imgs/electricity.svg",
      redirect: "/landlord/InvoiceElectricity",
    },
  ];
   return (
     <div>
       <h2 className="text-doorcase3">Tenant Payables</h2>
       <hr />
       <strong className="text-doorcase3">Payment Overdue </strong>

       {overdue.length > 0 ? (
         overdue.map((item) => {
           return <PayableItem key={item.id} {...item} color="red" />;
         })
       ) : (
         <Empty />
       )}
       <strong className="text-doorcase3">Payment Due</strong>
       {due.length > 0 ? (
         due.map((item) => {
           return <PayableItem key={item.id} {...item} color="blue" />;
         })
       ) : (
         <Empty />
       )}
     </div>
   );
  // return (
  //   <div className="ibox">
  //     <div className="ibox-title">
  //       <h3>Landlord Payables</h3>
  //     </div>
  //     <div className="ibox-content forum-container">
  //       <h4 className="text-doorcase3">Payment Overdue</h4>

  //       {Object.keys(result).length > 0 ? (
  //         Object.keys(result).map((item, index) => {
  //           return <PayableItem key={index} {...result[item]} color="red" />;
  //         })
  //       ) : (
  //         <Empty />
  //       )}
  //     </div>
  //     {/* Need to understand the payment cycle login (End of month, or start month) */}
  //     <div className="ibox-content forum-container">
  //       <h4 className="text-doorcase3">Payment Due</h4>
  //       {due.length > 0 ? (
  //         due.map((item) => {
  //           return <PayableItem key={item.id} {...item} color="blue" />;
  //         })
  //       ) : (
  //         <Empty />
  //       )}
  //     </div>
  //   </div>
  // );
}

 