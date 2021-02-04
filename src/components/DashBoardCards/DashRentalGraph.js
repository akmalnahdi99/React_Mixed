import React from "react";
import RentalDonut from "../RentalDonut";
import InfoCardItem from "../InfoCardItem";
import { action_level_danger, apiLoadData } from "./../../utils/landlordHelper";
import { Link } from "react-router-dom";
// import { apiCall } from "../../utils/landlordHelper";
import { AppContext } from "../../context/settings";
// import Loading  from "components/static/Loading";
import NoOverdue from "components/EmptyOverDue";
import Loading from "components/static/Loading";

export default function DashRentalGraph({ title }) {
  const [isLoading, setIsLoading] = React.useState(true);
  const [tenantRentalPaymentStats, set_tenantRentalPaymentStats] = React.useState({});
  var appContext = React.useContext(AppContext);
  const activeUnitId = appContext.settings.activeUnitId;

  React.useEffect(() => {
    async function loadTodoList() {
      setIsLoading(true);

      var response = await apiLoadData("loadRentalStatsPerYear", { activeUnitId });
      set_tenantRentalPaymentStats(response);
      setIsLoading(false);
    }
    loadTodoList();

    // eslint-disable-next-line
  }, [activeUnitId]);

  var infoCardData = {
    title: "Overdue Payments",
    body: "",
    address: "/landlord/bills/Rental",
    level: action_level_danger,
  };

  if (tenantRentalPaymentStats) {
    var previousYearNotPaidCount = tenantRentalPaymentStats.previousYearNotPaidCount || 0;
    var overDueCount = tenantRentalPaymentStats.overDueCount || 0;

    if (overDueCount > 0) {
      infoCardData.body = `${overDueCount} overdue payment${overDueCount > 0 ? "s" : ""}`;
    }

    if (previousYearNotPaidCount > 0) {
      infoCardData.title = "Previous Payments";
      if (infoCardData.body !== "") infoCardData.body += ", ";
      infoCardData.body += `You have ${previousYearNotPaidCount} unpaid payment${previousYearNotPaidCount > 0 ? "s" : ""} from previous year`;
    }
  }

  return (
    <div className="ibox dash-box">
      <Link className="dash-link" to="/landlord/bills/rental">
        <div className="ibox-title dash-title">
          <h5>{title}</h5>
        </div>
      </Link>
      <div className="ibox-content">
        {isLoading === true ? (
          <Loading />
        ) : (
          <React.Fragment>
            <RentalDonut {...tenantRentalPaymentStats} />
            {infoCardData.body !== "" ? <InfoCardItem address="/landlord/payables" {...infoCardData} /> : <NoOverdue title="No Overdue" />}
          </React.Fragment>
        )}
      </div>
    </div>
  );
}
