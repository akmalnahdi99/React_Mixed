// #newPage
//under review
import React from "react";
import Header from "../../components/Header";
import SiteMap from "../../components/SiteMap";
import Footer from "../../components/static/Footer";
import Invoice from "../../bills_component/Invoice";

export default function TenantInvoice() {
  return (
    <div class="container container-xs">
      <div className="row justify-content-center">
        <div className="col-lg-9 mb-3">
          <div class="ibox">
            <Invoice title="Invoice" />
          </div>
        </div>
      </div>
    </div>
  );
}
