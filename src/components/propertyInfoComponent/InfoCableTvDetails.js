import React, { useState } from 'react';
import { Collapse } from 'reactstrap';
import * as FaIcons from "react-icons/fa";

export default function InfoCableTvDetails({ title, ...details }) {
  const [isOpen, setIsOpen] = useState(true);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <div className="ibox">
      <div className="ibox-title">
        <div>
        <h3><img src="/imgs/tv.svg" alt="..." className="utilityIconTitle"></img>{title}</h3>
        </div>
        <div className="ibox-tools">
          <p onClick={toggle}>
            <FaIcons.FaInfoCircle className="fa-2x " />
          </p>
        </div>
      </div>
      <Collapse isOpen={isOpen} className="ibox-content minhigh pt-0">
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
      </Collapse>
    </div>
  );
}
