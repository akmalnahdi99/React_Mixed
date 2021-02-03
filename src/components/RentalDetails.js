// #newPage
import React from "react";

export default function RentalDetails ({ title })  {
  var details = {
    name: "JANN Properties",
    bank: "CIMB",
    ref_no: "G-21-07",
    account: "8009656480",
  };
  return (
      <div>
        <div className="ibox-content">
      <div className="ibox-title pl-0">
        <h3>{title}</h3>
        <hr />
      </div>
        <div className="row pt-2 ">
          <div className="col-sm-12">
            <div className="media">
              <div className="media-body">
                <h4 className="text-doorcase3">Name Payable charges</h4>
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

          <div className="col-sm-12 font-body">
            <div className="media">
              <div className="media-body">
                <h4 className="text-doorcase3">Reference number</h4>
                <p className="m-0">{details.ref_no}</p>
              </div>
            </div>
            <hr />
          </div>
          <div className="col-sm-12 font-body">
            <div className="media">
              <div className="media-body">
                <h4 className="text-doorcase3">Bank account number</h4>
                <p className="m-0">{details.account}</p>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
  );
}; 