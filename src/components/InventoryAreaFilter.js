import React from "react";
import "slick-carousel/slick/slick.css";

export default function InventoryFilter({ updateFilter, selectedFilter }) {
  const Filters = [
    {
      id: "CheckIn",
      name: "Check In",
    },
    {
      id: "Additions",
      name: "Addition",
    },
    {
      id: "Omissions",
      name: "Omission",
    },
    {
      id: "CheckOut",
      name: "Check Out",
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
