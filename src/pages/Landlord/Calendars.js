import React from "react";



import CalendarPage from "../../components/CalendarPage.js";

export default function Calendars() {
  return (


    <div className="wrapper wrapper-content animated fadeInRight py-5 pb-5 gray-bg">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-lg-8 mb-3 px-0">
            <CalendarPage />
          </div>
        </div>
      </div>
    </div>

  );
}
