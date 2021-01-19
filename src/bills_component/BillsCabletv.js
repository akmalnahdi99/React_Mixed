import React from "react";
import Footer from "../components/static/Footer";

import CabletvDetails from "./CabletvDetails";

export default function BillsCabletv() {
  return (
    <div className="wrapper wrapper-content animated fadeInRight">
            <div className="ibox ">
              <CabletvDetails title="Cable Tv" />
            </div>
      <Footer />
    </div>
  );
}
