import React from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../context/settings";
import RentalOffersDonutChart from "./RentalOfferDonutChart";

export default function DashboardRentalOffers({ title }) {
  const [offersStats, set_offersStats] = React.useState({ New: 0, Negotiation: 0, Rejected: 0 });

  const appContext = React.useContext(AppContext);
  const activeUnitId = appContext.settings.activeUnitId;

  React.useEffect(() => {
    set_offersStats((appContext.settings && appContext.settings.viewingAndOfferStats && appContext.settings.viewingAndOfferStats.offerStats) || { New: 0, Negotiation: 0, Rejected: 0 });
    // eslint-disable-next-line
  }, [activeUnitId]);

  const legendData = [
    { text: "New", value: offersStats["New"], className: "fa fa-circle text-newtask" },
    { text: "Negotiations", value: offersStats["Negotiation"], className: "fa fa-circle text-pendingtask" },
    { text: "Rejected", value: offersStats["Rejected"], className: "fa fa-circle text-rejectedtask" },
  ];

  return (
    <div className="ibox">
      <div className="ibox-title">
        <h5>
          <Link to="/landlord/offers">{title}</Link>
        </h5>
        <div className="ibox-tools">
          <Link to="/landlord/offers">
            <i className="fas fa-arrow-right"></i>
          </Link>
        </div>
      </div>
      <React.Fragment>
        <div className="ibox-content">
          <div className="statistic-box mt-0">
            <div className="row text-center justify-content-center">
              <div className="col-lg-12 p-2">
                <RentalOffersDonutChart offersData={offersStats} />
              </div>
            </div>
            <div className="container">
              <div className="row text-center mt-3">
                {legendData.map((item, index) => {
                  return (
                    <div key={index} className="col-4 px-2">
                      <ul className="dashlist">
                        <li className="text-truncate">
                          <i className={item.className}></i>
                          &nbsp;<b>{item.value}</b> {item.text}
                        </li>
                      </ul>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    </div>
  );
};
 