// #newPage
import React from "react";
import { Link } from "react-router-dom";

export default function PayableItem({ date, title, icon, color, link }) {
  var colorClassName = "text-darkblue";
  if (color === "red") {
    colorClassName = "text-danger";
  }

  return (
    <div className="ibox mt-3" style={{ cursor: "pointer" }}>
      <Link to={link}>
        <div className="ibox-content pb-0" style={{ minHeight: "80px" }}>
          <div className="forum-item">
            <div className="row justify-content-center">
              <div className="col-8">
                <img src={icon} width="25px" alt={title} />
                <span className="ml-2 textclr">{title}</span>
                <br />
                <small className={colorClassName}>Due on {date}</small>
              </div>
              <div className="col-4">
                <div className="forum-info">
                  <i className="fas fa-arrow-right fa-lg text-completedtask"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
