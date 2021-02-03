import React from "react";
import RentalTable from "../components/RentalTable";
import RentalDetails from "../components/RentalDetails";
import { Link } from "react-router-dom";

export default function InvoiceCard({ paymentFor, payOnline, paid, paymentDue, amountRequired, paidAt, payableId, monthName }) {
  // TASK there is a problem when having multiple items which is concatinating texts 2,300.00 wont convert to number
  var data = [
    {
      item: monthName + " Rental",
      value: amountRequired,
    },
  ];

  return (
    <React.Fragment>
      <div className="ibox ">
        <div className="ibox-content mb-5">
          <div>
            <div className="ibox-title pl-0 pr-0">
              <div className="row">
                <div className="col-6">
                  <h3>Rental Payables</h3>
                </div>
                <div className="col-6 text-right">
                  <h1>
                    <strong>Invoice</strong>
                  </h1>
                </div>
              </div>
            </div>
            <div className="row pt-2 mb-2">
              <div className="col-sm-9 col-xs-12 pb-3">
                <div className="media">
                  <div className="media-body">
                    <h4 className="text-doorcase3">Due date</h4>
                    <p className="m-0">{paymentDue}</p>
                  </div>
                </div>
              </div>
              <div className="col-sm-3 col-xs-12 pb-3">
                <div className="media">
                  <div className="media-body">
                    <h4 className="text-doorcase3 grayText">Date of payment</h4>
                    <p className="m-0">{paidAt || "-"}</p>
                  </div>
                </div>
              </div>
              <div className="col-sm-9 col-xs-12 pb-3">
                <div className="media">
                  <div className="media-body">
                    <h4 className="text-doorcase3 grayText">Invoice number</h4>
                    <p className="m-0">{payableId}</p>
                  </div>
                </div>
              </div>

              <div className="col-sm-3 col-xs-12">
                <div className="media">
                  <div className="media-body">
                    <h4 className="text-doorcase3 grayText">Date of issue</h4>
                    <p className="m-0">{paymentDue}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <RentalTable data={data} />
          {paid === true ? (
            <></>
          ) : (
            <div className="row">
              <div className="col-md-7 col-xs-12"></div>
              <div className="col-md-5 col-xs-12">
                <div className="row">
                  <div className="col-md-6 col-xs-12">
                    <Link to="#">
                      <button className="btn btn-primary mr-3 mb-3" style={{ width: "100%" }} onClick={() => payOnline(paymentFor, payableId)}>
                        Pay Online
                      </button>
                    </Link>
                  </div>
                  <div className="col-md-6 col-xs-12">
                    <Link to="/landlord/payRentalCash">
                      <button className="btn btn-primary float-right" style={{ width: "100%" }}>
                        Pay Cash
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}
          <div className="row">
            <div className="col-12">
              <h2 className="float-right">
                <strong>Status</strong>
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <h2 className="float-right ">{paid === true ? <strong className="text-success"> Paid </strong> : <strong className="text-danger"> Unpaid </strong>}</h2>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
