import React from "react";
import * as ReactBootstrap from "react-bootstrap";
import { Redirect, useParams } from "react-router-dom";
import Empty from "../components/Empty";
import { AppContext } from "../context/settings";
import { getUnitKitItems } from "../utils/landlordHelper";

export default function KitDetailsCard({ title }) {
  var t = useParams();
  var inventoryOf = t.inventoryOf || null;
  var kitOf = t.kitOf || null;
  var appContext = React.useContext(AppContext);
  var storedKitsItems = appContext.settings.kitsData || null;

  if (!inventoryOf || !kitOf) {
    return <Redirect to="/landlord/UnitCheckInOut" />;
  }
 
  const info = getUnitKitItems(storedKitsItems, inventoryOf, kitOf) || [];

  const renderInfo = (table, index) => {
    return (
      <tr key={index}>
        <td>{table.location}</td>
        <td>{table.quantity}</td>
      </tr>
    );
  };

  return (
    <div className="wrapper wrapper-content animated fadeInRight">
      <div className="container-fluid">
        <div className="row m-t-sm justify-content-center">
          <div className="col-lg-9">
            <div className="ibox">
              <div className="ibox-title">
                <h3>{kitOf}</h3>
                <hr />
                <div className="ibox-content">
                  <ReactBootstrap.Table striped bordered hover>
                    <thead>
                      <tr>
                        <th className="text-doorcase3">Area</th>
                        <th className="text-doorcase3">Quantity</th>
                      </tr>
                    </thead>
                    <tbody>{!info ? <Empty title="No Items Found"/> : info.map(renderInfo)}</tbody>
                  </ReactBootstrap.Table>
                  <br />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
