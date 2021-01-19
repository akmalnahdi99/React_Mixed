//TASK under Review
import React from "react";
import { Link } from "react-router-dom";

 
export default function PropertyInfo() {
  const data = [
    {
      key: "Tenancy",
      text: "Tenancy",
      icon: "/imgs/family.svg",
      url: "",
    },
    { key: "Inspection", text: "Inspection", icon: "/imgs/quitrent.svg", url: "" },
    { key: "Utilities", text: "Utilities", icon: "/imgs/utilities.svg", url: "" },
    { key: "HomeAppliance", text: "Home Appliances", icon: "/imgs/guide.svg", url: "" },
    { key: "Unit", text: "Unit", icon: "/imgs/tenant.svg", url: "" },
    { key: "Building", text: "Building", icon: "/imgs/company.svg", url: "" },
    { key: "Insurance", text: "Insurance", icon: "/imgs/insurance.svg", url: "" },
  ];

  return (
    <div className="wrapper wrapper-content animated fadeInRight ">
      <div className="container">
        <div className="row">
          <div className="col-12 align-self-center d-flex flex-wrap justify-content-center justify-content-lg-start mt-4">
            {data.map((item, index) => {
              return (
                <Link key={index} to={"/landlord/propertyinfo/" + item.key} className="btn btn-dashboardicon  btn-default width160 btn-lg m-2">
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
