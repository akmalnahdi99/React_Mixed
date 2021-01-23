// #newPage
//under review

import React from "react";
import InvoiceGasDetails from "../../components/InvoiceGasDetails";
import InfoGasDetails from "../../components/propertyInfoComponent/InfoGasDetails";

export default function InvoiceGas() {
  return (
    <div className="wrapper wrapper-content animated fadeInRight py-5 pb-5">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-lg-8 mb-3 px-0">
            <InfoGasDetails title=" Gas" />
            <InvoiceGasDetails />
          </div>
        </div>
      </div>
    </div>
  );
}
