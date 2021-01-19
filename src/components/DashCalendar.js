import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';


//TASK Need To be completed
//DISCUSS in Link use absolute path example: /landlord/page1 , not ../landlord/page1
const DashCalendar = ({ title }) => {
  const [value, onChange] = useState(new Date());
  return (
    <div className="ibox">
      <div className="ibox-title">
        <h5>
          <Link to="/landlord/calendars">{title}</Link>
        </h5>
        <div className="ibox-tools">
          <Link to="/landlord/calendars">
            <i className="fas fa-arrow-right"></i>
          </Link>
        </div>
      </div>
      <div className="ibox-content">
        <Calendar
          onChange={onChange}
          value={value}
        />
      </div>
    </div>
  );
};
export default DashCalendar;
