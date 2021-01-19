import React from "react";
import Footer from "../components/static/Footer";
import GasDetails from "./GasDetails";

export default function BillsGas() {
  return (
    <div className="wrapper wrapper-content animated fadeInRight">
      <div className="ibox ">
          <GasDetails title="Internet" />
    </div>
  <Footer />
</div>
  );
}
