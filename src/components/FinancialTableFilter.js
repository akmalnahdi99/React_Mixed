import React from "react";
 
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";

export default function PostsListFilter({ callBack, selectedMonth }) {
 
  React.useEffect(() => {
    // eslint-disable-next-line
  }, []);

  const Filters = [
    {
      id: 0,
      name: "All",
    },
    {
      id: 1,
      name: "Jan",
    },
    {
      id: 2,
      name: "Feb",
    },
    {
      id: 3,
      name: "Mar",
    },

    {
      id: 4,
      name: "Apr",
    },
    {
      id: 5,
      name: "May",
    },
    {
      id: 6,
      name: "Jun",
    },
    {
      id: 7,
      name: "Jul",
    },
    {
      id: 8,
      name: "Aug",
    },
    {
      id: 9,
      name: "Sep",
    },
    {
      id: 10,
      name: "Oct",
    },
    {
      id: 11,
      name: "Nov",
    },
    {
      id: 12,
      name: "Dec",
    },
  ];

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
        breakpoint: 768,
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
    <Slider {...settings} id="FilterContainer" className="text-center mb-2 mt-2 multiple-items" style={{ display: "flex" }}>
      {Filters.map((filter) => {
        return (
          <div key={filter.id}>
            <div className={selectedMonth === filter.id ? "btnfiltermain btnfilter m-1 current" : "btnfiltermain btnfilter m-1"} value="rental" onClick={() => callBack(filter.id)}>
              {filter.name}
            </div>
          </div>
        );
      })}
    </Slider>
  );
}
