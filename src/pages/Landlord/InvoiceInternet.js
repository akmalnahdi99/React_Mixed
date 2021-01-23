// #newPage
//under review
import React from "react";
 
import InvoiceInternetDetails from "../../components/InvoiceInternetDetails";
import InfoInternetDetails from "../../propertyInfoComponent/InfoInternetDetails";

export default function InvoiceInternet() {
  return (
    <div className="wrapper wrapper-content animated fadeInRight py-5 pb-5">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-lg-8 mb-3 px-0">
            <InfoInternetDetails title=" Internet" />
            <InvoiceInternetDetails />
          </div>
        </div>
      </div>
    </div>
  );
}
