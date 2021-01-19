// #newPage
//under review
import React from "react";
 
import InvoiceInternetDetails from "../../components/InvoiceInternetDetails";
import InternetDetails from "../../bills_component/InternetDetails";

export default function InvoiceInternet() {
  return (
    <div className="wrapper wrapper-content animated fadeInRight py-5 pb-5">
      <div className="container container-xs">
        <div className="row justify-content-center">
          <div className="col-lg-9 mb-3">
            <InternetDetails title=" Internet" />
            <InvoiceInternetDetails />
          </div>
        </div>
      </div>
    </div>
  );
}
