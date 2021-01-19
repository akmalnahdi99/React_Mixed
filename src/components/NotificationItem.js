import React from "react";

export default function NotificationItem   ({ title, body, time, relativeDate })  {
  return (
    <li className="ui-sortable-handle">
      <div className="row">
        <div className="col-9">
          {relativeDate}
          <div className="agile-detail">
            <small className="font-body font-light">
              <i className="fas fa-bell"></i> {title}
            </small>
          </div>
          <p className="m-0 font-light">{body}</p>
        </div>
        <div className="col-3">
          <h5 className="font-light text-center">
            <p>{time}</p>
            {/* <i className="fas fa-arrow-right text-completedtask"></i> */}
          </h5>
        </div>
      </div>
    </li>
  );
};
 