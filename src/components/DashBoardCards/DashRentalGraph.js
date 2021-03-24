import React from "react";
import RentalDonut from "../RentalDonut";
import InfoCardItem from "../InfoCardItem";
import EmptyDashBoard from "./../../components/EmptyDashboard";
import { Link } from "react-router-dom";

export default function DashRentalGraph({ title }) {
  const data = [
    {
      title: "Due On: 10/28/2020",
      body: "Rent overdue",
      link: "rentalpayables",
      color: "red",
    },
  ];
  return (
    <div className="ibox">
      <div className="ibox-title">
        <h5>
          <Link Link to="/landlord/bills/rental">
            {title}
          </Link>
        </h5>
      </div>
      <div className="ibox-content">
        <RentalDonut />
        {data.length > 0 ? (
          data.map((item, index) => {
            return <InfoCardItem key={index} title={item.title} body={item.body} color={item.color} link={item.link} />;
          })
        ) : (
          <EmptyDashBoard title={"No Rental Data"} />
        )}
      </div>
    </div>
  );
}
