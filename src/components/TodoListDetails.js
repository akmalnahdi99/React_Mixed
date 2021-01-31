import { AppContext } from "context/settings";
import React from "react";
import { apiLoadData } from "utils/landlordHelper";
import Empty from "./Empty";
import InfoCardItem from "./InfoCardItem";
import Loading from "./static/Loading";
 

export default function TodoListDetails() {
  const [isLoading, setIsLoading] = React.useState(true);
  const [todoList, set_todoList] = React.useState([]);
  var appContext = React.useContext(AppContext);
  const activeUnitId = appContext.settings.activeUnitId;

  React.useEffect(() => {
    async function loadTodoList() {
      setIsLoading(true);
      var response = await apiLoadData("tenantTodoList", { activeUnitId });
      set_todoList(response);
      setIsLoading(false);
    }
    loadTodoList();

    // eslint-disable-next-line
  }, [activeUnitId]);

  return (
    <div className="ibox">
      <div className="ibox-title">
        <h3>To-do List</h3>
      </div>
      <div className="ibox-content minhigh">
        <div className="row">
          <div className="col-sm-12">
            {isLoading === true ? (
              <Loading />
            ) : todoList && todoList.length > 0 ? (
              todoList.map((item) => {
                return <InfoCardItem key={item.id} {...item} />; 
              })
            ) : (
              <Empty title="No items found" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
