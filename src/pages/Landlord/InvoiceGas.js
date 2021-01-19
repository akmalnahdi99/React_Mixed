// #newPage
//under review

import React from "react";
import InvoiceGasDetails from "../../components/InvoiceGasDetails";
import GasDetails from "../../bills_component/GasDetails";

export default function InvoiceGas() {
  return (
    <div className="wrapper wrapper-content animated fadeInRight py-5 pb-5">
      <div className="container container-xs">
        <div className="row justify-content-center">
          <div className="col-lg-9 mb-3">
            <GasDetails title=" Gas" />
            <InvoiceGasDetails />
          </div>
        </div>
      </div>
    </div>
  );
}
