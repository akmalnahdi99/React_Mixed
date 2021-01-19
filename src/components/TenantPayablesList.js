import React from "react";
import Empty from "./Empty";
import TenantPayablesItem from "./TenantPayablesItem";

const TenantPayablesList = () => {
  var notificatins = [
    {
      id: 0,
      date: "2 days ago",
      time: "5:51pm",
      title: "Toilet Repairing Start Today",
    },
    {
      id: 1,
      date: "2 days ago",
      time: "5:51pm",
      title: "Payment For Rental Due Soon",
    },
    {
      id: 2,
      date: "2 days ago",
      time: "5:51pm",
      title: "Master Bedroom Pipe Burst",
    },
  ];

  return (
    <div className="ibox">
      <div className="ibox-title">
        <h3>Tenant Payables</h3>
      </div>
      <div className="ibox-content minhigh">
        <div className="row">
          <div className="col-sm-12">
            {notificatins.length > 0 ? (
              notificatins.map((item) => {
                return <TenantPayablesItem key={item.id} {...item} />;
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

export default TenantPayablesList;
