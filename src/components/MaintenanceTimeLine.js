//TASK under Review
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {  Modal, ModalHeader, ModalBody, Media } from 'reactstrap';

export default function MaintenanceDetailsList() {
  let history = useHistory();

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  const closeBtn = <button className="close" onClick={toggle}>&times;</button>;

  const RedirectChat = () => {
    history.push("/landlord/MaintenanceChat");
  };
  const RedirectPChat = () => {
    history.push("/landlord/MaintenanceChatPrivate");
  };

  const chatdata = {
    datetime: "Yesterday - 07:32 PM",
    name: "Michael smith",
    text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    type: "tenant",
  };

  var userClassName = "right";
  if (chatdata.type === "landlord") {
    userClassName = "right";
  } else if (chatdata.type  === "tenant") {
    userClassName = "left";
  }

  return (
    <div className="ibox">
      <div className="ibox-content minhigh p-0">
        <div className="inspinia-timeline p-4 px-0">
          <div className="row mb-3">
            <div className="col-8">
              <button className="btn btn-primary mx-1 mt-1" onClick={toggle}><span>Send message to</span></button>
            </div>
            <div className="col-4 pl-0">
              <button
                className="font-bold btn btn-primary align-text-center float-right sticky-top mt-1" >
                <span>Sort <i className="fas fa-redo"></i></span>
              </button>
            </div>


          </div>
          <div className="viewing-timeline">
            <div className="row">
              <div className="col-1 date active p-0">
                <i className="fas fa-circle"></i>
              </div>
              <div className="col-11 content pb-3">
                <div className="row">
                  <div className="col-12">
                    <span style={{ fontSize: "12px" }}>21/10/2020 | 04:23 PM</span>
                    <br />
                    <p className="mt-2">Maintenance is resolved</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="timeline-item">
            <div className="row">
              <div className="col-1 date p-0">
                <i className="fas fa-circle"></i>
              </div>

              <div className="col-11 content pb-3">
                <div className="row" onClick={RedirectChat} style={{ cursor: "pointer" }}>
                  <div className="col-12">
                    <span style={{ fontSize: "12px" }}>21/10/2020 | 03:41 PM</span>
                    <br />
                    <p className="mt-2">Tenant made the payment</p>
                    <div className="chat-discussion minhigh">
                      <div className="chat-message p-0">
                        <div className="row">
                          <div className="col-12">
                            <div className="chat-discussion minhigh p-0">
                              <div className={"chat-message " + userClassName}>
                                <div className="message">
                                  <p className="message-author text-truncate text-completedtask font-title mb-0"> {chatdata.name}</p>
                                  <span className="message-content">{chatdata.text}</span>
                                </div>
                                <span className="message-date"> {chatdata.datetime} </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-10 pr-0 minhigh">
                    <form id="contact-form" className="contact-form">
                      <div className="form-group m-0">
                        <textarea className="form-control textarea" rows="1" name="Comment" id="Message" placeholder="Comment"></textarea>
                      </div>
                    </form>
                  </div>
                  <div className="col-2 pl-2 pr-0 p-0">
                    <div className="form-group">
                      <button type="submit" className="btn pl-0">
                        <i className="fas fa-play-circle fa-lg text-center text-completedtask"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="timeline-item">
            <div className="row">
              <div className="col-1 date p-0">
                <i className="fas fa-circle"></i>
              </div>
              <div className="col-11 content pb-3">
                <div className="row">
                  <div className="col-12">
                    <span style={{ fontSize: "12px" }}>21/10/2020 | 02:11 PM</span>
                    <br />
                    <p className="mt-2">PIC and tenant interacted</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="timeline-item">
            <div className="row">
              <div className="col-1 date p-0">
                <i className="fas fa-circle"></i>
              </div>
              <div className="col-11 content pb-3">
                <div className="row">
                  <div className="col-12">
                    <span style={{ fontSize: "12px" }}>20/10/2020 | 04:22 PM</span>
                    <br />
                    <p className="mt-2">Maintenance team analysed situation and started work</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-10 pr-0 minhigh">
                    <form id="contact-form" className="contact-form">
                      <div className="form-group m-0">
                        <textarea className="form-control textarea" rows="1" name="Comment" id="Message" placeholder="Comment"></textarea>
                      </div>
                    </form>
                  </div>
                  <div className="col-2 pl-2 pr-0 p-0">
                    <div className="form-group">
                      <button type="submit" className="btn pl-0">
                        <i className="fas fa-play-circle fa-lg text-center text-completedtask"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="timeline-item">
            <div className="row">
              <div className="col-1 date p-0">
                <i className="fas fa-circle"></i>
              </div>
              <div className="col-11 content pb-3">
                <div className="row">
                  <div className="col-12">
                    <span style={{ fontSize: "12px" }}>19/10/2020 | 07:21 PM</span>
                    <br />
                    <p className="mt-2">Agent arranged a maintenance team</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-10 pr-0 minhigh">
                    <form id="contact-form" className="contact-form">
                      <div className="form-group m-0">
                        <textarea className="form-control textarea" rows="1" name="Comment" id="Message" placeholder="Comment"></textarea>
                      </div>
                    </form>
                  </div>
                  <div className="col-2 pl-2 pr-0 p-0">
                    <div className="form-group">
                      <button type="submit" className="btn pl-0">
                        <i className="fas fa-play-circle fa-lg text-center text-completedtask"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="timeline-item">
            <div className="row">
              <div className="col-1 date p-0">
                <i className="fas fa-circle"></i>
              </div>
              <div className="col-11 content pb-3">
                <div className="row">
                  <div className="col-12">
                    <span style={{ fontSize: "12px" }}>19/10/2020 | 01:59 PM</span>
                    <br />
                    <p className="pt-2">PIC and agent interacted</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="timeline-item">
            <div className="row">
              <div className="col-1 date p-0">
                <i className="fas fa-circle"></i>
              </div>
              <div className="col-11 content pb-3">
                <div className="row">
                  <div className="col-12">
                    <span style={{ fontSize: "12px" }}>18/10/2020 | 07:06 PM</span>
                    <br />
                    <p className="mt-2">PIC and tenant interacted</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="timeline-item">
            <div className="row">
              <div className="col-1 date p-0">
                <i className="fas fa-circle"></i>
              </div>
              <div className="col-11 content pb-3">
                <div className="row">
                  <div className="col-12">
                    <span style={{ fontSize: "12px" }}>18/10/2020 | 03:14 PM</span>
                    <br />
                    <p className="mt-2">Landlord and tenant interaction</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="timeline-item">
            <div className="row">
              <div className="col-1 date p-0">
                <i className="fas fa-circle"></i>
              </div>
              <div className="col-11 content pb-3 ">
                <div className="row" onClick={RedirectChat} style={{ cursor: "pointer" }}>
                  <div className="col-12">
                    <span style={{ fontSize: "12px" }}>17/10/2020 | 04:05 PM</span>
                    <br />
                    <p className="mt-2">PIC and tenant interacted</p>
                    <div className="chat-discussion minhigh">
                      <div className="chat-message p-0">
                      <div className="row">
                          <div className="col-12">
                            <div className="chat-discussion minhigh p-0">
                              <div className={"chat-message " + userClassName}>
                                <div className="message">
                                  <p className="message-author text-truncate text-completedtask font-title mb-0"> {chatdata.name}</p>
                                  <span className="message-content">{chatdata.text}</span>
                                </div>
                                <span className="message-date"> {chatdata.datetime} </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-10 pr-0 minhigh">
                    <form id="contact-form" className="contact-form">
                      <div className="form-group m-0">
                        <textarea className="form-control textarea" rows="1" name="Comment" id="Message" placeholder="Comment"></textarea>
                      </div>
                    </form>
                  </div>
                  <div className="col-2 pl-2 pr-0 p-0">
                    <div className="form-group">
                      <button type="submit" className="btn pl-0">
                        <i className="fas fa-play-circle fa-lg text-center text-completedtask"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="timeline-item">
            <div className="row">
              <div className="col-1 date p-0">
                <i className="fas fa-circle"></i>
              </div>
              <div className="col-11 content pb-3">
                <div className="row">
                  <div className="col-12">
                    <span style={{ fontSize: "12px" }}>16/10/2020 | 05:46 PM</span>
                    <br />
                    <p className="mt-2">PIC viewed this request</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-10 pr-0 minhigh">
                    <form id="contact-form" className="contact-form">
                      <div className="form-group m-0">
                        <textarea className="form-control textarea" rows="1" name="Comment" id="Message" placeholder="Comment"></textarea>
                      </div>
                    </form>
                  </div>
                  <div className="col-2 pl-2 pr-0 p-0">
                    <div className="form-group">
                      <button type="submit" className="btn pl-0">
                        <i className="fas fa-play-circle fa-lg text-center text-completedtask"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="timeline-item">
            <div className="row">
              <div className="col-1 date p-0">
                <i className="fas fa-circle"></i>
              </div>
              <div className="col-11 content pb-3">
                <div className="row" onClick={RedirectChat} style={{ cursor: "pointer" }}>
                  <div className="col-12">
                    <span style={{ fontSize: "12px" }}>16/10/2020 | 11:39 AM</span>
                    <br />
                    <p className="mt-2">Tenant request for a maintenance</p>
                    <div className="chat-discussion minhigh">
                      <div className="chat-message p-0">
                      <div className="row">
                          <div className="col-12">
                            <div className="chat-discussion minhigh p-0">
                              <div className={"chat-message " + userClassName}>
                                <div className="message">
                                  <p className="message-author text-truncate text-completedtask font-title mb-0"> {chatdata.name}</p>
                                  <span className="message-content">{chatdata.text}</span>
                                </div>
                                <span className="message-date"> {chatdata.datetime} </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-10 pr-0 minhigh">
                    <form id="contact-form" className="contact-form">
                      <div className="form-group m-0">
                        <textarea className="form-control textarea" rows="1" name="Comment" id="Message" placeholder="Comment"></textarea>
                      </div>
                    </form>
                  </div>
                  <div className="col-2 pl-2 pr-0 p-0">
                    <div className="form-group">
                      <button type="submit" className="btn pl-0">
                        <i className="fas fa-play-circle fa-lg text-center text-completedtask"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="modal  inmodal fade" id="additionalinfo" tabindex="-1" role="dialog" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal"><span
                aria-hidden="true">&times;</span><span className="sr-only">Close</span></button>
              <h4 className="modal-title text-completedtask text-left ml-3">Insert new update</h4>
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="col-sm-12">
                  <div className="container">
                    <div className="form-row">
                      <div className="form-group col-9">
                        <input
                          type="text"
                        />
                      </div>
                      <div className="form-group col-3 "><button type="submit" className="btn btn-primary mb-2 full-width">Update post</button></div>

                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
      <Modal isOpen={modal} toggle={toggle} centered={true}>
        <ModalHeader toggle={toggle} close={closeBtn} className="text-completedtask text-left ml-3"> <h3>Send message to</h3></ModalHeader>
        <ModalBody className="pt-0">
          <Media className="mt-1" >
            <Media body className="align-self-center">
              <div className="row justify-content-center">
                <div className="col-12 align-self-center timeline-link p-3" onClick={RedirectPChat} style={{ cursor: "pointer", color: "#000" }}>
                  <div className="media">
                    <img alt="..." src="/imgs/avatar.svg"
                      className="img-fluid rounded-circle align-self-center mr-3" width="50px" />

                    <div className="media-body align-self-center">
                      <span className="m-0">
                        Dr.Sharon
                                                        </span>
                      <span>
                        <i className="fas fa-arrow-right float-right text-completedtask"></i>
                      </span>
                    </div>
                  </div>
                </div>
                <hr />
              </div>
            </Media>
          </Media>
        </ModalBody>
      </Modal>
    </div>
  );
}