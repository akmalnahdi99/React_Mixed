import React from "react";

export default function NoOverdue({ title }) {
  return (
    <div style={{ textAlign: "center" }}>
      <h2 className="ibox-content sortable-list connectList agile-list ui-sortable minhigh p-3 font-body" style={{ background: "#fafafb" }}>
        <strong>No Overdue</strong>
      </h2>
    </div>
  );
}