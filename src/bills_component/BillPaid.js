// #newPage
import React from "react";
import { Link } from "react-router-dom";

const BillsPaid = ({ title }) => {
  var invoice = {
    status: "Paid"
  };
  return (
    <div className="ibox">
      <div className="ibox-bill minhigh pt-0">
        <div className="row justify-content-center">
            <div className="col-sm-7 pt-3">
              <h3 className="text-doorcase3">{title}</h3>
                <p>Status : <span className="textgrn">{invoice.status}</span></p>
          </div>
          <div class="btn-res pt-2"><br/>
            <Link to="/" class="btn btn-primary width140 mr-2 mb-2">View Bill</Link>
            <Link to="/" class="btn btn-success width140 mb-2">View Receipt</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BillsPaid;
