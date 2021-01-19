import React from "react";
// import { FaWindowClose } from "react-icons/fa";

// import PostsList from "../../components/PostsList";
// import PostsListFilter from "../../components/PostsListFilter";

// import Quicklinks from "../../components/DashQuicklinks";
import Rental from "../../components/DashRentalGraph";
import TodoList from "../../components/DashTodoList.js";
import Maintenance from "../../components/DashMaintenance";
import TenantPayables from "../../components/DashTenantPayables";
import Calendar from "../../components/DashCalendar";
// import Financials from "../../components/DashFinancials"; // for version 2
import Bills from "../../components/DashBills";
import PropertyInfo from "../../components/DashPropertyInfo.js";
import RentalLeads from "../../components/DashRentalLeads";
import DashboardPropertyViewing from "../../components/DashPropertyViewing";
import DashboardRentalOffers from "../../components/DashRentalOffers";
import * as FaIcons from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div>
      <div className="wrapper wrapper-content py-4 animated fadeInRight">
        <div className="container-fluid">
          <div className="row">
            {/* <div key={"1"} className="col-lg-4 px-2">
            <Quicklinks title="Quick Links" />
          </div> */}
            <div key={"2"} className="col-lg-4 px-2">
              <Rental title="Rental" />
            </div>
            <div key={"3"} className="col-lg-4 px-2">
              <TodoList title="To-Do List" />
            </div>
            <div className="col-lg-4 px-2">
              <Maintenance title="Maintenance" />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 px-2">
              <TenantPayables title="Tenant Payables" />
            </div>
            <div className="col-lg-4 px-2">
              <Calendar title="Calendar" />
            </div>
            <div className="col-lg-4 px-2">
              <Bills title="Bills" />
            </div>
          </div>

          <div className="row">
            {/* <div className="col-lg-4 px-2">
            <Financials title="Financials" />
          </div> */}

            <div className="col-lg-4 px-2">
              <PropertyInfo title="Property Info" />
            </div>
            <div className="col-lg-4 px-2">
              <DashboardPropertyViewing title="Property Viewing" />
            </div>
            <div className="col-lg-4 px-2">
              <DashboardRentalOffers title="Rental Offers" />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 px-2">
              <RentalLeads />
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
