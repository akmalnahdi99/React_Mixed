import React from "react";

import OfferList from "../../components/OfferList";
import DividedHeader from "../../components/DividedHeader";
import { AppContext } from "../../context/settings";
import { apiCall } from "../../utils/landlordHelper";
import Loading from "../../components/static/Loading";

export default function Offers() {
  const [isLoading, setIsLoading] = React.useState(true);
  const [offers, seOffers] = React.useState(null);

  const appContext = React.useContext(AppContext);
  const activeUnitId = appContext.settings.activeUnitId;

  React.useEffect(() => {
    async function loadUserInfoAndTenancyDetails() {
      setIsLoading(true);

      var response = await apiCall("/units/offers/" + activeUnitId);

      if (response.status) {
        seOffers(response.data);
      }
      setIsLoading(false);
    }
    loadUserInfoAndTenancyDetails();
    // eslint-disable-next-line
  }, [activeUnitId]);

  var headerData = [];
  if (offers !== null) {
    headerData = [
      { name: "New", value: offers.filter((x) => x.status.toLocaleLowerCase() === "new".toLocaleLowerCase()).length },
      { name: "Accepted", value: offers.filter((x) => x.status.toLocaleLowerCase() === "accepted".toLocaleLowerCase() || x.status.toLocaleLowerCase() === "tempAccepted".toLocaleLowerCase()).length },
      { name: "Negotiations", value: offers.filter((x) => x.status.toLocaleLowerCase() === "negotiation".toLocaleLowerCase()).length },
      { name: "Rejected", value: offers.filter((x) => x.status.toLocaleLowerCase() === "rejected".toLocaleLowerCase()).length },
    ];
  }

  return (
    <div className="wrapper wrapper-content animated fadeInRight py-5 pb-5">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-lg-8 mb-3 px-0">
            {isLoading === true ? (
              <Loading />
            ) : (
              <React.Fragment>
                <DividedHeader data={headerData} />
                <OfferList offers={offers} />
              </React.Fragment>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
