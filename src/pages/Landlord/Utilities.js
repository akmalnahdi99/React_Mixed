import React from "react";
import { Link } from "react-router-dom";


export default function Utilities() {
  const data = [
    { key: "Water", text: "Water", icon: "/imgs/water-drop.svg", url: "" },
    { key: "Electricity", text: "Electricity", icon: "/imgs/electricity.svg", url: "" },
    { key: "Sewage", text: "Sewage", icon: "/imgs/sewage.svg", url: "" },
    { key: "Internet", text: "Internet", icon: "/imgs/wifi.svg", url: "" },
    { key: "Cabletv", text: "Cabletv", icon: "/imgs/tv.svg", url: "" },
    { key: "Gas", text: "Gas", icon: "/imgs/gas.svg", url: "" },
  ];

  return (
    
      <div className="wrapper wrapper-content animated fadeInRight ">
        <div className="container">
          <div className="row iconres justify-content-center">
            <div className="col-12 align-self-center mt-4">
              {data.map((item, index) => {
                return (
                  <Link key={index} to={"/landlord/utilities/" + item.key} className="btn btn-dashboardicon  btn-default width160 btn-lg m-2">
                    <img src={item.icon} alt={item.text} width="24px" />
                    <br />
                    <span>{item.text} </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
     
  );
}
