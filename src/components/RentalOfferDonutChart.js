import React from "react";
import { ChartDonut, ChartLabel } from "@patternfly/react-charts";

export default function RentalOffersDonutChart({ offersData }) {
  var reqOfferData = offersData;
  delete reqOfferData["Accepted"];
  delete reqOfferData["TempAccepted"];

  var total = reqOfferData["New"] + reqOfferData["Negotiation"] + reqOfferData["Rejected"];
  var newP = reqOfferData["New"] / total;
  var negotiationP = reqOfferData["Negotiation"] / total;
  var rejectedP = reqOfferData["Rejected"] / total;

  // Handle zero count case
  var dataList = [
    { x: "New", y: newP, fill: "#206491" },
    { x: "Negotiations", y: negotiationP, fill: "#fbb45c" },
    { x: "Rejected", y: rejectedP, fill: "#cc2a49" },
  ];

  // grey color for total=0, and fake circle
  if (total === 0) {
    dataList = [
      { x: "New", y: 1, fill: "#777777" },
      { x: "Negotiations", y: 0, fill: "#fbb45c" },
      { x: "Rejected", y: 0, fill: "#cc2a49" },
    ];
  }
  // we count how many zero we have
  var a = [...Object.keys(reqOfferData)].map((x) => reqOfferData[x]).filter((x) => x === 0).length;
  var paddAng = 1;
  // we add padding only if
  // we have 2 or 3 zero values
  // or when we have 1 value only or 0 no value
  if (a === 2 || a === 3) {
    paddAng = 0;
  }
  return (
    <div style={{ height: "auto", width: "210px", margin: "0 auto" }}>
      <ChartDonut
        constrainToVisibleArea={true}
        data={dataList}
        donutOrientation="top"
        allowTooltip={false}
        labels={() => null}
        padding={{
          bottom: 0,
          left: 0,
          right: 0,
          top: 0,
        }}
        padAngle={paddAng}
        title={total.toString()}
        titleComponent={<ChartLabel y={110} style={[{ fontWeight: "600", fontSize: 36 }]} />}
        subTitleComponent={<ChartLabel y={140} style={[{ fontSize: "15px", fontWeight: "400", fill: "#666" }]} />}
        innerRadius={80}
        subTitle="Total"
        style={{
          data: {
            fill: (d) => d.slice.data.fill,
          },
        }}
      />
    </div>
  );
}
