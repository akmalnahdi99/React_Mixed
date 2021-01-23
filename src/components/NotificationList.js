import React from "react";
// import { AppContext } from "../context/settings";
import Empty from "./Empty";
import NotificationItem from "./NotificationItem";
import Loading from "./static/Loading";
import { apiCall } from "./../utils/landlordHelper";
import { AppContext } from "../context/settings";

const NotificationList = () => {
 
  const appContext = React.useContext(AppContext); // for reading login status
  const notificationsCount = appContext.settings.notificationsCount || -1;
  const [isLoading, setIsLoading] = React.useState(true);
  const [notifications, setNotifications] = React.useState(null);

  // const {
  //   updateAppContext,
  // } = React.useContext(AppContext);

  React.useEffect(() => {
    async function loadNotificationsWrapper() {
      setIsLoading(true);
      var response = await apiCall("/users/notifications");
      if (response.status) {
        setNotifications(response.data);
        setIsLoading(false);
      }
    }
    loadNotificationsWrapper();

    if (notificationsCount !== 0 && notificationsCount !== -1) {
      setTimeout(async () => {
        var response = await apiCall("/users/markNotificationsAsRead", "POST");
        if (response.status) {
          appContext.updateAppContext({ notificationsCount: 0 });
        }
      }, 100);
    }

    // eslint-disable-next-line
  }, []);

  return (
    <div className="ibox">
      <div className="ibox-title">
        <h3>Notifications </h3>
        <hr />
      </div>

      <div className="ibox-content minhigh">
        <div className="row">
          <div className="col-sm-12">
            {isLoading === true ? (
              <Loading />
            ) : (
              <ul className="sortable-list connectList agile-list ui-sortable">
                {notifications !== null && notifications.length > 0 ? (
                  notifications.map((item, index) => {
                    return <NotificationItem key={index} {...item} />;
                  })
                ) : (
                  <Empty />
                )}
              </ul>
            )}
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationList;
