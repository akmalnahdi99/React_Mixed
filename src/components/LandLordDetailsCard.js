import React from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../context/settings";

const LandLordDetailsCard = ({ title }) => {
  var  {settings:{userInfo}} = React.useContext(AppContext);

  return (
    <div className="ibox ">
      <div className="ibox-title ">
        <h5>{title}</h5>
      </div>
      <div className="ibox-content">
        <div className="row text-left">
          <div className="col-12">
            <h5 className="font-bold text-doorcase3 ">Full name</h5>
            <span className="mb-3 font-normal">{userInfo.userName}</span>
            <hr />
            <h5 className="font-bold text-doorcase3 ">Citizen</h5>
            <span className="mb-3 font-normal">{userInfo.nationality || "N/A"}</span>
            <hr />
            <h5 className="font-bold text-doorcase3 ">Phone number</h5>
            <span className="mb-3 font-normal">{userInfo.phoneNumber || "N/A"}</span>
            <hr />
            <h5 className="font-bold text-doorcase3 ">Email</h5>
            <span className="mb-3 font-normal">{userInfo.email}</span>
            <hr />
            <h5 className="font-bold text-doorcase3 ">Nric no</h5>
            <span className="mb-3 font-normal">{userInfo.nricNumber || "N/A"}</span>
            <hr />
            <h5 className="font-bold text-doorcase3 ">Passport number</h5>
            <span className="mb-3 font-normal">{userInfo.passportNumber || "N/A"}</span>
        
          </div>
        </div>
      </div>
      <div className="ibox-footer">
        <Link to="/logout" className="btn btn-link pl-0 font-bold">
          <i className="fas fa-sign-out-alt"></i> Logout
        </Link>
      </div>
    </div>
  );
};

export default LandLordDetailsCard;
