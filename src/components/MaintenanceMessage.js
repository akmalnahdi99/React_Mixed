// #newPage
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Modal, ModalHeader, ModalBody, Media } from 'reactstrap';

export default function RequestMaintenanceDetails(props) {
  const {
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  const closeBtn = <button className="close" onClick={toggle}>&times;</button>;

  var data = [
    {
      id: 0,
      UnitName: process.env.PUBLIC_URL + "B-3A-03A",
      image: "/imgs/a8.jpg",
      altname: "P.P"
    },
  ];
  return (
<div>
<div className="row">
                  <div className="col-12 minhigh">
                    <form id="contact-form" className="contact-form">
                      <div className="form-group m-0">
                        <textarea className="form-control textarea" rows="7" name="Comment" id="Message" placeholder="Explanation"></textarea>
                      </div>
                    </form>
                  </div>
                  </div>
                      <br/>
                      <Modal isOpen={modal} toggle={toggle} className={className} centered={true}>
        <ModalHeader toggle={toggle} close={closeBtn} className="text-completedtask text-left font-title ml-3"></ModalHeader>
        {data.map((item, index) => {
          return (
            <ModalBody className="pt-0">
              <Media className="mt-1" href="/" >
                <Media body className="align-self-center">
                  <div className="row justify-content-center">
                  <p className="m-0 font-body text-completedtask">Your Request Have Been Sent!</p>
                  </div>
                    <div className="row justify-content-center mt-5">
                      <Link to="/landlord/maintenance">
                      <button className="btn btn-primary">
                        Return to maintenance page
                      </button>
                      </Link>
                    </div>
                </Media>
              </Media>
            </ModalBody>
          );
        })}
      </Modal>  
            <div className="row mb-3">
              <div className="col-md-9 col-xs-12 mb-5">
              <Link to="/" className="mr-2"><button className="btn btn-primary btn-w-m">
              Upload Pictire</button></Link>
              <Link to="/" className="mr-2"><button className="btn btn-primary btn-w-m">
              Upload Video</button></Link>
              </div>
              <div className="col-md-3 col-xs-12">
                <Button className="btn btn-primary btn-w-m" onClick={toggle} style={{width:"100%"}}>
              Send</Button>
              </div>
            </div>
            </div>          

                
    
  );
}
