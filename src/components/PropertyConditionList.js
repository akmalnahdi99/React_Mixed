import React from "react";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";

export default function UnitConditionAreasCard() {

  var areas = [
    {
      name: "Entrance",
      image: "/imgs/en1.svg",
      link: "/landlord/entrancecondition",
    },
  ];

  return (
    <div className="row pb-5">
      <div className="col-lg-4 px-2">
        <div className="ibox">
          <div className="ibox-title">
            <h3>Areas</h3>
          </div>
          <div className="ibox-content minhigh350px ">
            <ul className="folder-list">
              {areas.map((item, index) => {
                return (
                  <li key={index}>
                    <Link to={item.link}>
                      <img src={item.image} className="align-self-center mr-2" width="25px" alt="" /> &nbsp;
                      {item.name} &nbsp;
                      <FaIcons.FaArrowRight className="float-right fa-xs" />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
