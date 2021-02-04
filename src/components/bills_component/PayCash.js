import { AppContext } from "context/settings";
import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Button, Modal, ModalHeader, ModalBody, Media } from "reactstrap";
import { apiCall } from "utils/landlordHelper";

export default function PayCache() {
  var t = useParams();
  var payableId = t.payableId;

  const [modal, setModal] = useState(false);
  var appContext = React.useContext(AppContext);
  var activeUnitId = appContext.settings.activeUnitId;

  async function arrangePaymentApointment() {
    debugger;
    var result = await apiCall("/units/tenantArrangePaymentAppointment?unitId=" + activeUnitId + "&paymentFor=Rental&payableId=" + payableId);
    if (result.status) {
      setModal(true);
    }
  }

  const toggle = () => setModal(!modal);
  const closeBtn = (
    <button className="close" onClick={toggle}>
      &times;
    </button>
  );

 
  return (
    <div className="wrapper wrapper-content animated fadeInRight ">
      <div className="container">
        <div>
          <Modal isOpen={modal} toggle={toggle} centered={true}>
            <ModalHeader toggle={toggle} close={closeBtn} className="text-completedtask text-left font-title ml-3"></ModalHeader>

            <ModalBody className="pt-0">
              <Media className="mt-1" href="/">
                <Media body className="align-self-center">
                  <div className="row justify-content-center">
                    <div className="col-10">
                      <p className="m-0" style={{ color: "black", fontSize: "12px" }}>
                        Thanks for choosing 'Pay to agent' option, our customer service representative will get back to you shortly
                      </p>
                    </div>
                  </div>
                  <div className="row justify-content-center mt-5">
                    <Link to="/landlord/payables">
                      <button className="btn btn-primary">Return to rental payables page</button>
                    </Link>
                  </div>
                </Media>
              </Media>
            </ModalBody>
          </Modal>
          <div className="row text-center">
            <div className="col-12 align-self-center mt-4">
              <Button className="btn btn-dashboardicon  btn-default width180 btn-lg m-2" onClick={() => arrangePaymentApointment()}>
                <img src="/imgs/cash-payment.svg" width="30px" alt="" />
                <br />
                <span>Pay to agent</span>
              </Button>
              <Link to="/landlord/PayRentalCDM" className="btn btn-dashboardicon  btn-default width160 btn-lg m-2">
                <img src="/imgs/atm-machine.svg" width="30px" alt="" />
                <br />
                <span>Pay via CDM</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
