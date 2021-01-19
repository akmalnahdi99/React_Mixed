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
  console.log("All Resuls: ", result);

  var due =[];
  //var a= [
  //   {
  //     id: 1,
  //     date: "13/09/2020",
  //     title: "Sinking Fund",
  //     amount: "RM XXXX",
  //     icon: "/imgs/money-bag.svg",
  //   },
  //   {
  //     id: 2,
  //     date: "13/09/2020",
  //     title: "Quit Rent",
  //     amount: "RM XXXX",
  //     icon: "/imgs/quitrent.svg",
  //   },
  // ];
 
  return (
    <div className="ibox">
      <div className="ibox-title">
        <h3>Landlord Payables</h3>
      </div>
      <div className="ibox-content forum-container">
        <h4 className="text-doorcase3">Payment Overdue</h4>

        {Object.keys(result).length > 0 ? (
          Object.keys(result).map((item, index) => {
            return <PayableItem key={index} {...result[item]} color="red" />;
          })
        ) : (
          <Empty />
        )}
      </div>
      {/* Need to understand the payment cycle login (End of month, or start month) */}
      <div className="ibox-content forum-container">
        <h4 className="text-doorcase3">Payment Due</h4>
        {due.length > 0 ? (
          due.map((item) => {
            return <PayableItem key={item.id} {...item} color="blue" />;
          })
        ) : (
          <Empty />
        )}
      </div>
    </div>
  );
}
