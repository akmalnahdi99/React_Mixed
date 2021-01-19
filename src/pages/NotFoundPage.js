import React from "react";
import { useLocation } from "react-router";

export default function NotFoundPage() {
  var t = useLocation();
  console.log("Not found page.................................", t);
  return (
    <div className="container d-flex mx-auto p-0 justify-content-center align-items-center" style={{ height: "calc(100vh - 160px)" }}>
      <div className="col-12 m-0 p-2 text-center ">
        {/* <h1 style={{ fontSize: "90px", fontWeight: "500" }}>Page Not found</h1> */}
        <img src="/imgs/404.png" style={{maxWidth:"250px"}} alt="..." />
      </div>
    </div>
  );
}
