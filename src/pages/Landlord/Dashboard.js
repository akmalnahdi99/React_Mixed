import React from "react";
// import { FaWindowClose } from "react-icons/fa";
// import PostsList from "../../components/PostsList";
// import PostsListFilter from "../../components/PostsListFilter";
// import Quicklinks from "../../components/DashQuicklinks";
import TodoList from "../../components/DashBoardCards/DashTodoList.js";
import Maintenance from "../../components/DashBoardCards/DashMaintenance";
import Calendar from "../../components/DashBoardCards/DashCalendar";
// import Financials from "../../components/DashFinancials"; // for version 2
import Bills from "../../components/DashBoardCards/DashBills";
import UnitInfo from "../../components/DashBoardCards/DashPropertyInfo.js";
import DashAppointment from "../../components/DashBoardCards/DashAppointment";
import * as FaIcons from "react-icons/fa";
import { Link } from "react-router-dom";
import DashRentalGraph from "../../components/DashBoardCards/DashRentalGraph";

export default function Dashboard() {
  return (
    <div>
      <div className="wrapper wrapper-content py-4 animated fadeInRight">
        <div className="container-fluid">
          <div className="row">
            {/* <div key={"1"} className="col-lg-4 px-2">
            <Quicklinks title="Quick Links" />
          </div> */}
            <div key={"3"} className="col-lg-4 px-2">
              <TodoList title="To-Do List" />
            </div>
            <div key={"2"} className="col-lg-4 px-2">
              <DashRentalGraph title="Rental" />
            </div>
            <div className="col-lg-4 px-2">
              <DashAppointment title="Appointment" />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 px-2">
              <Maintenance title="Maintenance" />
            </div>
            <div className="col-lg-4 px-2">
              <Calendar title="Calendar" />
            </div>
            <div className="col-lg-4 px-2">
              <Bills title="Bills" />
            </div>
          </div>

          <div className="row">
            <div className="col-lg-4 px-2">
              <UnitInfo title="Property Info" />
            </div>
          </div>
          
        </div>
        <br />
      </div>
      <Link to="./activity" className="float btn-primary">
        <FaIcons.FaUserClock className="my-float" />
      </Link>
    </div>
  );
}
