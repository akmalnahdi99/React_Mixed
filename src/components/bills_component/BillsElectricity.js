import React from "react";
import Footer from "../static/Footer";

import ElectricityDetails from "./ElectricityDetails";

export default function BillsElectricity() {
  return (
      <div className="wrapper wrapper-content animated fadeInRight">
          <div className="ibox ">
              <ElectricityDetails title="Electricity" />
        </div>
      <Footer />
    </div>
  );
}
