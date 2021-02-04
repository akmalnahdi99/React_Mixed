// #newPage
//under review
import React from "react";
import Invoice from "../../components/bills_component/Invoice";

export default function TenantInvoice() {
  return (
    <div className="container container-xs">
      <div className="row justify-content-center">
        <div className="col-lg-9 mb-3">
          <div className="ibox">
            <Invoice title="Invoice" />
          </div>
        </div>
      </div>
    </div>
  );
}
