import React from 'react';
import { ChartDonut, ChartLabel } from '@patternfly/react-charts';

const DonutChart = () => {
// 
  return (
    <div style={{ height: 'auto',  width: '210px', margin:'0 auto' }}>
    <ChartDonut
      constrainToVisibleArea={true}
      data={[{ x: 'New', y: 1, fill: "#206491" }, { x: 'In Progress', y: 2, fill: "#fbb45c" }, { x: 'Resolved', y: 5, fill: "#329f9d" }]}
      donutOrientation="top"
      allowTooltip={false}
      labels={() => null}
      padding={{
        bottom: 0,
        left: 0,
        right: 0,
        top: 0
      }}
      title="10"
      titleComponent={ <ChartLabel y={110} style={[{ fontWeight: '600',  fontSize: 36 }]} /> }
      subTitleComponent={<ChartLabel y={140} style={[{fontSize: '15px', fontWeight: '400', fill: '#666'}]} />}
      innerRadius={80}
      subTitle="Total"
      style={{
        data: {
          fill: (d) => d.slice.data.fill
        }
      }}
    />
  </div>
  )
}

export default DonutChart
