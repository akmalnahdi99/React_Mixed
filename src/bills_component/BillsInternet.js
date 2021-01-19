import React from "react";
import Footer from "../components/static/Footer";

import InternetDetails from "./InternetDetails";

export default function BillsInternet() {
  return (
      <div className="wrapper wrapper-content animated fadeInRight">
          <div className="ibox ">
              <InternetDetails title="Internet" />
        
        </div>
      <Footer />
    </div>
  );
}
