import React, { useState } from "react";
import { Collapse } from "reactstrap";
import * as FaIcons from "react-icons/fa";

export default function AssessmentRateDetails  ({ title,details })  {
 
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <div className="ibox">
      <div className="ibox-title">
      
        <h3><img src="/imgs/assessment.svg" alt="..." className="utilityIconTitle" />{title}</h3>
        <div className="ibox-tools">
          <p onClick={toggle}>
            <FaIcons.FaInfoCircle className="fa-2x " />
          </p>
        </div>
      </div>
        <Collapse isOpen={isOpen} className="ibox-content minhigh pt-0">
          <div className="row pt-2">
            <div className="col-sm-12">
              <div className="media">
                <div className="media-body">
                  <h4 className="text-doorcase3">Service charge 6 months</h4>
                  <p className="m-0">{(details.serviceCharge && "RM " + details.serviceCharge) || "N/A"}</p>
                </div>
              </div>
              <hr />
            </div>
          </div>
          <div className="row pt-2">
            <div className="col-sm-12">
              <h3>Payable To</h3>
            </div>
            <div className="col-sm-6">
              <div className="media">
                <div className="media-body">
                  <h4 className="text-doorcase3">Company Name</h4>
                  <p className="m-0">{details.companyName || "N/A"}</p>
                </div>
              </div>
              <hr />
            </div>
            <div className="col-sm-6">
              <div className="media">
                <div className="media-body">
                  <h4 className="text-doorcase3">Contact number</h4>
                  <p className="m-0">{details.contactNumber || "N/A"}</p>
                </div>
              </div>
              <hr />
            </div>
          </div>
          <div className="row mb-4 justify-content-center">
            <div className="col-sm-12">
              <div className="media">
                <div className="media-body">
                  <h4 className="text-doorcase3">Name Payable</h4>
                  <p className="m-0">{details.companyName || "N/A"}</p>
                </div>
              </div>
            </div>
          </div>
        </Collapse>
      </div>
  );
};
 
