import React from "react";
 
import InsuranceDetails from "./InsuranceDetails";
import Invoice from "./Invoice";
 

export default function BillsInsurance({ utilityDetails, payments }) {
  return (
    <div className="wrapper wrapper-content animated fadeInRight">
            <div className="ibox ">
              <InsuranceDetails title="Insurance" details={utilityDetails} />
            </div>
              {payments.map((item, index) => {
                return <Invoice key={index} title="Invoice" details={item} />;
              })}
    </div>
  );
}
