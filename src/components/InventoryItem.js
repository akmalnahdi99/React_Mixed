import React from "react";
import { Link } from "react-router-dom";

export default function InventoryItem({ date, description, images, no }) {
  var imageGallery = null;
  if (images != null) {
    imageGallery = images.map((image, index) => {
      return (
        <li className="col-xs-6 col-sm-4 col-md-2 col-lg-2 p-2" key={index}>
          <Link to={image.urlThumb}>
            <img className="img-responsive" src={image.urlHref} alt="post som" />
          </Link>
        </li>
      );
    });
  }

  return (
    <div>
      <div className="ibox">
        <div className="ibox-content minhigh">
          <div className="row mb-4 pt-3">
            <div className="col-md-12">
              <div className="media">
                <div className="media-body">
                  <div className="col-2 float-right">
                    <h4 className="text-doorcase3">Quantity</h4>
                    <p className="m-0">{no}</p>
                  </div>
                  <h4 className="text-doorcase3">Item Name</h4>
                  <p className="m-0">{date}</p>

                  <hr />
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
                  <h4 className="text-doorcase3">Model Number</h4>
                  <p className="m-0">{description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
