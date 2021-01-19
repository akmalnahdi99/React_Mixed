import React from "react";
import DashChart from "./DashChart";
import { Link } from "react-router-dom"

const DashMaintenance = ({ title }) => {
  const data = [
    { text: "new", value: 1, className: "fa fa-circle text-newtask" },
    { text: "In Progress", value: 2, className: "fa fa-circle text-pendingtask" },
    { text: "Resolved", value: 7, className: "fa fa-circle text-completedtask" },
  ];

  // // we count how many zero we have
  // var a = [...Object.keys(viewingStats)].map((x) => viewingStats[x]).filter((x) => x === 0).length;
  // var paddAng = 1;
  // // we add padding only if
  // // we have 2 or 3 zero values
  // // or when we have 1 value only or 0 no value
  // if (a === 2 || a === 3) {
  //   paddAng = 0;
  // }


  return (
    <div className="ibox">
      <div className="ibox-title">
        <h5>
          <Link to="/landlord/maintenance">{title}</Link>
        </h5>
        <div className="ibox-tools">
          <Link to="/landlord/maintenance">
            <i className="fas fa-arrow-right"></i>
          </Link>
        </div>
      </div>
      <DashChart data={data} />
    </div>
  );
};

export default DashMaintenance;