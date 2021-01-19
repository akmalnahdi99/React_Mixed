import React from "react";

const TodoListItem = ({ title, time, date, color }) => {
  if (!color) {
    color = "green";
  }

  if (color === "yellow") {
    return (
      <div>
        <ul className="sortable-list connectList agile-list ui-sortable pb-0" id="todo">
          <li className="warning-element ui-sortable-handle">
            <div className="agile-detail">
              <small className="text-darkblue">
                <i className="fas fa-bell"></i> {time} {date}
              </small>
            </div>
            <p className="m-0">{title}</p>
          </li>
        </ul>
      </div>
    );
  } else if (color === "green") {
    return (
      <div>
        <ul className="sortable-list connectList agile-list ui-sortable pb-0" id="todo">
          <li className="success-element ui-sortable-handle">
            <div className="agile-detail">
              <small className="text-darkblue">
                <i className="fas fa-bell"></i> {time} {date}
              </small>
            </div>
            <p className="m-0">{title}</p>
          </li>
        </ul>
      </div>
    );
  }
};

export default TodoListItem;
