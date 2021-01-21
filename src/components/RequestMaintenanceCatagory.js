import React from "react";
import { AppContext } from "../context/settings";
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";

export default function RequestMaintenanceFilter() {
  const appContext = React.useContext(AppContext);
  const selectedFilter = appContext.settings.postsFilter;
// #newPage
  const Filters = [
    {
      id: 0,
      name: "Plumbing",
    },
    {
      id: 1,
      name: "Appliance",
    },
    {
      id: 2,
      name: "Household",
    },
    {
      id: 3,
      name: "Electrical",
    },
    {
        id: 3,
        name: "Others",
      },
  ];

  React.useEffect(() => {
    console.log("call useEffect");
  }, []);

  const filterSelection = (filter) => {
    console.log("set :", filter);
    appContext.setPostsFilter(filter);
  };

  const settings = {
    dots: false,
    infinite: false,
    arrows: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 4,
    centerMode: false,
    accessibility: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          centerMode: false,
          dots: false,
          infinite: false,
          arrows: false,
          accessibility: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: false,
          dots: false,
          infinite: false,
          arrows: false,
          accessibility: false,
        },
      },
    ],
  };

  return (
    <Slider {...settings} id="FilterContainer" className="mb-2 mt-2 multiple-items" style={{ display: "flex" }}>
      {Filters.map((filter) => {
        return (
          <div key={filter.id} className="widthfitcontent">
            <div to="" className={selectedFilter === filter.name ? "btnfiltermain btnfilter m-1 current" : "btnfiltermain btnfilter m-1"} value="rental" onClick={() => filterSelection(filter.name)}>
              <i className={filter.iconClass}></i> {filter.name}
            </div>
          </div>
        );
      })}
    </Slider>
  );
}
