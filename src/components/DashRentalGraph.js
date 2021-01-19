import React from "react";
import RentalDonut from "./RentalDonut";
import InfoCardItem from "./InfoCardItem";
import NoOverdue from "./EmptyOverdue";

export default function DashRentalGraph() {
  const data = [
    {
      title: "Due On: 10/28/2020",
      body: "Rent overdue",
      color: "red",
    },
  ];
  return (
    <div className="ibox">
      <div className="ibox-title">
        <h5>Rental</h5>
      </div>
      <div className="ibox-content">
        <RentalDonut />
        {data.length > 0 ? (
          data.map((item, index) => {
            return <InfoCardItem key={index} title={item.title} body={item.body} color={item.color} />;
          })
        ) : (
          <NoOverdue />
        )}
      </div>
    </div>
  );
}
