// #newPage
import React from "react";
import * as ReactBootstrap from "react-bootstrap";

export default function InvoiceTable({ data }) {
 
  var totalAmount = 0;

  var a1 = data.map((x, index) => {
    
    totalAmount =   x.value   ;
    return { SI: index + 1, Itemsdesc: x.item, amount: "RM " + x.value };
  });

  const info = [...a1, { SItotal: "Total", total: "", amounttotal: "RM " + totalAmount }];

  function renderInfo(table, index) {
    return (
      <tr key={index}>
        <td>
          {table.SI}
          <strong>{table.SItotal}</strong>
        </td>
        <td>
          {table.Itemsdesc}
          <strong>{table.total}</strong>
        </td>
        <td>
          {table.amount}
          <strong>{table.amounttotal}</strong>
        </td>
      </tr>
    );
  }

  return (
    <div>
      <br />
      <ReactBootstrap.Table striped bordered hover>
        <thead>
          <tr>
            <th className="text-doorcase3">SI.No</th>
            <th className="text-doorcase3">Items and Description</th>
            <th className="text-doorcase3">Amount</th>
          </tr>
        </thead>
        <tbody>{info.map(renderInfo)}</tbody>
      </ReactBootstrap.Table>
    </div>
  );
}
