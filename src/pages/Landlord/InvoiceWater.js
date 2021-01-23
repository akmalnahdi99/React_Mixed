// #newPage
//under review
import React from "react";
import InvoiceWaterDetails from "../../components/InvoiceWaterDetails";
import InfoWaterDetails from "../../components/propertyInfoComponent/InfoWaterDetails";

export default function InvoiceWater() {
  return (
    <div className="wrapper wrapper-content animated fadeInRight py-5 pb-5">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-lg-8 mb-3 px-0">
            <InfoWaterDetails title=" Water" />
            <InvoiceWaterDetails />
          </div>
        </div>
      </div>
    </div>
  );
}
