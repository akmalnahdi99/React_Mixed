import React from "react";
import MaintenanceDetails from "./MaintenanceDetails";
import Invoice from "./Invoice";


export default function BillsMaintenance({ utilityDetails, payments }) {
  return (
    <div className="wrapper wrapper-content animated fadeInRight">
            <div className="ibox ">
              <MaintenanceDetails title="Maintenance Fee" details={utilityDetails} />
            </div>
              {payments.map((item, index) => {
                return <Invoice key={index} title="Invoice" details={item} />;
              })}
    </div>
  );
}
