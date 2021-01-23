// #newPage
import React from "react";
import { Link } from "react-router-dom";

export default function AppointmentListItem({ appointmentId, title, time, date, status }) {
  
  var cardClass = "";
  if (status === "Cancelled") {
    cardClass = "warning-element";
  } else if (status === "Completed") {
    cardClass = "success-element";
  } else if (status === "Scheduled") {
    cardClass = "info-element";
  }

  return (
    <div className="row">
      <div className="col-12 content ">
        <ul className="sortable-list agile-list ui-sortable p-0" id="todo">
          <li className={"ui-sortable-handle " + cardClass}>
            <Link to={"/landlord/appointmentdetails/" + appointmentId} style={{ color: "black" }}>
              <div className="row">
                <div className="col-md-9 col-xs-12 mb-2">
                  <div className="agile-detail">
                    <small className="text-darkblue">
                      <i className="fas fa-bell"></i> {time} {date}
                    </small>
                  </div>
                  <p className="m-0">{title || "N/A"}</p>
                </div>
                <div className="col-md-3 col-xs-12 my-2">
                  <div className="float-right">
                    <i className="fas fa-arrow-right fa-lg text-completedtask"></i>
                  </div>
                </div>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
