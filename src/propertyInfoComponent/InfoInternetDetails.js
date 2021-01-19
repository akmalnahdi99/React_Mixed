import React from "react";

export default function InfoInternetDetails({ title, ...details }) {
  return (
    <div className="ibox">
      <div className="ibox-title">
        <div style={{ display: "flex", justifyContent: "start", alignItems: "center" }}>
          <img src="/imgs/wifi.svg" alt="..." className="utilityIconTitle"></img>
          <h3>{title}</h3>
        </div>
        <hr />
      </div>
      <div className="ibox-content minhigh pt-0">
        <div className="media">
          <div className="media-body">
            <h4 className="text-doorcase3">Company Name</h4>
            <p className="m-0">{details.companyName}</p>
          </div>
        </div>
        <hr />
        <div className="media">
          <div className="media-body">
            <h4 className="text-doorcase3">Contact number</h4>
            <p className="m-0">{details.contactNumber}</p>
          </div>
        </div>
      </div>
    </div>
  );
}