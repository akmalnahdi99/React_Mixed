//TASK under Review
import React from "react";

import Empty from "./Empty";
import OfferListItem from "./OfferListItem";
 

export default function OfferList  ({ offers })  {
 
 
  return (
    <div className="ibox mt-4">
      <div className="ibox-content paddingtop minhigh">
        <div className="viewing-timeline">
          {offers.length > 0 ? (
            offers.map((item, index) => {
              return <OfferListItem key={index} {...item} />;
            })
          ) : (
            <Empty />
          )}
        </div>
      </div>
    </div>
  );
};

 
