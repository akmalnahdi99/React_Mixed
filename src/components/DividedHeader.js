import React from "react";


export default function DividedHeader({ data }) {
  return (
    <div className="viewing-header doorcase-bg minhigh text-white">
      <div className="row">
        {data.map((item, index) => {
          return (
            <React.Fragment key={index}>
              <div className={"col text-truncate " + (index !== data.length-1 ? " border-right" : "")}>
                <small>{item.name}</small>
                <h2 className="font-bold m-t block">{item.value}</h2>
              </div>
              <br />
            </React.Fragment>
          );
        })} 
      </div>
    </div>
  );
}
