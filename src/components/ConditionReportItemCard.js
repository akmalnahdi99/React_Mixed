//TASK under Review
import React from "react";
export default function ConditionReportItemCard({ data }) {
  var imageGallery = null;

  if (data.urlThumbs != null) {
    imageGallery = data.urlThumbs.map((url, index) => {
      return (
        <li className="col-xs-6 col-sm-4 col-md-2 col-lg-2 p-2" key={index}>
          <div>
            <img className="img-responsive" src={url} style={{ width: "120px", height: "75px" }} alt="..." />
          </div>
        </li>
      );
    });
  }

  return (
    <div className="ibox-content minhigh mb-3">
      <div className="row mb-4 pt-3">
        <div className="col-md-12">
          <div className="media">
            <div className="media-body">
              <h4 className="text-doorcase3">Date of condition</h4>
              <p className="m-0">{data.dateOfCondition}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="demo-gallery">
            <ul id="lightgallery" className="list-unstyled row">
              {imageGallery}
            </ul>
          </div>
        </div>
      </div>
      <hr />
      <div className="row mb-4">
        <div className="col-md-12">
          <div className="media">
            <div className="media-body">
              <h4 className="text-doorcase3">Description of condition</h4>
              <p className="m-0">{data.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
