// #newPage
//under review
import React from "react";
import InvoiceWaterDetails from "../../components/InvoiceWaterDetails";
import WaterDetails from "../../bills_component/WaterDetails";

export default function InvoiceWater() {
  return (
    <div className="wrapper wrapper-content animated fadeInRight py-5 pb-5">
      <div className="container container-xs">
        <div className="row justify-content-center">
          <div className="col-lg-9 mb-3">
            <WaterDetails title=" Water" />
            <InvoiceWaterDetails />
          </div>
        </div>
      </div>
    </div>
  );
}
