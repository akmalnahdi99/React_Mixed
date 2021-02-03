// #newPage
import React from 'react'
import RentalTable from '../components/RentalTable';
import TenantHeader from "../components/TenantHeader";
import RentalDetails from "../components/RentalDetails";
import { Link } from "react-router-dom";

export default function Financials() {
  return (
    <div className="wrapper wrapper-content animated fadeInRight">
          <RentalDetails />

      <div className="ibox ">
        <div className="ibox-content mb-5">
          <TenantHeader title="Rental Payables" />
          <RentalTable />
          <div className="row">
            <div className="col-md-7 col-xs-12">

            </div>
            <div className="col-md-5 col-xs-12">
              <div className="row">
                <div className="col-md-6 col-xs-12">
                  <Link to="#"><button className="btn btn-primary mr-3 mb-3" style={{ width: "100%" }}>
                    Pay Online
                </button>
                  </Link>
                </div>
                <div className="col-md-6 col-xs-12">
                  <Link to="/landlord/payRentalCash"><button className="btn btn-primary float-right" style={{ width: "100%" }}>
                    Pay Cash
                </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <h2 className="float-right"><strong>Status</strong></h2>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <h2 className="float-right text-danger"><strong>Unpaid</strong></h2>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}