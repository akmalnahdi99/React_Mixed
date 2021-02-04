import React from "react";
import Footer from "../static/Footer";

import SewageDetails from "./SewageDetails";

export default function BillsWater() {
  return (
      <div className="wrapper wrapper-content animated fadeInRight">
          <div className="ibox ">
              <SewageDetails title="Sewage" />
        </div>
      <Footer />
    </div>
  );
}
