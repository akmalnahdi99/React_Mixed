import React from "react";

export default function Loading () {
  return (
    <React.Fragment>
      <div style={{ display:"flex", justifyContent:"center", alignItems:"center", border: "0px solid red" }}>
        <div className="fa-3x">
          <i className="fas fa-spinner fa-spin"></i>
          {/* <i className="fas fa-circle-notch fa-spin"></i>
          <i className="fas fa-sync fa-spin"></i>
          <i className="fas fa-cog fa-spin"></i>
          <i className="fas fa-spinner fa-pulse"></i>
          <i className="fas fa-stroopwafel fa-spin"></i> */}
        </div>
      </div>
    </React.Fragment>
  );
};

export   function LoadingSmall () {
  return (
    <React.Fragment>
      <div style={{ display: "flex", justifyContent: "start", alignItems: "center", border: "0px solid red" }}>
        <div className="fa-1x">
          <i className="fas fa-spinner fa-spin"></i>  
          {/* <i className="fas fa-spinner fa-pulse"></i>
          <i className="fas fa-circle-notch fa-spin"></i>
       
          <i className="fas fa-sync fa-spin"></i>
          <i className="fas fa-cog fa-spin"></i>
  
          <i className="fas fa-stroopwafel fa-spin"></i>   */}
        </div>
      </div>
    </React.Fragment>
  );
};
