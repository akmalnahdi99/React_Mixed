// #newPage
import React from "react";

export default function InsuranceDetails ({ title }) {
  return (
    <div className="ibox">
      <div className="ibox-title">
        <h3><img src="/imgs/insurance.svg" alt="..." className="utilityIconTitle" />{title}</h3>
        <hr />
      </div>
      <div className="ibox-content minhigh pt-0">
        <div className="row pt-2">
          <div className="col-sm-6">
            <div className="media">
              <h2>No data available!</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

