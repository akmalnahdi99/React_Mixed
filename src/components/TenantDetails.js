import React from "react";
import { AppContext } from "../context/settings";
import { apiCall } from "../utils/landlordHelper";
import Loading from "./static/Loading";

const TenantDetails = ({ title }) => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [userInfo, setUserInfo] = React.useState(null);

  const appContext = React.useContext(AppContext);
  const activeUnitId = appContext.settings.activeUnitId;

  React.useEffect(() => {
    async function loadUserInfoAndTenancyDetails() {
      setIsLoading(true);

      var response = await apiCall("/units/tenantInfo/" + activeUnitId);
      if (response.status) {
        setUserInfo(response.data);
      }
      setIsLoading(false);
    }
    loadUserInfoAndTenancyDetails();
    // eslint-disable-next-line
  }, [activeUnitId]);

  var details = null;
  if (isLoading === false && userInfo !== null) {
    details = [
      {
        key: "Full Name",
        value: userInfo.userName,
      },
      {
        key: "Phone Number",
        value: userInfo.phoneNumber,
      },
      {
        key: "NRIC No.",
        value: userInfo.nricNumber,
      },
      {
        key: "Email",
        value: userInfo.email,
      },
      {
        key: "Age",
        value: userInfo.age,
      },
      {
        key: "Gender",
        value: userInfo.gender,
      },
      {
        key: "Nationaility",
        value: userInfo.nationality,
      },
      {
        key: "Passport Number",
        value: userInfo.passportNumber,
      },
      {
        key: "Occupation",
        value: userInfo.occupation,
      },
      {
        key: "Company Name",
        value: userInfo.companyName,
      },
      {
        key: "Spouse",
        value: userInfo.spouse,
      },
      {
        key: "Children",
        value: userInfo.children,
      },
      {
        key: "Pets",
        value: userInfo.pets,
      },
    ];
  }

  return (
    <div className="ibox ">
      <div className="ibox-title ">
        <h5>{title}</h5>
      </div>
      <div className="ibox-content">
        <div className="row text-left">
          <div className="col-12">
            {isLoading === true ? (
              <Loading />
            ) : (
              details.map((item, index) => {
                return (
                  <React.Fragment key={index}>
                    <h5 className="font-bold text-doorcase3 ">{item.key}</h5>
                    <span className="mb-3 font-normal">{item.value || "N/A"}</span>
                    <hr />
                  </React.Fragment>
                );
              })
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TenantDetails;
