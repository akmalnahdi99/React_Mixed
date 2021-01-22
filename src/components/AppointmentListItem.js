// #newPage
import React from 'react'
import { Link } from "react-router-dom";

const AppointmentListItem = ({title, time, date, postType}) => {
    if (!postType) {
      postType = "Scheduled";
      }
    
      if (postType === "Cancelled") {
        return (
          <div className="row">
          <div className="col-12 content">
          <ul className="sortable-list agile-list ui-sortable p-0" id="todo">
          <li class="warning-element ui-sortable-handle">
            <Link to="/landlord/appointmentdetails" alt="" style={{color:"black"}}>
              <div className="row">
              <div className="col-md-9 col-xs-12 mb-2">
                <div class="agile-detail">
                    <small class="text-darkblue"><i class="fas fa-bell"></i> {time} {date}</small>
                </div>
                <p class="m-0">{title}</p>
              </div>
              <div className="col-md-3 col-xs-12 my-2">
                <div className="float-right" >
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
      } else if (postType === "Completed") {
        return (
          <div className="row">
          <div className="col-12 content">
          <ul className="sortable-list agile-list ui-sortable p-0" id="todo">
            <li class="success-element ui-sortable-handle">
            <Link to="/landlord/appointmentdetails" alt="" style={{color:"black"}}>
              <div className="row">
              <div className="col-md-9 col-xs-12 mb-2">
                <div class="agile-detail">
                    <small class="text-darkblue"><i class="fas fa-bell"></i> {time} {date}</small>
                </div>
                <p class="m-0">{title}</p>
              </div>
              <div className="col-md-3 col-xs-12 my-2">
                <div className="float-right" >
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
      else if (postType === "Scheduled") {
        return (
          <div className="row">
          <div className="col-12 content ">
          <ul className="sortable-list agile-list ui-sortable p-0" id="todo">
            <li class="info-element ui-sortable-handle">
            <Link to="/landlord/appointmentdetails" alt="" style={{color:"black"}}>
              <div className="row">
              <div className="col-md-9 col-xs-12 mb-2">
                <div class="agile-detail">
                    <small class="text-darkblue"><i class="fas fa-bell"></i> {time} {date}</small>
                </div>
                <p class="m-0">{title}</p>
              </div>
              <div className="col-md-3 col-xs-12 my-2">
                <div className="float-right" >
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
}

export default AppointmentListItem;
