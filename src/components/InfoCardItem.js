// #newPage
import React from "react";
import { Link } from "react-router-dom";
import { action_level_info, action_level_warning, action_level_danger, action_level_waiting } from "./../utils/landlordHelper";
export default function InfoCardItem({ title, body, level, address }) {
  if (!level) {
    level = action_level_info;
  }
  var element = "danger-element";

  if (level === action_level_danger) {
    element = "danger-element";
  } else if (level === action_level_info) {
    element = "success-element";
  } else if (level === action_level_warning) {
    element = "warning-element";
  } else if (level === action_level_waiting) {
    element = "info-element";
  }

  return (
    <div>
      <ul className="sortable-list connectList agile-list ui-sortable" id="todo">
        <li className={element + " ui-sortable-handle mb-0"}>
          {address && address !== "" ? (
            <Link to={address} style={{ color: "black" }}>
              <div className="agile-detail">
                <small className="text-darkblue">
                  <i className="fas fa-bell"></i> {title}
                </small>
              </div>
              <p className="m-0">{body}</p>
            </Link>
          ) : (
            <React.Fragment>
              <div className="agile-detail">
                <small className="text-darkblue">
                  <i className="fas fa-bell"></i> {title}
                </small>
              </div>
              <p className="m-0 text-truncate">{body}</p>
            </React.Fragment>
          )}
        </li>
      </ul>
    </div>
  );
}
