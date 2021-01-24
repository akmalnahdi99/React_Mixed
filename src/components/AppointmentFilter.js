// #newPage
//under review
import React from "react";
 
import "slick-carousel/slick/slick.css"; 
import Slider from "react-slick";


export default function AppointmentFilter({ activeFilter, updateFilter }) {
 
  const selectedFilter = activeFilter;

  const Filters = [
    {
      id: 0,
      name: "Scheduled",
      iconClass: "fas fa-hand-holding-usd",
    },
    {
      id: 1,
      name: "Completed",
      iconClass: "fas fa-wrench",
    },
    {
      id: 2,
      name: "Cancelled",
      iconClass: "fas fa-exclamation-triangle",
    },
    {
      id: 3,
      name: "all",
      iconClass: "fas fa-bars",
    },
  ];

  React.useEffect(() => {}, []);

  const settings = {
    dots: false,
    infinite: false,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    accessibility: false,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 3,
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
            <div className={selectedFilter === filter.name ? "btnfiltermain btnfilter m-1 current" : "btnfiltermain btnfilter m-1"} value="rental" onClick={() => updateFilter(filter.name)}>
              <i className={filter.iconClass}></i> {filter.name}
            </div>
          </div>
        );
      })}
    </Slider>
  );
}