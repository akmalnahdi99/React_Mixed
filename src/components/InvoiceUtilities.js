// #newPage
import React from "react";
import { Link } from "react-router-dom";

//TASK pls use Invoice Component and pass the difference as parameter
export default function InvoiceUtilities({month, status}){
  return (
    <div className="ibox">
      <div className="ibox-bill minhigh pt-0">
        <div className="row justify-content-center">
            <div className="col-sm-7 pt-3">
              <h3 className="text-doorcase4">{month}</h3>
                <p>Status : <span className="text-danger">{status}</span></p>
          </div>
          <div class="btn-res pt-2"><br/>
            <Link to="/landlord/payonline" className="btn btn-primary width140 mr-2 mb-2">Upload Bill</Link>
            <Link to="/landlord/paybycash" className="btn btn-success width140 mb-2">Upload Receipt</Link>
          </div>
        </div>
      </div>
    </div>
  );
};