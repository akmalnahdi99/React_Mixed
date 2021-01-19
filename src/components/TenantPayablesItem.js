import React from "react";

const TenantPayablesItem = ({ title, time, date }) => {
  return (
    <div>
      <ul className="sortable-list connectList agile-list ui-sortable pb-0" id="todo">
        <li className="danger-element cursorauto">
          <div className="agile-detail">
            <small className="text-danger">
              <i className="fas fa-bell"></i> {time} {date}
            </small>
          </div>
          <p className="m-0 text-truncate">{title}</p>
        </li>
      </ul>
    </div>
  );
};

export default TenantPayablesItem;
