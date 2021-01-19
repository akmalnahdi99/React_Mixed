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
      <div className="ibox-content minhigh">
        <div className="ibox-title pl-0">
          <h3>{title}</h3>
        </div>
        <div className="row pt-2 ">
          <div className="col-sm-6">
            <div className="media">
              <div className="media-body">
                <h4 className="font-body grayText">Due date</h4>
                <p className="m-0">{details.due}</p>
              </div>
            </div>
            <hr />
          </div>
          <div className="col-sm-6">
            <div className="media">
              <div className="media-body">
                <h4 className="font-body grayText">Date of payment</h4>
                <p className="m-0">{details.date}</p>
              </div>
            </div>
            <hr />
          </div>
          <div className="col-sm-6">
            <div className="media">
              <div className="media-body">
                <h4 className="font-body grayText">Invoice number</h4>
                <p className="m-0">{details.invoice}</p>
              </div>
            </div>
            <hr />
          </div>

          <div className="col-sm-6 font-body">
            <div className="media">
              <div className="media-body">
                <h4 className="font-body grayText">Date of issue</h4>
                <p className="m-0">{details.issue}</p>
              </div>
            </div>
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
}
