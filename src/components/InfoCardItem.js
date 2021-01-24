// #newPage
import React from "react";
import { Link } from "react-router-dom";

export default function InfoCardItem({ title, body, color, address }) {
  if (!color) {
    color = "green";
  }
  var element = "danger-element";

  if (color === "red") {
    element = "danger-element";
  } else if (color === "green") {
    element = "success-element";
  } else if (color === "yellow") {
    element = "warning-element";
  } else if (color === "blue") {
    element = "info-element";
  }
  return (
    <div>
      <ul className="sortable-list connectList agile-list ui-sortable" id="todo">
        <li className={element + " ui-sortable-handle mb-0"}>
          <Link to={address} style={{ color: "black" }}>
            <div className="agile-detail">
              <small className="text-darkblue">
                <i className="fas fa-bell"></i> {title}
              </small>
            </div>
            <p className="m-0 text-truncate">{body}</p>
          </Link>
        </li>
      </ul>
    </div>
  );
}
