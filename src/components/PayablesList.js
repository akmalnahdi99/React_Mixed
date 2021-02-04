import React from "react";
import { AppContext } from "../context/settings";
import {   getTenantPayablesDetails } from "../utils/landlordHelper";
import Empty from "./Empty";
import PayableItem from "./PayableItem";

export default function PayablesList() {
  var appContext = React.useContext(AppContext);
  var financials = (appContext.settings && appContext.settings.unitFinancials) || [];
  //var paymentsKeys = Object.keys(financials);
 
 const {duePayments,overDuePayments} = getTenantPayablesDetails(financials);
 
  return (
    <div>
      <h2 className="text-doorcase3">Tenant Payables</h2>
      <hr />
      <strong className="text-doorcase3">Payment Overdue </strong>

      {Object.keys(overDuePayments).length > 0 ? (
        Object.keys(overDuePayments).map((paymentName, index) => {
          return overDuePayments[paymentName].map((paymentData, index) => {
            var link = "";
            if (paymentName.toLowerCase() === "rental".toLocaleLowerCase()) {
              //TFIXME Clean up this, and the duplicate below make the code symetric
              link = "/landlord/bills/" + paymentName;
            } else {
              link = "/landlord/bills/" + paymentName;
            }

            return <PayableItem key={index} {...paymentData} date={paymentData.paymentDue} title={paymentName} address={link} color="red" />;
          });
        })
      ) : (
        <Empty />
      )}
      <strong className="text-doorcase3">Payment Due</strong>
      {Object.keys(duePayments).length > 0 ? (
        Object.keys(duePayments).map((paymentName, index) => {
          return duePayments[paymentName].map((paymentData, index) => {
            var link = "";
            if (paymentName.toLowerCase() === "rental".toLocaleLowerCase()) {
              link = "/landlord/bills/" + paymentName;
            } else {
              link = "/landlord/bills/" + paymentName;
            }

            return <PayableItem key={index} {...paymentData} date={paymentData.paymentDue} title={paymentName} address={link} color="red" />;
          });
        })
      ) : (
        <Empty />
      )}
    </div>
  );
}
