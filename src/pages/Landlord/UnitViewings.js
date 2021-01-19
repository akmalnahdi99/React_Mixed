import React from "react";
 
import ViewingList from "../../components/ViewingList";
import DividedHeader from "../../components/DividedHeader";
import { apiCall } from "../../utils/landlordHelper";
import { AppContext } from "../../context/settings";
import Loading from "../../components/static/Loading";

export default function UnitViewings() {
  const [isLoading, setIsLoading] = React.useState(true);
  const [appointments, set_appointments] = React.useState(null);

  const appContext = React.useContext(AppContext);
  const activeUnitId = appContext.settings.activeUnitId;

  React.useEffect(() => {
    async function loadUserInfoAndTenancyDetails() {
      setIsLoading(true);

      var response = await apiCall("/units/Appointments/" + activeUnitId);

      if (response.status) {
        set_appointments(response.data);
      }
      setIsLoading(false);
    }
    loadUserInfoAndTenancyDetails();
    // eslint-disable-next-line
  }, [activeUnitId]);

  var headerData = [];
  var TodayAppointments = [];
  var PastAppointments = [];
  //  var FutureAppointments = [];

  if (appointments !== null) {
    headerData = [
      { name: "Past 30 days", value: appointments.past30day.length },
      { name: "Today", value: appointments.today.length },
      { name: "Future", value: appointments.future.length },
    ];
    TodayAppointments = appointments.today;
    PastAppointments = appointments.past30day;
    // FutureAppointments = appointments.future;
  }

  return (
    <div className="wrapper wrapper-content animated fadeInRight py-5 pb-5">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-lg-8 mb-3 px-0">
            <div className="row">
              <div className="col-sm-12">
                <DividedHeader data={headerData} />
              </div>
              <div className="col-sm-12 mt-4">
                {isLoading === true ? (
                  <Loading />
                ) : (
                  <React.Fragment>
                    <ViewingList title="Viewing Today" data={TodayAppointments} />
                    <ViewingList title="Past Viewing" data={PastAppointments} />
                  </React.Fragment>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
