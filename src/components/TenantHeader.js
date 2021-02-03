// #newPage
import React from "react";

export default function TenantHeader({ title }) {
  var details = {
    due: "14/09/2020",
    date: "-",
    invoice: "66128",
    issue: "07/08/2020",
  };
  
  return (
    <div>
        <div className="ibox-title pl-0 pr-0">
          <div className="row">
            <div className="col-6">
                <h3>{title}</h3>
            </div>
            <div className="col-6 text-right">
                <h1><strong>Invoice</strong></h1>
            </div>
          </div>
          
        </div>
        <div className="row pt-2 mb-2">
          <div className="col-sm-9 col-xs-12 pb-3">
            <div className="media">
              <div className="media-body">
                <h4 className="text-doorcase3">Due date</h4>
                <p className="m-0">{details.due}</p>
              </div>
            </div>
          </div>
          <div className="col-sm-3 col-xs-12 pb-3">
            <div className="media">
              <div className="media-body">
                <h4 className="text-doorcase3 grayText">Date of payment</h4>
                <p className="m-0">{details.date}</p>
              </div>
            </div>
          </div>
          <div className="col-sm-9 col-xs-12 pb-3">
            <div className="media">
              <div className="media-body">
                <h4 className="text-doorcase3 grayText">Invoice number</h4>
                <p className="m-0">{details.invoice}</p>
              </div>
            </div>
          </div>

          <div className="col-sm-3 col-xs-12">
            <div className="media">
              <div className="media-body">
                <h4 className="text-doorcase3 grayText">Date of issue</h4>
                <p className="m-0">{details.issue}</p>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}
