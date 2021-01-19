import React from "react";
 
import UnitServiceChargeSinkingFundCard from "./UnitServiceChargeSinkingFundCard";

export default function UnitServiceCharge() {
  return (
    <div className="wrapper wrapper-content animated fadeInRight">
      <div className="container container-xs">
        <div className="row justify-content-center">
          <div className="col-lg-12 mb-3">
            <div className="ibox ">
              <UnitServiceChargeSinkingFundCard title="Service Charge &amp; Sinking Fund" />
            </div>
          </div>
        </div>
      </div> 
    </div>
  );
}
