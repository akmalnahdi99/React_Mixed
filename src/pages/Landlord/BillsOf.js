//under review
import React from "react";
import { Redirect, useParams } from "react-router-dom";

//TASK put all bills in this page

import BillsUnpaid from "../../components/bills_component/BillsUnpaid";

import InfoWaterDetails from "../../components/propertyInfoComponent/InfoWaterDetails";
import InfoElectricityDetails from "../../components/propertyInfoComponent//InfoElectricityDetails";
import InfoSewageDetails from "../../components/propertyInfoComponent/InfoSewageDetails";
import InfoInternetDetails from "../../components/propertyInfoComponent/InfoInternetDetails";
import InfoCableTvDetails from "../../components/propertyInfoComponent/InfoCableTvDetails";
import InfoGasDetails from "../../components/propertyInfoComponent/InfoGasDetails";
import Loading from "../../components/static/Loading";
import { AppContext } from "../../context/settings";
import { apiCall, apiLoadData, getTenantUnpaidBills   } from "../../utils/landlordHelper";
import RentalPayables from "../../components/bills_component/RentalPayables";
import { Modal, ModalHeader, ModalBody } from "reactstrap";

export default function BillsOf() {
  var t = useParams();
  var billOf = t.billOf;
  const appContext = React.useContext(AppContext);
  const financialData = appContext.settings.unitFinancials;
  const activeUnitId = appContext.settings.activeUnitId;
  const [isLoading, setIsLoading] = React.useState(true);
  const [utilityDetails, setUtilityDetails] = React.useState(true);
  const [unpaidBills, set_unpaidBills] = React.useState([]);
  const [modalData, set_modalData] = React.useState({ modal: false, title: "", message: "", error: false });

  // modal stuff
  const toggle = () => set_modalData({ ...modalData, modal: !modalData.modal });
  const updateModal = (title, message,error, show) => set_modalData({ ...modalData, title, message, error,modal: show }); 

  const closeBtn = (
    <button className="close" onClick={toggle}>
      &times;
    </button>
  );

  React.useEffect(() => {
    async function loadUtilityDetailsWrapper() {
      setIsLoading(true);
      var response = await apiCall("/units/utilityInfo/unitId=" + activeUnitId + "&companyFor=" + billOf);
      if (response.status) {
        setUtilityDetails(response.data);
      }

      var bills = getTenantUnpaidBills(financialData, billOf);
      set_unpaidBills(bills);
      setIsLoading(false);
    }

    loadUtilityDetailsWrapper();
    // eslint-disable-next-line
  }, [activeUnitId]);

  async function updateAfterUpload() {
    var financials = await apiLoadData("loadFinancials", {activeUnitId});
    appContext.updateAppContext({ unitFinancials: financials });

    var bills = getTenantUnpaidBills(financials, billOf);
    set_unpaidBills(bills);
    console.log("the new bills", bills);
  }

  if (!billOf) {
    // if you don't have bill type we redirect back /land/bills/water
    return <Redirect to="/landlord/bills" />;
  }

  const data = [
    {
      key: "ServiceCharges",
      text: "Service Charge",
      icon: "/imgs/money-bag.svg",
      url: "",
    },
    { key: "Insurance", text: "Insurance", icon: "/imgs/insurance.svg", url: "" },
    { key: "QuitRent", text: "Quit Rent", icon: "/imgs/quitrent.svg", url: "" },
    { key: "AssessmentRate", text: "Assessment Rate", icon: "/imgs/assessment.svg", url: "" },
    { key: "Subscription", text: "Subscription Fees", icon: "/imgs/subscription.svg", url: "" },
    { key: "Maintenance", text: "Maintenance", icon: "/imgs/settings.svg", url: "" },
    { key: "Water", text: "Water", icon: "/imgs/water-drop.svg", url: "" },
    { key: "Electricity", text: "Electricity", icon: "/imgs/electricity.svg", url: "" },
    { key: "Sewage", text: "Sewage", icon: "/imgs/sewage.svg", url: "" },
    { key: "Internet", text: "Internet", icon: "/imgs/wifi.svg", url: "" },
    { key: "CableTV", text: "CableTV", icon: "/imgs/tv.svg", url: "" },
    { key: "Gas", text: "Gas", icon: "/imgs/gas.svg", url: "" },
    { key: "Rental", text: "Rental", icon: "/imgs/gas.svg", url: "" },
  ];

  var allowed = false;
  for (var i = 0; i < data.length; i++) {
    if (data[i].key.toUpperCase() === billOf.toUpperCase()) {
      allowed = true;
      break;
    }
  }

  if (!allowed) {
    // if billtype is not exist we go back
    return <Redirect to="/landlord/bills" />;
  }

  var bills = unpaidBills.map((unpaidBill, index) => {
 
    var title = unpaidBill.monthName;
    return (
      <React.Fragment key={index}>
        {billOf === "Water" ? <BillsUnpaid title={title} paymentOf={billOf} {...unpaidBill} updateAfterUpload={updateAfterUpload} updateModal={updateModal} /> : ""}
        {billOf === "Electricity" ? <BillsUnpaid title={title} paymentOf={billOf} {...unpaidBill} updateAfterUpload={updateAfterUpload} updateModal={updateModal} /> : ""}
        {billOf === "Sewage" ? <BillsUnpaid title={title} paymentOf={billOf} {...unpaidBill} updateAfterUpload={updateAfterUpload} updateModal={updateModal} /> : ""}
        {billOf === "Internet" ? <BillsUnpaid title={title} paymentOf={billOf} {...unpaidBill} updateAfterUpload={updateAfterUpload} updateModal={updateModal} /> : ""}
        {billOf === "CableTV" ? <BillsUnpaid title={title} paymentOf={billOf} {...unpaidBill} updateAfterUpload={updateAfterUpload} updateModal={updateModal} /> : ""}
        {billOf === "Gas" ? <BillsUnpaid title={title} paymentOf={billOf} {...unpaidBill} updateAfterUpload={updateAfterUpload} updateModal={updateModal} /> : ""}
      </React.Fragment>
    );
  });

  return isLoading === true ? (
    <Loading />
  ) : (
    <React.Fragment>
      <div className="wrapper wrapper-content animated fadeInRight">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-lg-8 mb-3 px-0">
              {billOf === "Rental" ? (
                <RentalPayables  />
              ) : (
                <React.Fragment  >
                  {billOf === "Water" ? <InfoWaterDetails expand={false} title="Water Rate" {...utilityDetails} /> : ""}
                  {billOf === "Electricity" ? <InfoElectricityDetails expand={false} title="Electricity Rate" {...utilityDetails} /> : ""}
                  {billOf === "Sewage" ? <InfoSewageDetails expand={false} title="Sewage" {...utilityDetails} /> : ""}
                  {billOf === "Internet" ? <InfoInternetDetails expand={false} title="Internet" {...utilityDetails} /> : ""}
                  {billOf === "CableTV" ? <InfoCableTvDetails expand={false} title="Cable TV" {...utilityDetails} /> : ""}
                  {billOf === "Gas" ? <InfoGasDetails expand={false} title="Gas Rate" {...utilityDetails} /> : ""}
                  {bills}
                </React.Fragment>
              )}
            </div>
          </div>
        </div>
      </div>

      <Modal isOpen={modalData.modal} toggle={toggle} className="" centered={true}>
        <ModalHeader toggle={toggle} close={closeBtn} className="text-completedtask text-left font-title ml-3">
          <h3> {modalData.title}</h3>
        </ModalHeader>

        <ModalBody
          className="pt-0"
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          <div style={{ textAlign: "center" }}>
            {modalData.error === false ? (
              <img src="/imgs/check.svg"" style={{ width: "50px", height: "50px" }} alt="..." />
            ) : (
              <img src="/imgs/close.svg" style={{ width: "50px", height: "50px" }} alt="..." />
            )}
          </div>
          <div className="row text-center mt-3">
            <div className="col-12 text-doorcase3">
              <h4>{modalData.message}</h4>
            </div>
          </div>
        </ModalBody>
      </Modal>
    </React.Fragment>
  );
}
