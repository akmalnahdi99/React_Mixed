// #newPage
//TASK under Review
import React from "react";

export default function AppointmentDetailsList() {
  const data = {
    Title: "Pipe Leak Maintenance",
    AgentName: "Zhang Lei",
    Category1: "Periodical or Priority maintenance (Plumbing)",
    Category2: "Pay by cash",
    Category3: "Property Inspection",
    Category4: "New Prospect Viewing",
    Date: "29-09-2020",
    Time: "16:33",
    Status: "Scheduled",
    Description: "text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    Agent: [
        "/imgs/avatar.svg"
    ]
};
  return (
    <div className="wrapper wrapper-content animated fadeInRight">
      <div className="container container-xs px-0">
        <div className="ibox">
          <div className="ibox-title minhigh">
            <h3>Appointment Details</h3>
          </div>
          <div className="ibox-content-viewing border-bottom minhigh">
          <div className="row mb-2">
              <div className="col-sm-12">
                <div className="media">
                  <div className="media-body">
                    <h4 className="text-doorcase3">Title</h4>
                    <p className="m-0">{data.Title}</p>
                  </div>
                </div>
                <hr />
              </div>
            </div>
            <div className="row mb-2">
              <div className="col-sm-12">
                <div className="media">
                  <div className="media-body">
                    <h4 className="text-doorcase3">Category of Appointment</h4>
                    <p className="m-0">{data.Category1}</p>
                    <p className="m-0">{data.Category2}</p>
                    <p className="m-0">{data.Category3}</p>
                    <p className="m-0">{data.Category4}</p>
                  </div>
                </div>
                <hr />
              </div>
            </div>
            <div className="row mb-2">
              <div className="col-sm-12">
                <div className="media">
                  <div className="media-body">
                    <h4 className="text-doorcase3">Date</h4>
                    <p className="m-0">{data.Date}</p>
                  </div>
                </div>
                <hr />
              </div>
            </div>
            <div className="row mb-2">
              <div className="col-sm-12">
                <div className="media">
                  <div className="media-body">
                    <h4 className="text-doorcase3">Time</h4>
                    <p className="m-0">{data.Time}</p>
                  </div>
                </div>
                <hr />
              </div>
            </div>
            <div className="row mb-2">
              <div className="col-sm-12">
                <div className="media">
                  <div className="media-body">
                    <h4 className="text-doorcase3">Status of Appointment</h4>
                    <p className="m-0">{data.Status}</p>
                  </div>
                </div>
                <hr />
              </div>
            </div>
            <div className="row mb-2">
              <div className="col-sm-12">
                <div className="media">
                  <div className="media-body">
                    <h4 className="text-doorcase3">Description</h4>
                    <p className="m-0">{data.Description}</p>
                  </div>
                </div>
                <hr />
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12">
                <div className="media">
                  <div className="media-body">
                    <h4 className="text-doorcase3">Agent</h4>
                    <img className="align-self-center mr-3" src={data.Agent} width="100px" alt="Generic placeholder" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}