import Loading from "components/static/Loading";
import { AppContext } from "context/settings";
import React from "react";
import { Link } from "react-router-dom";
import { apiLoadData } from "utils/landlordHelper";
import EmptyDashboard from "../EmptyDashboard";
import InfoCardItem from "./../InfoCardItem";

export default function DashTodoList({ title }) {
  const [isLoading, setIsLoading] = React.useState(true);
  const [todoList, set_todoList] = React.useState([]);
  var appContext = React.useContext(AppContext);
  const activeUnitId = appContext.settings.activeUnitId;

  React.useEffect(() => {
    async function loadTodoList() {
      setIsLoading(true);

      var response = await apiLoadData("tenantTodoList", { activeUnitId });
      if (response && response.length > 1) {
        set_todoList(response.slice(0, 3));
      }
      set_todoList(response);
      setIsLoading(false);
    }
    loadTodoList();

    // eslint-disable-next-line
  }, [activeUnitId]);

  return (
    <div className="ibox illustrated2" style={{ position: "relative" }}>
      <Link to="/landlord/todolist" className="dashboard-link" style={{ zIndex: 2 }}></Link>
      <Link className="dash-link" to="/landlord/todolist">
        <div className="ibox-title dash-title">
          <h5> {title} </h5>
          {/* <div className="ibox-tools">
            <i className="fas fa-arrow-right"></i>
          </div> */}
        </div>
      </Link>

      <div className="ibox-content bg-transparent">
        <ul className="sortable-list connectList agile-list ui-sortable"></ul>
        {isLoading === true ? (
          <Loading />
        ) : (
          <React.Fragment>
            {todoList && todoList.length > 0 ? (
              todoList.map((item, index) => {
                return <InfoCardItem key={index} address="/landlord/todolist" {...item} />;
              })
            ) : (
              <EmptyDashboard title="Nothing todo !" />
            )}
          </React.Fragment>
        )}
      </div>
    </div>
  );
}
