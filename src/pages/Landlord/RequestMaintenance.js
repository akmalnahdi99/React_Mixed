// #newPage
import React from 'react'
import MaintenanceMessage from '../../components/MaintenanceMessage';
import RequestMaintenanceCatagory from "../../components/RequestMaintenanceCatagory";

const RequestMaintenance = () => {
    return (
      <div className="wrapper wrapper-content animated fadeInRight py-5 pb-5">
        <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-lg-8 mb-3 px-0">
            <div className="ibox">
            <div class="ibox-title">
            <h3>Select Catagory</h3>
            <hr/>
          <RequestMaintenanceCatagory/>
          <div class="ibox-title p-0">
          <br/>
          <h3>Request Message</h3>
          </div>
          <MaintenanceMessage/>
          <br/>
          </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}

export default RequestMaintenance;
