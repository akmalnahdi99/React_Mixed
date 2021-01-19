import React from "react";
import { Link } from "react-router-dom";

export default function ViewingItem({ appointmentDate, appointmentTime, tenantName, appointmentId }) {
  return (
    <div className="row">
      <div className="col-1 date active p-0">
        <i className="fas fa-circle text-darkblue"></i>
      </div>
      <div className="col-11 content">
        <Link to={"/landlord/viewingdetails/" + appointmentId} style={{ color: "#000" }}>
          <p className="mb-2" style={{ fontSize: "12px" }}>
            {appointmentDate} | <span className="text-navy">{appointmentTime}</span>
          </p>
          
          <div className="row">
            <div className="col-9 mb-2">
              <div className="media">
                <img className="align-self-center mr-3" src="/imgs/avatar.svg" width="40px" alt={tenantName} />
                <div className="media-body align-self-center">
                  <h5 className="mt-0 mb-0">{tenantName}</h5>
                </div>
              </div>
            </div>
            <div className="col-3 text-right">
              <i className="fas fa-arrow-right fa-lg text-completedtask"></i>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
