import React from "react";
 
import SubscriptionFeeDetails from "./SubscriptionFeeDetails";
import Invoice from "./Invoice";


export default function BillsSubscriptionFee({ utilityDetails, payments }) {
  return (
    <div className="wrapper wrapper-content animated fadeInRight">
            <div className="ibox ">
              <SubscriptionFeeDetails title="Subscription Fee" details={utilityDetails} />
            </div>
              {payments.map((item, index) => {
                return <Invoice key={index} title="Invoice" details={item} />;
              })}
    </div>
  );
}
