import React from "react";
import { AppContext } from "../context/settings";
import { CompanyServicesIcons, DateDiff, overDueDaysThreshold } from "../utils/landlordHelper";
import Empty from "./Empty";
import PayableItem from "./PayableItem";

export default function PayablesList() {
  var appContext = React.useContext(AppContext);
  var financials = (appContext.settings && appContext.settings.unitFinancials) || [];
  var curMonth = new Date().getMonth() + 1;
  var curDate = new Date();

  var overDuePayments = [];
  var duePayments = [];

  for (let month = 1; month <= curMonth; month++) {
    const curMonthFinancials = financials[month].tenant || [];

    for (const paymentName in curMonthFinancials) {
      if (curMonthFinancials[paymentName].paid !== true) {
        debugger;
        const paymentDue = new Date(curMonthFinancials[paymentName].paymentDueMillis);
        const paymentOverDueDays = DateDiff.inDays(paymentDue, curDate);

        var paymentData = {
          date: curMonthFinancials[paymentName].paymentDue + ` (${paymentOverDueDays}) days`,
          paymentDue: paymentDue,
          paymentOf: paymentName,
          amount: 0,
          paid: false,
          icon: (CompanyServicesIcons[paymentName] && CompanyServicesIcons[paymentName].img) || "",
          overDueDays: paymentOverDueDays,
        };

        if (paymentOverDueDays >= 0 && paymentOverDueDays <= overDueDaysThreshold) {
          duePayments.push(paymentData);
        } else if (paymentOverDueDays > overDueDaysThreshold) {
          overDuePayments.push(paymentData);
        }
      }
    }
  }

  return (
    <div>
      <h2 className="text-doorcase3">Tenant Payables</h2>
      <hr />
      <strong className="text-doorcase3">Payment Overdue </strong>

      {overDuePayments.length > 0 ? (
        overDuePayments.map((item, index) => {
          var link = "";
          if (item.paymentOf.toLowerCase() === "rental".toLocaleLowerCase()) {
            link = "/landlord/bills/" + item.paymentOf;
          } else {
            link = "/landlord/bills/" + item.paymentOf;
          }

          return <PayableItem key={index} {...item} title={item.paymentOf} address={link} color="red" />;
        })
      ) : (
        <Empty />
      )}
      <strong className="text-doorcase3">Payment Due</strong>
      {duePayments.length > 0 ? (
        duePayments.map((item, index) => {
          var link = "";
         if (item.paymentOf.toLowerCase() === "rental".toLocaleLowerCase()) {
           link = "/landlord/bills/" + item.paymentOf;
         } else {
           link = "/landlord/bills/" + item.paymentOf;
         }
          return <PayableItem key={index} {...item} title={item.paymentOf} address={link} color="blue" />;
        })
      ) : (
        <Empty />
      )}
    </div>
  );
}
