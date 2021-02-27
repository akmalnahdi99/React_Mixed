//under review
import React from "react";
import { AppContext } from "../context/settings";
import "slick-carousel/slick/slick.css"; 
export default function PostsListFilter() {
  const appContext =   React.useContext(AppContext);
  const selectedFilter = appContext.settings.postsFilter;
  

  const Filters = [
    {
      id: 0,
      name: "Payment",
      iconClass: "fas fa-hand-holding-usd",
    },
    {
      id: 1,
      name: "Maintenance",
      iconClass: "fas fa-wrench",
    },
    {
      id: 2,
      name: "Offer",
      iconClass: "fas fa-hands-helping",
    },
    {
      id: 3,
      name: "Viewing",
      iconClass: "fas fa-eye",
    },
    {
      id: 4,
      name: "Overdue",
      iconClass: "fas fa-exclamation-triangle",
    },
    {
      id: 5,
      name: "All",
      iconClass: "fas fa-bars",
    },
  ];
   
 React.useEffect(() => {
   
  }, []);

   const filterSelection = (filter) => {
 
     appContext.updateAppContext({postsFilter:filter});
  };

  return (
    <div id="FilterContainer" className="mb-2 mt-2 multiple-items sorterslide" style={{ display: "flex" }}>
      {Filters.map((filter) => {
        return (
          <div key={filter.id} className="widthfitcontent">
            <div   className={selectedFilter === filter.name ? "btnfiltermain btnfilter m-1 current" : "btnfiltermain btnfilter m-1"} value="rental" onClick={() => filterSelection(filter.name)}>
              <i className={filter.iconClass}></i> {filter.name}
            </div>
          </div>
        );
      })}
    </div>
  );
}