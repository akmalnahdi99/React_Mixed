import React from "react";
import { useLocation } from "react-router";

export default function NotFoundPublicPage() {
  var t = useLocation();
  console.log("Not found Public page.................................", t);
  return (
    <div className="col-12 d-flex mx-auto p-0 justify-content-center align-items-center w-100 bg-white" style={{ height: "100vh" }}>
      <div className="col-12 m-0 p-2 text-center ">
        {/* <h1 style={{ fontSize: "90px", fontWeight: "500" }}>Page Not found</h1> */}
        <img src="/imgs/404.png" style={{ maxWidth: "250px" }} alt="..." />
      </div>
    </div>
  );
}
