// #newPage
import React from "react";
import AppointmentListItem from "./AppointmentListItem";
import { AppContext } from "../context/settings";

const AppointmentListDetails = (props, filterBy) => {
  const appContext = React.useContext(AppContext);
  const activeFilter = appContext.settings.postsFilter;

  const posts = [
    {
      id: 0,
      date: "22 Nov 2020",
      time: "5:51pm",
      title: "Pipe leak maintenance",
      postType: "Scheduled"
    },
    {
      id: 1,
      date: "21 Nov 2020",
      time: "8:13pm",
      title: "Pay cash to agent",
      postType: "Scheduled"
    },
    
    {
      id: 2,
      date: "21 Nov 2020",
      time: "8:13pm",
      title: "Pay cash to agent",
      postType: "Cancelled"
    },
    
    {
      id: 3,
      date: "21 Nov 2020",
      time: "8:13pm",
      title: "Pay cash to agent",
      postType: "Scheduled"
    },
    
    {
      id: 4,
      date: "21 Nov 2020",
      time: "8:13pm",
      title: "Pay cash to agent",
      postType: "Completed"
    },
    
    {
      id: 5,
      date: "21 Nov 2020",
      time: "8:13pm",
      title: "Pay cash to agent",
      postType: "Completed"
    },
  ];
  var filteredPosts = posts;
  if (activeFilter !== "all") {
    filteredPosts = posts.filter((item) => item.postType.toLowerCase() === activeFilter.toLowerCase());
  }
  if (filteredPosts.length > 0) {
  return (
    <div className="ibox mt-2">
      <div className="ibox-title">
        <h3>Appointments</h3>
      </div>
      <div className="ibox-content minhigh">
      <div className="row">
          <div className="col-sm-12">
          {filteredPosts.map((postItem) => {
            return <AppointmentListItem key={postItem.id} {...postItem} />;
          })}
          </div>
          </div>
      </div>
    </div>
  );
}else {
  return <h2 style={{ textAlign: "center" }}>No Posts found !!!</h2>;
}
};

export default AppointmentListDetails;
