import React from "react";
import { Link } from "react-router-dom";
import NoToDo from "./../../components/EmptyTodoList";
import InfoCardItem from "./../InfoCardItem";

export default function DashTodoList() {
  const data = [
    {
      title: "Due On: 10/28/2020",
      body: "Good stuff",
      color: "red",
    },
    {
      title: "Due On: 10/28/2020",
      body: "Good stuff",
      color: "green",
    },
    {
      title: "Due On: 10/28/2020",
      body: "Rent overdue",
      color: "green",
    },
  ];
  return (
    <div className="ibox illustrated2">
      <div className="ibox-title bg-transparent">
        <h5>
          <Link to="/landlord/todolist">To-do List</Link>
        </h5>
        <div className="ibox-tools">
          <Link to="/landlord/todolist">
            <i className="fas fa-arrow-right"></i>
          </Link>
        </div>
      </div>

      <div className="ibox-content bg-transparent">
        <ul className="sortable-list connectList agile-list ui-sortable"></ul>
        {data.length > 0 ? (
          data.map((item, index) => {
            return <InfoCardItem key={index} title={item.title} body={item.body} color={item.color} />;
          })
        ) : (
          <NoToDo />
        )}
      </div>
    </div>
  );
}
