import React from "react";
import { Link } from "react-router-dom";

export default function CheckDetails({ title, dateTime, buttonLabel, desc, disabled, address }) {
  return (
    <div className="ibox">
      <div className="ibox-content minhigh ">
        <br />
        <div className="btn btn-primary btn-lg">
          <i className={"fas fa-check-circle " + disabled}></i> {title}
        </div>
        <p className="my-3 font-title">{desc}</p>
        <hr />
        <p className="my-3 text-doorcase3"> {dateTime}</p>
        <Link className={"btn-success btn btn-block " + disabled} to={address}>
          {buttonLabel}
          <i className="fas fa-long-arrow-alt-right"></i>
        </Link>
      </div>
    </div>
  );
}
