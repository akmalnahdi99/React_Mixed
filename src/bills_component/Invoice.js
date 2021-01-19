import React from "react";
import { Link } from "react-router-dom";

export default function InvoiceDetails({ title, details }) {
  var className = "";
  var paidText = "";


  if (details) {
    if (details.paid === true) {
      className = "text-completedtask";
      paidText = "Paid";
    } else {
      paidText = "Not Paid";
      className = "text-danger";
    }
  } else {
    // Need to find a solution to remove this
    paidText = "Not Paid";
    className = "text-danger";
  }

  
  return (
    <div className="ibox">
      <div className="ibox-title ">
        <h3>{title}</h3>
      </div>
      <div className="ibox-content minhigh pt-0">
        <div className="row">
          <div className="col-sm-7 mb-3">
            <div className="media">
              <div className="media-body">
                <small>Due on: {details.paymentDue}</small>
                <p className="m-0">{title}</p>
                <p>
                  Status: <span className={className}>{paidText}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 md-5">
          <div className="btn-res">
            <Link to="" className="btn btn-primary width140 mr-2 mb-2">
              View Bill
            </Link>
            {details.paid === false ? (
              <Link to="" className="btn btn-success width140 mb-2">
                Upload Receipt
              </Link>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
