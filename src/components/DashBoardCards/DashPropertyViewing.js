import React from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../context/settings";
import UnitViewingChartDonut from "../UnitViewingChartDonut";

export default function DashboardUnitViewing({ title }) {
  const [viewingStats, set_viewingStats] = React.useState({ New: 0, Negotiation: 0, Rejected: 0 });

  const appContext = React.useContext(AppContext);
  const activeUnitId = appContext.settings.activeUnitId;

  React.useEffect(() => {
    set_viewingStats((appContext.settings && appContext.settings.viewingAndOfferStats && appContext.settings.viewingAndOfferStats.viewingStats) || { past30days: 0, today: 0, future: 0 });
    // eslint-disable-next-line
  }, [activeUnitId]);

  const data = [
    { text: "Past 30 days", value: viewingStats["past30day"], className: "fa fa-circle text-completedtask" },
    { text: "Today", value: viewingStats["today"], className: "fa fa-circle text-pendingtask" },
    { text: "Future", value: viewingStats["future"], className: "fa fa-circle text-newtask" },
  ];
  return (
    <div className="ibox">
      <div className="ibox-title">
        <h5>
          <Link to="/landlord/unitviewings">{title}</Link>
        </h5>
        <div className="ibox-tools">
          <Link to="/landlord/unitviewings">
            <i className="fas fa-arrow-right"></i>
          </Link>
        </div>
      </div>
      <React.Fragment>
        <div className="ibox-content">
          <div className="statistic-box mt-0">
            <div className="row text-center justify-content-center">
              <div className="col-lg-12 p-2">
                <UnitViewingChartDonut viewingStats={viewingStats} />
              </div>
            </div>
            <div className="container">
              <div className="row text-center mt-3">
                {data.map((item, index) => {
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
}
