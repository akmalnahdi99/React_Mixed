import React from "react";
 
import AssessmentRateDetails from "./AssessmentRateDetails";
import Invoice from "./Invoice";


export default function AssessmentRate({ utilityDetails, payments }) {
  return (
          <div  className="wrapper wrapper-content animated fadeInRight">
            <div className="ibox ">
              <AssessmentRateDetails title="Assessment Rate" details={utilityDetails} />
            </div>
              {payments.map((item, index) => {
                return <Invoice key={index} title="Invoice" details={item} />;
              })}
          </div>
  );
}
