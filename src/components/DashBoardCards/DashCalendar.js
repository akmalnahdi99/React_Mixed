import React, { useState } from "react";
import { Link } from "react-router-dom";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const DashCalendar = ({ title }) => {
  const [value, onChange] = useState(new Date());
  return (
    <div className="ibox dash-box">
      <Link className="dash-link" to="/landlord/calendars">
        <div className="ibox-title dash-title">
          <h5>{title}</h5>
          <div className="ibox-tools">
            <i className="fas fa-arrow-right"></i>
          </div>
        </div>
      </Link>
      <div className="ibox-content">
        <Calendar onChange={onChange} value={value} />
      </div>
    </div>
  );
};
export default DashCalendar;
