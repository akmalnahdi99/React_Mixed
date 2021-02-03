// #newPage
import React, {useState} from "react";
import { Collapse } from 'reactstrap';
import * as FaIcons from "react-icons/fa";

export default function RentalDetails ({ title,expand })  {
  var details = {
    name: "JANN Properties",
    bank: "CIMB",
    ref_no: "G-21-07",
    account: "8009656480",
  };
  const [isOpen, setIsOpen] = useState(expand);

  const toggle = () => setIsOpen(!isOpen);
  return (
        <div className="ibox">
      <div className="ibox-title">
        <div style={{ display: "flex", justifyContent: "start", alignItems: "center" }}>
        <h3><img src="/imgs/subscription.svg" alt="..." className="utilityIconTitle"></img>Rental Payables</h3>
        </div>
        <div className="ibox-tools">
          <p onClick={toggle}>
            <FaIcons.FaInfoCircle className="fa-2x " />
          </p>
        </div>
      </div>
      <Collapse isOpen={isOpen} className="ibox-content minhigh">
        <div className="row pt-2 ">
          <div className="col-sm-12">
            <div className="media">
              <div className="media-body">
                <h4 className="text-doorcase3">Name Payable charges</h4>
                <p className="m-0">{details.name}</p>
              </div>
            </div>
            <hr />
          </div>
          <div className="col-sm-12">
            <div className="media">
              <div className="media-body">
                <h4 className="text-doorcase3">Bank name</h4>
                <p className="m-0">{details.bank}</p>
              </div>
            </div>
            <hr />
          </div>

          <div className="col-sm-12 font-body">
            <div className="media">
              <div className="media-body">
                <h4 className="text-doorcase3">Reference number</h4>
                <p className="m-0">{details.ref_no}</p>
              </div>
            </div>
            <hr />
          </div>
          <div className="col-sm-12 font-body">
            <div className="media">
              <div className="media-body">
                <h4 className="text-doorcase3">Bank account number</h4>
                <p className="m-0">{details.account}</p>
              </div>
            </div>
          </div>
        </div>
        </Collapse>
        </div>
  );
}; 