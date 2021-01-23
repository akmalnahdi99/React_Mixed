//TASK under Review
import React from "react";
import { Link } from "react-router-dom";



import DividedHeader from "../../components/DividedHeader";
import MaintenanceList from "../../components/MaintenanceList";

export default function Maintenance() {
  // const { alert, hideAlert } = React.useContext(UserContext);
  const headerData = [
    { name: "New", value: 12 },
    { name: "Resolved", value: 12 },
    { name: "In Progress", value: 12 },
  ];

  return (
    <div className="wrapper wrapper-content animated fadeInRight py-5 pb-5">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-lg-8 mb-3 px-0">
          <div className="row">
                <div className="col-md-8  col-xs-0"></div>
                <div className="col-md-4 col-xs-6 float-right">
            <Link to="./RequestMaintenance"><button className="btn btn-primary mb-2 float-right">
            <i className="fas fa-plus"></i> Request maintenance
            </button></Link>
            </div>
            </div>
            <DividedHeader data={headerData} />
            <MaintenanceList />
          </div>
        </div>
      </div>
    </div>
  );
}
