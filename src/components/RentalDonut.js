//under review
import React from "react";
import { ChartDonut, ChartLabel } from "@patternfly/react-charts";
 


export default function RentalDonut({ paidCount, notPaidCount, previousYearNotPaidCount }) {
  //TASK pls put colors in variables here example : var red = #329f9d
  
  var t = Array(12);
       for (let i = 0; i < 12; i++) {
         t[i] = "future";
       }

  for (let i = 0; i < paidCount; i++) {
    t[i] = "paid";
  }

  for (let i = paidCount; i < notPaidCount + paidCount; i++) {
    t[i] = "due";
  }

  for (let i = notPaidCount + paidCount; i < 12; i++) {
    t[i] = "future";
  }

  var paid = paidCount  ;

  return (
    <div style={{ height: "auto", width: "210px", margin: "0 auto" }}>
      <ChartDonut
        allowTooltip={false}
        constrainToVisibleArea={true}
        data={[
          { x: "Month 1", y: 8.33, status: t[0] },
          { x: "Month 2", y: 8.33, status: t[1] },
          { x: "Month 3", y: 8.33, status: t[2] },
          { x: "Month 4", y: 8.33, status: t[3] },
          { x: "Month 5", y: 8.33, status: t[4] },
          { x: "Month 6", y: 8.33, status: t[5] },
          { x: "Month 7", y: 8.33, status: t[6] },
          { x: "Month 8", y: 8.33, status: t[7] },
          { x: "Month 9", y: 8.33, status: t[8] },
          { x: "Month 10", y: 8.33, status: t[9] },
          { x: "Month 11", y: 8.33, status: t[10] },
          { x: "Month 12", y: 8.33, status: t[11] },
        ]}
        donutOrientation="top"
        labels={() => null}
        padding={{
          bottom: 0,
          left: 0,
          right: 0,
          top: 0,
        }}
        title={(paid || 0) + "/"}
        titleComponent={<ChartLabel y={115} x={100} style={[{ fontWeight: "600", fontSize: 40 }]} />}
        subTitle="12"
        subTitleComponent={<ChartLabel y={130} x={130} style={[{ fontWeight: "400", fontSize: 30 }]} />}
        innerRadius={80}
        style={{
          data: {
            fill: (d) => {
              if (d.slice.data.status === "paid") return "#329f9d";
              if (d.slice.data.status === "due") return "#cc2a49";
              if (d.slice.data.status === "future") return "#c2c8c5";
            },
          },
        }}
      />
    </div>
  );
}
