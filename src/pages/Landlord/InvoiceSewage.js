// #newPage
//under review
import React from "react";

import InvoiceSewageDetails from "../../components/InvoiceSewageDetails";
import SewageDetails from "../../bills_component/SewageDetails";

export default function InvoiceSeawage() {
  return (
    <div className="wrapper wrapper-content animated fadeInRight py-5 pb-5">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-lg-8 mb-3 px-0">
            <SewageDetails title=" Sewage" />
            <InvoiceSewageDetails />
          </div>
        </div>
      </div>
    </div>
  );
}
