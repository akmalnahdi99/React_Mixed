import React from "react";
import { Link } from "react-router-dom";

export default function PayableItem({ date, paymentOf, amount, icon, color }) {
  var  colorClassName = "text-darkblue";
  if (color === "red") {
    colorClassName = "text-danger";
  }
 

  return (
    <div className="forum-item">
      <div className="row">
        <div className="col-8">
          <div className="forum-sub-title">
            <Link className="text-doorcase3" to="">
              <img src={icon} width="30px" alt={paymentOf} />
              <span className="ml-2 text-doorcase3">{paymentOf}</span>
              <br />
              <small className={colorClassName}>Due - {date}</small>
            </Link>
          </div>
        </div>
        <div className="col-4">
          <div className="forum-info">
            <span className="views-number">RM {amount}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
