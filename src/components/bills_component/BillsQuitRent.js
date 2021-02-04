import React from "react";
 
import QuitRentDetails from "./QuitRentDetails";
import Invoice from "./Invoice";


export default function BillsQuitRent({ utilityDetails, payments }) {
  return (
    <div className="wrapper wrapper-content animated fadeInRight">
            <div className="ibox ">
              <QuitRentDetails title="Quit Rent" details={utilityDetails} />
            </div>
              {payments.map((item, index) => {
                return <Invoice key={index} title="Invoice" details={item} />;
              })}
    </div>
  );
}
