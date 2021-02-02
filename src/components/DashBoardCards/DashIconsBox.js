import React from "react";
import { Link } from "react-router-dom";
//TASK check links
export default function DashIconsBox({ title, data, returnLink }) {
  return (
    <div className="ibox dash-box">
      <Link className="dash-link" to={returnLink}>
      <div className="ibox-title dash-title">
        
      <h5>
          {title}
        </h5>
        <div className="ibox-tools">
            <i className="fas fa-arrow-right"></i>
        </div>
        
      </div>
      </Link>
      <div className="ibox-content pt-0">
        <div className="row text-center">
          {data.map((item, index) => {
            return (
              <div key={index} className="col-md-4 col-sm-4 col-4 p-2">
                <Link to={item.url} className="btn btn-default btn-block px-1 btn-dashboardicon text-truncate">
                  <img src={item.icon} width="24px" alt={item.text} />
                  <br /> {item.text}
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
