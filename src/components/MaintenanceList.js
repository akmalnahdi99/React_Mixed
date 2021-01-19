//TASK under Review
import React from "react";
import Empty from "./Empty";
import MaintenanceListItem from "./MaintenanceListItem";

const MaintenanceList = () => {
  var data = [
    {
      id: 0,
      date: "23/10/2020",
      category: "Plumbing",
      status: "resolved",
      applydate: "XX-XX-XXXX",
      media: "image",
      images: [
        {
          urlThumb: "https://sachinchoolur.github.io/lightgallery.js/static/img/thumb-13.jpg",
          urlHref: "https://sachinchoolur.github.io/lightgallery.js/static/img/thumb-13.jpg",
        },
        {
          urlThumb: "https://sachinchoolur.github.io/lightgallery.js/static/img/thumb-13.jpg",
          urlHref: "https://sachinchoolur.github.io/lightgallery.js/static/img/thumb-13.jpg",
        },
        {
          urlThumb: "https://sachinchoolur.github.io/lightgallery.js/static/img/thumb-13.jpg",
          urlHref: "https://sachinchoolur.github.io/lightgallery.js/static/img/thumb-13.jpg",
        },
      ],
    },
    {
      id: 1,
      date: "23/10/2020",
      category: "Appliance",
      status: "new",
      applydate: "XX-XX-XXXX",
      media: "image",
      images: [
        {
          urlThumb: "https://sachinchoolur.github.io/lightgallery.js/static/img/thumb-13.jpg",
          urlHref: "https://sachinchoolur.github.io/lightgallery.js/static/img/thumb-13.jpg",
        },
        {
          urlThumb: "https://sachinchoolur.github.io/lightgallery.js/static/img/thumb-13.jpg",
          urlHref: "https://sachinchoolur.github.io/lightgallery.js/static/img/thumb-13.jpg",
        },
        {
          urlThumb: "https://sachinchoolur.github.io/lightgallery.js/static/img/thumb-13.jpg",
          urlHref: "https://sachinchoolur.github.io/lightgallery.js/static/img/thumb-13.jpg",
        },
      ],
    },
    {
      id: 2,
      date: "23/10/2020",
      category: "Household",
      status: "new",
      applydate: "XX-XX-XXXX",
      media: "video",
      images: [
        {
          urlThumb: "https://sachinchoolur.github.io/lightgallery.js/static/img/thumb-13.jpg",
          urlHref: "https://sachinchoolur.github.io/lightgallery.js/static/img/thumb-13.jpg",
        },
        {
          urlThumb: "https://sachinchoolur.github.io/lightgallery.js/static/img/thumb-13.jpg",
          urlHref: "https://sachinchoolur.github.io/lightgallery.js/static/img/thumb-13.jpg",
        },
        {
          urlThumb: "https://sachinchoolur.github.io/lightgallery.js/static/img/thumb-13.jpg",
          urlHref: "https://sachinchoolur.github.io/lightgallery.js/static/img/thumb-13.jpg",
        },
      ],
    },
    {
      id: 3,
      date: "19/10/2020",
      category: "Plumbing",
      status: "inprogress",
      applydate: "XX-XX-XXXX",
      media: "image",
      images: [
        {
          urlThumb: "https://sachinchoolur.github.io/lightgallery.js/static/img/thumb-13.jpg",
          urlHref: "https://sachinchoolur.github.io/lightgallery.js/static/img/thumb-13.jpg",
        },
        {
          urlThumb: "https://sachinchoolur.github.io/lightgallery.js/static/img/thumb-13.jpg",
          urlHref: "https://sachinchoolur.github.io/lightgallery.js/static/img/thumb-13.jpg",
        },
        {
          urlThumb: "https://sachinchoolur.github.io/lightgallery.js/static/img/thumb-13.jpg",
          urlHref: "https://sachinchoolur.github.io/lightgallery.js/static/img/thumb-13.jpg",
        },
      ],
    },
    {
      id: 4,
      date: "23/10/2020",
      category: "Electrical",
      status: "in progress",
      applydate: "XX-XX-XXXX",
      media: "video",
      images: [
        {
          urlThumb: "https://sachinchoolur.github.io/lightgallery.js/static/img/thumb-13.jpg",
          urlHref: "https://sachinchoolur.github.io/lightgallery.js/static/img/thumb-13.jpg",
        },
        {
          urlThumb: "https://sachinchoolur.github.io/lightgallery.js/static/img/thumb-13.jpg",
          urlHref: "https://sachinchoolur.github.io/lightgallery.js/static/img/thumb-13.jpg",
        },
        {
          urlThumb: "https://sachinchoolur.github.io/lightgallery.js/static/img/thumb-13.jpg",
          urlHref: "https://sachinchoolur.github.io/lightgallery.js/static/img/thumb-13.jpg",
        },
      ],
    },
  ];

  return (
    <div className="ibox mt-4">
      <div className="ibox-content paddingtop minhigh">
        <div className="viewing-timeline">
          {data.length > 0 ? (
            data.map((item, index) => {
              return <MaintenanceListItem key={index} {...item} />;
            })
          ) : (
            <Empty />
          )}
        </div>
      </div>
    </div>
  );
};

export default MaintenanceList;
