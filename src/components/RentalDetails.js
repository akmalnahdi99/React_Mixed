// #newPage
import React from "react";

export default function RentalDetails ({ title })  {
  var details = {
    charge: "RM 40.01",
    company: "Suez Domain Sdn Bhd",
    bank: "CIMB",
    ref_no: "G-21-07",
    contact: "03-7453 8045",
    account: "8009656480",
  };
  return (
      <div>
        <div className="ibox-content">
      <div className="ibox-title pl-0">
        <h3>Payable to</h3>
        <hr />
      </div>
        <div className="row pt-2 ">
          <div className="col-sm-12">
            <div className="media">
              <div className="media-body">
                <h4 className="grayText font-body">Annual charges</h4>
                <p className="m-0">{details.charge}</p>
              </div>
            </div>
            <hr />
          </div>
          <div className="col-sm-12">
            <div className="media">
              <div className="media-body">
                <h4 className="grayText font-body">Bank name</h4>
                <p className="m-0">{details.bank}</p>
              </div>
            </div>
            <hr />
          </div>
          <div className="col-sm-12">
            <div className="media">
              <div className="media-body">
                <h4 className="grayText font-body">Contact Number</h4>
                <p className="m-0">{details.contact}</p>
              </div>
            </div>
            <hr />
          </div>

          <div className="col-sm-12 font-body">
            <div className="media">
              <div className="media-body">
                <h4 className="grayText font-body">Reference number</h4>
                <p className="m-0">{details.ref_no}</p>
              </div>
            </div>
            <hr />
          </div>
          <div className="col-sm-12 font-body">
            <div className="media">
              <div className="media-body">
                <h4 className="grayText font-body">Company name</h4>
                <p className="m-0">{details.company}</p>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
  );
}; 