import React, { useState } from "react";
import { Collapse } from "reactstrap";
import * as FaIcons from "react-icons/fa";

export default function SubscriptionFeeDetails  ({ title })  {
  var details = {
    ref_no: "N/A",
    name: "JANN Properties",
    bank: "N/A",
    account: "N/A",
    contact: "+603 7983 5796",
  };
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <div className="ibox">
      <div className="ibox-title">
        <h3><img src="/imgs/settings.svg" alt="..." className="utilityIconTitle" />{title}</h3>
        <div className="ibox-tools">
          <p onClick={toggle}>
            <FaIcons.FaInfoCircle className="fa-2x " />
          </p>
        </div>
      </div>
        <Collapse isOpen={isOpen} className="ibox-content minhigh pt-0">
          <div className="row pt-2">
            <div className="col-sm-6">
              <div className="media">
                <div className="media-body">
                  <h4 className="text-doorcase3">Name Payable</h4>
                  <p className="m-0">{details.name}</p>
                </div>
              </div>
              <hr />
            </div>
            <div className="col-sm-6">
              <div className="media">
                <div className="media-body">
                  <h4 className="text-doorcase3">Contact number</h4>
                  <p className="m-0">{details.contact}</p>
                </div>
              </div>
              <hr />
            </div>
            <div className="col-sm-6">
              <div className="media">
                <div className="media-body">
                  <h4 className="text-doorcase3">Reference number</h4>
                  <p className="m-0">{details.ref_no}</p>
                </div>
              </div>
              <hr />
            </div>

            <div className="col-sm-6">
              <div className="media">
                <div className="media-body">
                  <h4 className="text-doorcase3">Bank name</h4>
                  <p className="m-0">{details.bank}</p>
                </div>
              </div>
              <hr />
            </div>
            <div className="col-sm-6">
              <div className="media">
                <div className="media-body">
                  <h4 className="text-doorcase3">Account number</h4>
                  <p className="m-0">{details.account}</p>
                </div>
              </div>
            </div>
          </div>
        </Collapse>
      </div>
  );
};
 