import React from "react";
import { Link } from "react-router-dom";

export default function PayCDMList  ()  {
  var details = {
    name: "Suez Sdn. Bhd.",
    bank: "CIMB",
    accnumber: "03-7453 8045",
  };
  return (
    <div className="ibox">
      <div className="ibox-title">
        <h3>Beneficiary details</h3>
        <hr />
      </div>
      <div className="ibox-content minhigh pt-0">
        <div className="row pt-2">
          <div className="col-sm-12">
            <div className="media">
              <div className="media-body">
                <h4 className="text-doorcase3">Name payable</h4>
                <p className="m-0">{details.name}</p>
              </div>
            </div>
            <hr />
          </div>
          <div className="col-sm-12">
            <div className="media">
              <div className="media-body">
                <h4 className="text-doorcase3">Bank name</h4>
                <p className="m-0">{details.bank}</p>
              </div>
            </div>
            <hr />
          </div>
          <div className="col-sm-12">
            <div className="media">
              <div className="media-body">
                <h4 className="text-doorcase3">Account Number</h4>
                <p className="m-0">{details.accnumber}</p>
              </div>
            </div>
          </div>
            </div>
            <div className="row mt-5">
                <div className="col-12">
                    <Link><button className="btn btn-primary" style={{width: "100%"}}>Upload Receipt</button></Link>
                </div>
            </div>
          </div>
        </div>
  );
}; 