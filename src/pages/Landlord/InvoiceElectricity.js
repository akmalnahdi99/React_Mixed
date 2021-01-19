// #newPage
//under review
import React from "react";
import InvoiceElectricityDetails from "../../components/InvoiceElectricityDetails";
import ElectricityDetails from "../../bills_component/ElectricityDetails";

export default function InvoiceElectricity() {
  return (
    <div className="wrapper wrapper-content animated fadeInRight py-5 pb-5">
      <div className="container container-xs">
        <div className="row justify-content-center">
          <div className="col-lg-9 mb-3">
            <ElectricityDetails title=" Electricity" />
            <InvoiceElectricityDetails />
          </div>
        </div>
      </div>
    </div>
  );
}
