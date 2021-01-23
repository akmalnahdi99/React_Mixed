/* Need to apply react */

import React from "react";



import { Redirect, useParams } from "react-router-dom";
import { apiCall, allQuickLinks } from "./../../utils/landlordHelper";
import Loading from "../../components/static/Loading";
import { AppContext } from "../../context/settings";

export default function QuickLinks() {
  var p = useParams();
  var cellId = p.cellId;
  cellId = Math.max(Math.min(cellId, 8), 0);

  const appContext = React.useContext(AppContext);
  // const activeUnitId = appContext.settings.activeUnitId;

  const [billItems, set_billItems] = React.useState([]);
  const [unitItems, set_unitItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState([]);
  const [isDone, setIsDone] = React.useState(false);

  React.useEffect(() => {
    var billItemsList = Object.keys(allQuickLinks)
      .filter((x) => allQuickLinks[x].type === "bill")
      .map((x) => allQuickLinks[x]);

    var unitItemsList = Object.keys(allQuickLinks)
      .filter((x) => allQuickLinks[x].type === "unit")
      .map((x) => allQuickLinks[x]);

    set_billItems(billItemsList);
    set_unitItems(unitItemsList);
  }, []);

  async function updateCell(index, Data) {
   
    var key = Data.id;
    setIsLoading(true);
    var response = await apiCall("/units/updateQuickLink/?cellId=" + cellId + "&key=" + key);
    if (response.status) {
    }
    response = await apiCall("/users/getQuickLinks");
    if (response.status) {
      appContext.updateAppContext({ quickAccessList: response.data });
      setIsLoading(false);
      setIsDone(true);
    }
  }

  if (isDone === true) {
    return <Redirect to="/landlord/dashboard" />;
  }

  return isLoading === true ? (
    <Loading />
  ) : (
    <div className="wrapper wrapper-content animated fadeInRight">
      <div className="container">
        <div className="ibox">
          <div className="ibox-title">
            <h3>Bills</h3>
            <hr />
          </div>
          <div className="ibox-content minhigh">
            <div className="row text-left">
              <div className="col-12 align-self-center mt-4">
                {billItems.map((item, index) => {
                  return (
                    <div
                      key={index}
                      onClick={() => {
                        return updateCell(index, item);
                      }}
                      className="btn btn-dashboardicon  btn-default width160 btn-lg m-2"
                    >
                      <img src={item.img} width="30px" alt="" />
                      <br />
                      <span className="mt-5 font-light">{item.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="ibox">
          <div className="ibox-title">
            <h3>Property Info</h3>
            <hr />
          </div>
          <div className="ibox-content minhigh">
            <div className="row text-left">
              <div className="col-12 align-self-center mt-4">
                {unitItems.map((item, index) => {
                  return (
                    <div
                      key={index}
                      onClick={() => {
                        return updateCell(index, item);
                      }}
                      className="btn btn-dashboardicon  btn-default width160 btn-lg m-2"
                    >
                      <img src={item.img} width="30px" alt="" />
                      <br />
                      <span className="mt-5 font-light">{item.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
