// #newPage
import React from "react";

import { AppContext } from "context/settings";
import InvoiceCard from "./InvoiceCard";
import Empty from "components/Empty";
import { apiCall, apiLoadData } from "utils/landlordHelper";
import Loading from "components/static/Loading";
import { config } from "../../constants";
import RentalDetails from "components/RentalDetails";

export default function Financials() {
  var appContext = React.useContext(AppContext);
  var financials = appContext.settings.unitFinancials;
  var activeUnitId = appContext.settings.activeUnitId;
  const [isLoading, setIsLoading] = React.useState(true);

  var Invoices = [];

  if (financials && financials["Rental"]) {
    Invoices = financials["Rental"].map((invoice, index) => {
      return <InvoiceCard key={index} paymentFor="Rental" payOnline={payOnline} {...invoice} />;
    });
  }

  async function payOnline(paymentFor, payableId) {
    var response = await apiCall(`/units/tenantGetPaymentRecord?unitId=${activeUnitId}&paymentFor=${paymentFor}&payableId=${payableId}`);
    if (response.status) {
      if (response.data && response.data.paymentUrl && response.data.paymentUrl.startsWith(config.paymentUrl)) {
        window.location.href = response.data.paymentUrl;
      }
    }
  }
  React.useEffect(() => {
    async function updateFinancials() {
      setIsLoading(true);
      var financials = await apiLoadData("loadFinancials", { activeUnitId });
      appContext.updateAppContext({ unitFinancials: financials });
      setIsLoading(false);
    }
    updateFinancials();
    // eslint-disable-next-line
  }, [activeUnitId]);

  return (
    <div className="wrapper wrapper-content animated fadeInRight">
      <RentalDetails title="Payable to" />

      {isLoading === true ? <Loading /> : Invoices.length > 0 ? Invoices : <Empty title="No invoices found" />}
    </div>
  );
}
