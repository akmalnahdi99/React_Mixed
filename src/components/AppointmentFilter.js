import React from "react";
import "slick-carousel/slick/slick.css";

export default function InventoryFilter({ updateFilter, selectedFilter }) {
  const Filters = [
    {
      id: "Scheduled",
      name: "Scheduled",
      iconClass: "fas fa-hand-holding-usd",
    },
    {
      id: "Completed",
      name: "Completed",
      iconClass: "fas fa-wrench",
    },
    {
      id: "Cancelled",
      name: "Cancelled",
      iconClass: "fas fa-exclamation-triangle",
    },
    {
      id: "all",
      name: "all",
      iconClass: "fas fa-bars",
    },
  ];

  React.useEffect(() => {
  
  }, []);

  return (
    <div id="FilterContainer" className="mb-2 mt-2 multiple-items sorterslide" style={{ display: "flex" }}>
      {Filters.map((filter, index) => {
        return (
          <div key={index} className="widthfitcontent">
            <div className={selectedFilter === filter.id ? "btnfiltermain btnfilter m-1 current" : "btnfiltermain btnfilter m-1"} value="rental" onClick={() => updateFilter(filter.id)}>
              <i className={filter.iconClass}></i> {filter.name}
            </div>
          </div>
        );
      })}
    </div>
  );
}
