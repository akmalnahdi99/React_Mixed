import React from "react";
import RentalDonut from "../RentalDonut";
import InfoCardItem from "../InfoCardItem";

import { Link } from "react-router-dom";
import { getTenantRentalPaymentStats } from "../../utils/landlordHelper";
import { AppContext } from "../../context/settings";

export default function DashRentalGraph({ title }) {
  var data = {
    title: "Previous Payments",
    body: "",
    address: "payables",
    color: "red",
  };

  const appContext = React.useContext(AppContext);
  var financialData = appContext.settings.unitFinancials;
  const result = getTenantRentalPaymentStats(financialData);

  if (result) {
    var previousNotPaidCount = result.previousNotPaidCount;

    if (previousNotPaidCount > 0) {
      data.body = `You have ${previousNotPaidCount} payment${previousNotPaidCount > 0 ? "s" : ""} from previous year`;
    }
  }

  return (
    <div className="ibox">
      <div className="ibox-title">
        <h5>
          <Link  to="/landlord/bills/rental">
            {title}
          </Link>
        </h5>
      </div>
      <div className="ibox-content">
        <RentalDonut {...result} />
        {data.body !== "" ? <InfoCardItem {...data} /> : ""}
      </div>
    </div>
  );
}
