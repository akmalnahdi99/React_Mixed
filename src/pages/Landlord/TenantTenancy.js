//under review
import React from "react";



import TenancyDetails from "../../components/TenancyDetails";
import TenantDetails from "../../components/TenantDetails";
import UserPhotoCard from "../../components/userPhotoCard";
import { AppContext } from "../../context/settings";
import Loading from "../../components/static/Loading";
import { apiCall } from "../../utils/landlordHelper";

export default function TenantTenancyDetails() {
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

  return (
    <div className="wrapper wrapper-content animated fadeInRight py-5 pb-5">
      <div className="container container-xs pb-5">
        <div className="row">
          <React.Fragment>
            <div className="col-md-4 mb-3 px-2">{isLoading === true ? <Loading /> : <UserPhotoCard {...userInfo} />}</div>
            <div className="col-md-8 px-2">
              <TenancyDetails title="Tenancy Details" />
              <TenantDetails title="Tenant's Details" />
            </div>
          </React.Fragment>
        </div>
      </div>
    </div>
  );
}
