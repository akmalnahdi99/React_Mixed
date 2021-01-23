// #newPage
//under review
import React from "react";
import InvoiceCabletvDetails from "../../components/InvoiceCabletvDetails";
import InfoCableTvDetails from "../../propertyInfoComponent/InfoCableTvDetails";

export default function InvoiceCabletv() {
  return (
    <div className="wrapper wrapper-content animated fadeInRight py-5 pb-5">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-lg-8 mb-3 px-0">
            <InfoCableTvDetails title=" Cable TV" />
            <InvoiceCabletvDetails />
          </div>
        </div>
      </div>
    </div>
  );
}
