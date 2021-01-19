import React from "react";
import Empty from "./Empty";
import TodoListItem from "./TodoListItem";

const TodoListDetails = () => {
  var notificatins = [
    {
      id: 0,
      date: "2 days ago",
      time: "5:51pm",
      title: "Toilet Repairing Start Today",
      color: "green",
    },
    {
      id: 1,
      date: "2 days ago",
      time: "5:51pm",
      title: "Payment For Rental Due Soon",
      color: "yellow",
    },
    {
      id: 2,
      date: "2 days ago",
      time: "5:51pm",
      title: "Master Bedroom Pipe Burst",
      color: "yellow",
    },
  ];

  return (
    <div className="ibox">
      <div className="ibox-title">
        <h3>To-do List</h3>
      </div>
      <div className="ibox-content minhigh">
        <div className="row">
          <div className="col-sm-12">
            {notificatins.length > 0 ? (
              notificatins.map((item) => {
                return <TodoListItem key={item.id} {...item} />;
              })
            ) : (
              <Empty />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoListDetails;
