//TASK under Review
import React from "react";
import { useHistory } from "react-router-dom";

export default function MaintenanceDetailsList() {
  let history = useHistory();

  const RedirectPayment = () => {
    history.push("/landlord/MaintenanceChatPayment");
  };
  const RedirectRequest = () => {
    history.push("/landlord/MaintenanceChatRequest");
  };
  const RedirectInteraction = () => {
    history.push("/landlord/MaintenanceChatInteraction");
  };

  const paymentdata = {
    datetime: "Yesterday - 07:32 PM",
    name: "Michael smith",
    text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
  };
  const interactiondata = {
    datetime: "Yesterday - 07:32 PM",
    name: "Smith jordan",
    text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
  };
  const maintenancedata = {
    datetime: "Yesterday - 07:32 PM",
    name: "Michael smith",
    text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
  };

  return (
    <div className="ibox">
      <div className="ibox-content minhigh p-0">
        <div className="inspinia-timeline p-4 px-0">
          <div className="row justify-content-end">
        <button className="font-bold btn btn-primary btn-sort align-text-center float-right">
              <span>Sort <i className="fas fa-redo"></i></span>
            </button>
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
                <div className="row" onClick={RedirectPayment} style={{ cursor: "pointer" }}>
                  <div className="col-12">
                    <span style={{ fontSize: "12px" }}>21/10/2020 | 03:41 PM</span>
                    <br />
                    <p className="mt-2">Tenant made the payment</p>
                    <div className="chat-discussion minhigh">
                      <div className="chat-message p-0">
                        <div className="row">
                          <div className="col-sm-1">
                            <img className="message-avatar mb-2" src="/imgs/a4.jpg" alt="" />
                          </div>
                          <div className="col-sm-11">
                            <div className="message ml-0">
                              <p className="message-author text-truncate text-completedtask font-title mb-0"> {paymentdata.name}</p>
                              <span className="message-content text-truncate">{paymentdata.text}</span>
                            </div>
                            <span className="message-date text-truncate">{paymentdata.datetime} </span>
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
                <div className="row" onClick={RedirectInteraction} style={{ cursor: "pointer" }}>
                  <div className="col-12">
                    <span style={{ fontSize: "12px" }}>17/10/2020 | 04:05 PM</span>
                    <br />
                    <p className="mt-2">PIC and tenant interacted</p>
                    <div className="chat-discussion minhigh">
                      <div className="chat-message p-0">
                        <div className="row">
                          <div className="col-sm-1">
                            <img className="message-avatar mb-2" src="/imgs/a4.jpg" alt="" />
                          </div>
                          <div className="col-sm-11">
                            <div className="message ml-0">
                              <p className="message-author text-truncate text-completedtask font-title mb-0"> {interactiondata.name}</p>
                              <span className="message-content text-truncate">{interactiondata.text}</span>
                            </div>
                            <span className="message-date text-truncate"> {interactiondata.datetime} </span>
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
                <div className="row" onClick={RedirectRequest} style={{ cursor: "pointer" }}>
                  <div className="col-12">
                    <span style={{ fontSize: "12px" }}>16/10/2020 | 11:39 AM</span>
                    <br />
                    <p className="mt-2">Tenant request for a maintenance</p>
                    <div className="chat-discussion minhigh">
                      <div className="chat-message p-0">
                        <div className="row">
                          <div className="col-sm-1">
                            <img className="message-avatar mb-2" src="/imgs/a4.jpg" alt="" />
                          </div>
                          <div className="col-sm-11">
                            <div className="message ml-0">
                              <p className="message-author text-truncate text-completedtask font-title mb-0"> {maintenancedata.name}</p>
                              <span className="message-content text-truncate">{maintenancedata.text}</span>
                            </div>
                            <span className="message-date text-truncate"> {maintenancedata.datetime} </span>
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
    </div>
  );
}