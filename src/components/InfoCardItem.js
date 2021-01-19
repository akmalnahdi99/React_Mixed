import React from "react";

export default function InfoCardItem({ title, body, color }) {
  //TASK body & title text should trimmed to: 100 chars  for example

  if (!color) {
    color = "green";
  }

  if (color === "red") {
    return (
      <div>
        <ul className="sortable-list connectList agile-list ui-sortable" id="todo">
          <li className="danger-element ui-sortable-handle mb-0">
            <div className="agile-detail">
              <small className="text-danger">
                <i className="fas fa-bell"></i> {title}
              </small>
            </div>
            <p className="m-0 text-truncate">{body}</p>
          </li>
        </ul>
      </div>
    );
  } else if (color === "green") {
    return (
      <div>
        <ul className="sortable-list connectList agile-list ui-sortable" id="todo">
          <li className="success-element ui-sortable-handle  mb-0">
            <div className="agile-detail">
              <small className="text-darkblue">
                <i className="fas fa-bell"></i> {title}
              </small>
            </div>
            <p className="m-0 text-truncate">{body}</p>
          </li>
        </ul>
      </div>
    );
  }
  
}
