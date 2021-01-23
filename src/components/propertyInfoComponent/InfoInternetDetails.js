import { Collapse } from 'reactstrap';
import * as FaIcons from "react-icons/fa";
import React, { useState } from "react";

export default function InfoInternetDetails({ title, ...details }) {
  const [isOpen, setIsOpen] = useState(true);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <div className="ibox">
      <div className="ibox-title">
        <div style={{ display: "flex", justifyContent: "start", alignItems: "center" }}>
        <h3><img src="/imgs/wifi.svg" alt="..." className="utilityIconTitle"></img>{title}</h3>
        </div>
        <div className="ibox-tools">
          <p onClick={toggle}>
            <FaIcons.FaInfoCircle className="fa-2x " />
          </p>
        </div>
      </div>
      <Collapse isOpen={isOpen} className="ibox-content minhigh pt-0">
        <div className="row pt-0">
          <div className="col-sm-6">
            <div className="media">
              <div className="media-body">
                <h4 className="text-doorcase3">Company Name</h4>
                <p className="m-0">{details.companyName || "N/A"}</p>
              </div>
            </div>
            <hr />
            <div className="media">
              <div className="media-body">
                <h4 className="text-doorcase3">Contact number</h4>
                <p className="m-0">{details.contactNumber || "N/A"}</p>
              </div>
            </div>
            <hr />
            <div className="media">
              <div className="media-body">
                <h4 className="text-doorcase3">Reference number</h4>
                <p className="m-0">{details.referenceNumber || "N/A"}</p>
              </div>
            </div>
          </div>

          <div className="col-sm-6">
            <div className="media">
              <div className="media-body">
                <h4 className="text-doorcase3">Bank name</h4>
                <p className="m-0">{details.bankName || "N/A"}</p>
              </div>
            </div>
            <hr />
            <div className="media">
              <div className="media-body">
                <h4 className="text-doorcase3">Bank account number</h4>
                <p className="m-0">{details.bankAccountNumber || "N/A"}</p>
              </div>
            </div>
            <hr />
          </div>
        </div>
      </Collapse>
    </div>
  );
}