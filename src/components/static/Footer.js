import React from "react";

const Footer = () => {
  var element = React.useRef(null);
  // React.useEffect(() => {
  //   setTimeout(() => {
  //     document.getElementById("div_copyright").innerHTML = document.getElementById("div_copyright").innerHTML + " " +  new Date().getFullYear() ;
  //   }, 100);
  // }, []);

  return (
    <React.Fragment>
      <div className="footer">
        <div id="div_copyright" className="text-center" ref={element}>
          Copyright by Jann Properties
        </div>
      </div>
    </React.Fragment>
  );
};
export default Footer;
