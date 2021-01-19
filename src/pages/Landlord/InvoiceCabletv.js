// #newPage
//under review
import React from "react";
import InvoiceCabletvDetails from "../../components/InvoiceCabletvDetails";
import CabletvDetails from "../../bills_component/CabletvDetails";

export default function InvoiceCabletv() {
  return (
    <div className="wrapper wrapper-content animated fadeInRight py-5 pb-5">
      <div className="container container-xs">
        <div className="row justify-content-center">
          <div className="col-lg-9 mb-3 mt-3">
            <CabletvDetails title=" Cable TV" />
            <InvoiceCabletvDetails />
          </div>
        </div>
      </div>
    </div>
  );
}
