import React from "react";
import { Link } from "react-router-dom";

export default function ViewingItem({ appointmentDate, appointmentTime, tenantName, appointmentId }) {
  return (
    <div className="row">
      <div className="col-1 date active p-0">
        <i className="fas fa-circle text-darkblue"></i>
      </div>
      <div className="col-11 content pb-2">
      <div className="timeline-link p-3">
        <Link to={"/landlord/viewingdetails/" + appointmentId} style={{ color: "#000" }}>
          <p className="mb-2" style={{ fontSize: "12px" }}>
            {appointmentDate} | <span>{appointmentTime}</span>
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
          </div>
        </Link>
        </div>
      </div>
    </div>
  );
}
