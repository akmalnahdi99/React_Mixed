// #newPage
//under review 
import React from "react";
import InvoiceCableTVDetails from "../../components/InvoiceCableTVDetails";
import InfoCableTvDetails from "../../components/propertyInfoComponent/InfoCableTvDetails";

export default function InvoiceCableTV() {
  return (
    <div className="wrapper wrapper-content animated fadeInRight py-5 pb-5">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-lg-8 mb-3 px-0">
            <InfoCableTvDetails title=" Cable TV" />
            <InvoiceCableTVDetails />
          </div>
        </div>
      </div>
    </div>
  );
}
 