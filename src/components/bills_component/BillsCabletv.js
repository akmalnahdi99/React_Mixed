import React from "react";
import Footer from "../static/Footer";

import CableTVDetails from "./CableTVDetails";

export default function BillsCableTV() {
  return (
    <div className="wrapper wrapper-content animated fadeInRight">
            <div className="ibox ">
              <CableTVDetails title="Cable Tv" />
            </div>
      <Footer />
    </div>
  );
}
