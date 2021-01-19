import React from "react";

export default function Empty({ title }) {
  return (
    <div style={{ textAlign: "center" }}>
      <h2>{title || "No Results"}</h2>
    </div>
  );
}
