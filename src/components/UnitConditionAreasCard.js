import React from "react";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import Empty from "./Empty";

export default function UnitConditionAreasCard({ areas }) {
  return (
    <div className="row pb-5">
      <div className="col-lg-4 px-2">
        <div className="ibox">
          <div className="ibox-title">
            <h3>Areas</h3>
          </div>
          <div className="ibox-content minhigh350px ">
            <ul className="folder-list">
              {areas.length > 0 ? (
                areas.map((item, index) => {
                  return (
                    <li key={index}>
                      <Link to={"/landlord/conditionDetails/" + item}>
                        {/* <img src={item.image} className="align-self-center mr-2" width="25px" alt="" /> */}
                        {item}
                        <FaIcons.FaArrowRight className="float-right fa-xs" />
                      </Link>
                    </li>
                  );
                })
              ) : (
                <Empty title="No Areas Found" />
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
