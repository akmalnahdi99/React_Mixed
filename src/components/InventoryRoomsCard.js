import React from "react";
import * as FaIcons from "react-icons/fa";
import { Link } from "react-router-dom";
import { getIcon_UnitRelatedOrDefault, getUnitRoomsPerCategory } from "../utils/landlordHelper";
import Empty from "./Empty";

export default function InventoryRoomsCard({ category, inventoryData }) {
  var rooms = getUnitRoomsPerCategory(category, inventoryData);

  return (
    <div className="ibox-content minhigh350px ">
      <ul className="folder-list">
        {Object.keys(rooms).length > 0 ? (
          Object.keys(rooms).map((item, index) => {
            var roomId = item;
            var roomName = rooms[roomId];

            var icon = getIcon_UnitRelatedOrDefault(roomId);
        
            return (
              <li key={index}>
                <Link to={"/landlord/inventoryOf/" + item}>
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <img src={icon} className="align-self-center mr-2" width="25px" alt={item.name} />
                      {roomName}
                    </div>
                    <FaIcons.FaArrowRight className="float-right fa-xs" />
                  </div>
                </Link>
              </li>
            );
          })
        ) : (
          <Empty title="No Items" />
        )}
      </ul>
    </div>
  );
}
