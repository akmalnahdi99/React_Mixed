import React from "react";
import { Link, useHistory } from "react-router-dom";
import NoOverdue from "../EmptyOverdue";
import InfoCardItem from "../InfoCardItem";

export default function DashTenantPayables() {
  let history = useHistory();

  const RedirectTenantPay = () => {
    history.push("/landlord/tenantpayables");
  };

  const data = [
    {
      title: "Due On: 10/28/2020",
      body: "Rent overdue",
      color: "red",
    },
    {
      title: "Due On: 10/28/2020",
      body: "Rent overdue",
      color: "red",
    },
    {
      title: "Due On: 10/28/2020",
      body: "Rent overdue",
      color: "red",
    },
  ];
  return (
    <div className="ibox illustrated3" onClick={RedirectTenantPay} style={{ cursor: "pointer" }}>
      <div className="ibox-title bg-transparent">
        <h5>Tenant Payables</h5>
        <div className="ibox-tools">
          <Link to=""  >
            <i className="fas fa-arrow-right"></i>
          </Link>
        </div>
      </div>

      <div className="ibox-content bg-transparent">
        <ul className="sortable-list connectList agile-list">
          {data.length > 0 ? (
            data.map((item, index) => {
              return <InfoCardItem key={index} title={item.title} body={item.body} color={item.color} />;
            })
          ) : (
            <NoOverdue />
          )}
        </ul>
      </div>
    </div>
  );
}
