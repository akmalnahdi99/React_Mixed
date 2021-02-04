//TASK under Review
import React from "react";
import { Link } from "react-router-dom";

export default function MaintenanceDetailsList() {
  return (
    <div className="ibox">
      <div className="ibox-content border mb-5 paddingtop">
        <div className="row">
          <div className="col-md-12 mb-2">
            <div className="media">
              <img className="align-self-center mr-3" src="/imgs/avatar.svg" width="40px" alt="Generic placeholder" />
              <div className="media-body align-self-center">
                <h5 className="mt-0 mb-0">
                  <strong>Zheng Wong</strong>
                </h5>
              </div>
            </div>
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <h4>
              <span className="font-light font-body">Status:</span>
              <span className="ml-2 font-body Resolve">In Progress</span>
            </h4>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <span className="font-body">Applied date</span>
            <p className="font-body">
              21/10/2020
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <span className="font-body">Message</span>
            <p className="font-body">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
            </p>
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="demo-gallery mb-0">
              <ul id="lightgallery" className="list-unstyled row">
                <li
                  className="col-xl-3 col-sm-4 col-md-2 col-lg-2 p-2"
                  data-responsive="/imgs/maintenance.jpg"
                  data-src="/imgs/maintenance.jpg"
                >
                  <Link to="">
                    <img className="img-responsive" src="/imgs/maintenance.jpg" alt="" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
