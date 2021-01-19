import React from "react";
import { useHistory } from "react-router-dom";
export default function SiteMap({ title }) {
  const history = useHistory();
  var show = process.env.NODE_ENV === "development" ? " ( LL Mixed )" : null;
  return (
    <ul className="breadcrumb bg-transparent">
      <div
        className="site-map-button pl-4 pr-4"
        onClick={(e) => {
          e.preventDefault();
          history.goBack();
        }}
        style={{ color: "white", cursor: "pointer", padding: "12px 0px", minWidth: "120px" }}
      >
        <div className="d-flex justify-content-start align-items-center">
          <i className="fas fa-chevron-left"></i>
          <span className="breadcrumb-item active ml-2 " style={{ color: "white" }}>
            {title}
            
            {show != null ? <span style={{ marginLeft:"10px", color:"red"}}>{show + " "}</span> : ""}
          </span>
        </div>
      </div>
    </ul>
  );
}
