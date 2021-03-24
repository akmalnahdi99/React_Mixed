// #newPage
import React from "react";
import { Link } from "react-router-dom";
import NoToDo from "../EmptyTodoList";
import InfoCardItem from "../InfoCardItem";

export default function DashAppoinment() {
  const data = [
    {
      title: "Date: 10/28/2020",
      body: "Pipe leak maintenance",
      color: "green",
      link: "appointmentdetails"
    },
    {
      title: "Date: 10/28/2020",
      body: "Pay cash to agent",
      color: "blue",
      link: "appointmentdetails"
    },
    {
      title: "Date: 10/28/2020",
      body: "Meeting in Office",
      color: "yellow",
      link: "appointmentdetails"
    },
  ];
  return (
    <div className="ibox">
      <div className="ibox-title bg-white">
        <h5>
          <Link to="/landlord/appointment">Appointment</Link>
        </h5>
        <div className="ibox-tools">
          <Link to="/landlord/appointment">
            <i className="fas fa-arrow-right"></i>
          </Link>
        </div>
      </div>

      <div className="ibox-content bg-white">
        <ul className="sortable-list connectList agile-list ui-sortable"></ul>
        {data.length > 0 ? (
          data.map((item, index) => 
             <InfoCardItem key={index} title={item.title} body={item.body} color={item.color} link={item.link} />
          )
        ) : (
          <NoToDo />
        )}
      </div>
    </div>
  );
}
    