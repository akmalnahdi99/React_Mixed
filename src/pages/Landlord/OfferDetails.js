//TASK under Review
import React from "react";



import OfferDetailsCard from "../../components/OfferDetailsCard";
import { useParams } from "react-router-dom";

export default function OffersDetails() {
  var t = useParams();
  var offerId = t.offerId;

  return (
    <div className="wrapper wrapper-content animated fadeInRight py-3 pb-5 ">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-lg-8 mb-3 px-0">
            <OfferDetailsCard offerId={offerId} />
          </div>
        </div>
      </div>
    </div>
  );
}
