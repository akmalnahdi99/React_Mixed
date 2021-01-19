import React from "react";
import ChartDonut from "../components/DonutChart";

export default function DashChart({ data }) {
  // const total = data[0].value + data[1].value + data[2].value;
  
  return (
    <React.Fragment>
        <div className="ibox-content">
          <div className="statistic-box mt-0">
            <div className="row text-center justify-content-center">
              <div className="col-lg-12 p-2">
                <ChartDonut />
              </div>
            </div>
            <div className="container">
              <div className="row text-center mt-3">
                {data.map((item, index) => {
                  return (
                    <div key={index} className="col-4 px-2">
                      <ul className="dashlist">
                        <li className="text-truncate">
                          <i className={item.className}></i>
                          &nbsp;<b>{item.value}</b> {item.text}
                        </li>
                      </ul>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
    </React.Fragment>
  );
}
