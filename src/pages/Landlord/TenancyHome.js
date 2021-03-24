//TASK under Review
import React from "react";
import { Link } from "react-router-dom";

export default function UnitInfo() {
  return (
    <div className="container container-xs pt-5 pb-5 gray-bg"> 
      <div className="row text-center">
        <div className="col-12 align-self-center mt-4">
          <Link to="/landlord/unitKitsCats/CheckIn" className="btn btn-dashboardicon  btn-default width190 btn-lg m-2">
            <img src="/imgs/completed-task.svg" width="30px" alt="" />
            <br />
            <span className="mt-5 ">Check In </span>
          </Link>

          <Link to="/landlord/unitKitsCats/CheckOut" className="btn btn-dashboardicon  btn-default width190 btn-lg m-2">
            <img src="/imgs/completed-task.svg" width="30px" alt="" />
            <br />
            <span className="mt-5 ">Check Out</span>
          </Link>
        </div>
      </div>
      <div className="row text-center">
        <div className="col-12 align-self-center">
          <Link to="/landlord/unitInventory" className="btn btn-dashboardicon  btn-default width190 btn-lg m-2">
            <img src="/imgs/inventory.svg" width="30px" alt="" />
            <br />
            <span className="mt-5">Inventory List</span>
          </Link>
          <Link to="/landlord/PropertyCondition" className="btn btn-dashboardicon  btn-default width190 btn-lg m-2">
            <img src="/imgs/room.svg" width="30px" alt="" />
            <br />
            <span className="mt-5">Property Condition</span>
          </Link>
        </div>
      </div>
    </div>
  );
}