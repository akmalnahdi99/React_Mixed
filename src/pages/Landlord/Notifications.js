import React from "react";

import NotificationList from "../../components/NotificationList";

export default function Notification() {


  return (
    <div className="wrapper wrapper-content animated fadeInRight gray-bg">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-lg-8 mb-3 px-0">
            <NotificationList />
          </div>
        </div>
      </div>
    </div>
  );
}
