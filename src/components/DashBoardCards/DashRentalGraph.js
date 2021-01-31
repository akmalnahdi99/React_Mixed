import React from "react";
import RentalDonut from "../RentalDonut";
import InfoCardItem from "../InfoCardItem";

import { Link } from "react-router-dom";
// import { apiCall } from "../../utils/landlordHelper";
import { AppContext } from "../../context/settings";
// import Loading  from "components/static/Loading";
import NoOverdue from "components/EmptyOverDue";

export default function DashRentalGraph({ title }) {
  //const [isLoading, setIsLoading] = React.useState(false);
  // const [rentalStats, set_rentalStats] = React.useState(null);
  const appContext = React.useContext(AppContext);

  var tenantRentalPaymentStats = appContext.settings.tenantRentalPaymentStats;

  var infoCardData = {
    title: "Overdue Payments",
    body: "",
    address: "payables",
    color: "red",
  };

  if (tenantRentalPaymentStats) {
    var previousYearNotPaidCount = tenantRentalPaymentStats.previousYearNotPaidCount;
    var overDueCount = tenantRentalPaymentStats.overDueCount;
 
    if (overDueCount > 0) {
      infoCardData.body = `${overDueCount} overdue payment${overDueCount > 0 ? "s" : ""}`;
    }

    if (previousYearNotPaidCount > 0) {
      infoCardData.title = "Previous Payments";
      infoCardData.body += `,You have ${previousYearNotPaidCount} unpaid payment${previousYearNotPaidCount > 0 ? "s" : ""} from previous year`;
    }
  }

  return (
    <div className="ibox">
      <div className="ibox-title">
        <h5>
          <Link to="/landlord/bills/rental">{title}</Link>
        </h5>
      </div>
      <div className="ibox-content">
        {/* {isLoading === true ? (
          <Loading />
        ) : ( */}
        <React.Fragment>
          <RentalDonut {...tenantRentalPaymentStats} />
          {infoCardData.body !== "" ? <InfoCardItem {...infoCardData} /> : <NoOverdue title="No Overdue" />}
        </React.Fragment>
        {/* )} */}
      </div>
    </div>
  );
}
