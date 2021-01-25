import React, { useState } from "react";
import PostsList from "../../components/PostsList";
import PostsListFilter from "../../components/PostsListFilter";
import InlineUnitInfoCard from "../../components/InlineUnitInfoCard";
import * as FaIcons from "react-icons/fa";

import { Button, Modal, ModalHeader, ModalBody, Media } from "reactstrap";
import { AppContext } from "../../context/settings";
import { loadFinancials } from "../../utils/landlordHelper";
import Loading from "../../components/static/Loading";
import { Link } from "react-router-dom";

export default function Activity(props) {
  const { className } = props;

  const {
    settings,
    settings: {
      userInfo: { units },
    },
    updateAppContext,
  } = React.useContext(AppContext);

  // const [data, setData] = React.useState(null);

  const [modal, setModal] = useState(false);
  const [activeUnitId, set_activeUnitId] = useState(settings.activeUnitId);
  const [isLoading, setIsLoading] = useState(false);

  // toggle modal
  const toggle = () => setModal(!modal);
  const closeBtn = (
    <button className="close" onClick={toggle}>
      &times;
    </button>
  );

  React.useEffect(() => {
    // async function loadFinancialsWrapper() {
    // }
    // loadFinancialsWrapper();
    // eslint-disable-next-line
  }, [activeUnitId]);

  async function setActiveUnit(unitId) {
    set_activeUnitId(unitId);
    setModal(false);

    setIsLoading(true);

    var financials = {};

    // var response2 = await apiCall("/units/AppointmentsAndOffersStats/?unitId=" + unitId);
    // if (response2.status) {
    //   stats = response2.data;
    // }

    financials = await loadFinancials(unitId);
  
    // await new Promise((r) => setTimeout(r, 4000));
    //updateAppContext({ unitFinancials: {}, viewingAndOfferStats:{} });

    updateAppContext({ unitFinancials: financials, viewingAndOfferStats: null, activeUnitId: unitId }, ["conditionReports", "inventoryData", "metersData", "kitsData"]);

    setIsLoading(false);
  }

  return isLoading === true ? (
    <Loading />
  ) : (
    <React.Fragment>
      <div className="wrapper wrapper-content py-4 animated fadeInRight bg-white">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="row justify-content-center">
                <div className="col-10 px-2">
                  <InlineUnitInfoCard />
                </div>
                <div className="col-2 px-2">
                  <Button className="btn btn-primary btn-circle mt-3 float-right btnsvg" onClick={toggle}>
                    <FaIcons.FaExchangeAlt />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal isOpen={modal} toggle={toggle} className={className} centered={true}>
        <ModalHeader toggle={toggle} close={closeBtn} className="text-completedtask text-left font-title ml-3">
          Select Property
        </ModalHeader>
        {units &&
          units.map((unit, index) => {
            return (
              <ModalBody
                key={index}
                className="pt-0"
                onClick={(e) => {
                  e.preventDefault();
                  setActiveUnit(unit.id);
                }}
              >
                <Media className="mt-1" style={{ cursor: "pointer" }}>
                  <Media left middle>
                    <Media className="img-fluid rounded-border align-self-center mr-3" style={{ width: "50px", height: "50px" }} object src={unit.urlThumb} alt={unit.name} width="50px" />
                  </Media>
                  <Media body className="align-self-center">
                    <Media heading className="m-0 text-completedtask">
                      {unit.name}
                      <span>
                        <i className="fas fa-arrow-right fa-xs float-right"></i>
                      </span>
                    </Media>
                    <p className="m-0 font-body text-completedtask">{unit.buildingName} 11</p>
                  </Media>
                </Media>
              </ModalBody>
            );
          })}
      </Modal>

      <div className="wrapper wrapper-content animated fadeInRight py-3 mb-0 gray-bg" style={{ borderBottom: "1px solid #fff" }}>
        <div className="row p-0 justify-content-center">
          <div className="col-lg-8 px-2">
            <PostsListFilter />
          </div>
        </div>
      </div>

      <div className="wrapper wrapper-content animated pt-0 fadeInRight">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-md-8 px-0">
              <PostsList />
            </div>
          </div>
        </div>
      </div>
      <Link to="./dashboard" className="float btn-primary">
        <FaIcons.FaGripHorizontal className="my-float" />
      </Link>
    </React.Fragment>
  );
}
