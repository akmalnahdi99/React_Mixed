import React from "react";
import Empty from "./Empty";
import ViewingItem from "./ViewingItem";

export default function ViewingList({ title, data }) {
  return (
    <div className="ibox">
      <div className="ibox-content paddingtop minhigh">
        <div className="viewing-timeline">
          <h5 className="text-completedtask text-center">{title}</h5>
          {data.length > 0 ? (
            data.map((item, index) => {
              return <ViewingItem key={index} {...item} />;
            })
          ) : (
            <Empty />
          )}
        </div>
      </div>
    </div>
  );
}
