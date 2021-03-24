import React from "react";
import { Redirect, useParams } from "react-router-dom";
import { AppContext } from "../context/settings";
import { filterInventory } from "../utils/landlordHelper";
import InventoryAreaFilter from "../components/InventoryAreaFilter";
import Loading from "../components/static/Loading";
import Empty from "../components/Empty";

export default function InventoryOfRoom() {
  var t = useParams();
  var area = t.area || null;
  const [inventoryOf, set_inventoryOf] = React.useState("CheckIn");
  const [items, set_items] = React.useState(null);
  const [isLoading, set_isLoading] = React.useState(null);

  var appContext = React.useContext(AppContext);
  const activeUnitId = appContext.settings.activeUnitId;
  var storedInventoryItems = appContext.settings.inventoryData || null;

  React.useEffect(() => {
    set_isLoading(true);

    var it = filterInventory(area, inventoryOf, storedInventoryItems);
    if (!it) set_items(null);

    set_items(it);
    set_isLoading(false);
    // eslint-disable-next-line
  }, [activeUnitId]);

  if (!area) {
    return <Redirect to="/landlord/unitInventory" />;
  }

  function updateFilter(newInventoryOf) {
    var it = filterInventory(area, newInventoryOf, storedInventoryItems);
    if (!it) set_items(null);

    set_items(it);
    set_inventoryOf(newInventoryOf);
  }
 
  return isLoading === true ? (
    <Loading />
  ) : (
    <div className="wrapper wrapper-content animated fadeInRight py-5 pb-5">
      <div className="row p-0 justify-content-center pb-0">
        <div className="col-lg-5 px-2">
          <InventoryAreaFilter updateFilter={updateFilter} selectedFilter={inventoryOf} />
          <br />
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-lg-10 col-xs-12 mb-3">
          <div className="row">
            {items && items.length > 0 ? (
          
           
              items.map((item, index) => {
                return (
                  <div key={index} className="col-lg-4 col-md-6 col-sm-12 px-0 mb-3">
                    <div className="container container-xs">
                      <div className="ibox-content minhigh mb-2">
                        <div className="row pt-3">
                                <div className="col-12">
                                  <h4 className="text-doorcase3">Item Name</h4>
                                  <p className="m-0">{item.itemName}</p>
                                </div>
                                
                        </div>
                        <hr />
                        <div className="row">
                                <div className="col-12">
                            <div className="media">
                              <div className="media-body">
                                  <h4 className="text-doorcase3">Quantity</h4>
                                  <p className="m-0">
                                    {item.quantity}
                                    {item.markAddition === true ? <span className="m-0">+</span> : ""}
                                    {item.markOmission === true ? <span className="m-0">-</span> : ""}
                                  </p>
                                </div>
                                <hr />
                              </div>
                            </div>
                        </div>
                        <hr />
                        <div className="row mb-4">
                          <div className="col-md-12">
                            <div className="media">
                              <div className="media-body">
                                <h4 className="text-doorcase3">Model Number</h4>
                                <p className="m-0">{item.itemModel}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <hr />
                        <div className="row">
                          <div className="col-md-12">
                            <div className="demo-gallery">
                              <ul id="lightgallery" className="list-unstyled row">
                                <img src={item.urlPhoto} alt="item " />
                              </ul>
                            </div>
                          </div>
                        </div>
                        <hr />
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="container container-xs justify-content-center ">
                <Empty title="No Items" />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
