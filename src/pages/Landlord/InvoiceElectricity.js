// #newPage
//under review
import React from "react";
import InvoiceElectricityDetails from "../../components/InvoiceElectricityDetails";
import InfoElectricityDetails from "../../propertyInfoComponent/InfoElectricityDetails";

export default function InvoiceElectricity() {
  return (
    <div className="wrapper wrapper-content animated fadeInRight py-5 pb-5">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-lg-8 mb-3 px-0">
            <InfoElectricityDetails title=" Electricity" />
            <InvoiceElectricityDetails />
          </div>
        </div>
      </div>
    </div>
  );
}
