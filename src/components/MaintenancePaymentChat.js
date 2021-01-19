//TASK under Review
import React from 'react'
import Empty from "./Empty";
import PaymentChatItem from './PaymentChatItem';


const MaintenancePaymentChat = () =>  {
    var data = [
        {
            id: 0,
            datetime: "Mon 25/06/2015 - 06:39 PM",
            name: "Smith Jordan",
            text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
            type: "tenant"
        },
        {
            id: 1,
            datetime: "Tue 27/06/2015 - 06:39 PM",
            name: "Michael Smith",
            text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
            type: "landlord"
        },
        {
            id: 2,
            datetime: "Tue 27/06/2015 - 08:39 PM",
            name: "Smith Jordan",
            text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
            type: "tenant"
        },
      ];
  
  return (
    <div className="ibox">
        <div className="ibox-content minhigh">
        <div className="ibox-title">
            <h3> Oct 23 - Tenant made payment</h3>
        </div>
        
                {data.length > 0 ? (
                    data.map((item, index) => {
                    return <PaymentChatItem key={index} {...item} />;
                    })
                    ) : (
                    <Empty />
                )}
        <div className="row">
            <div className="col-12">
                <form id="contact-form" className="contact-form">
                    <div className="row">
                        <div className="col-11 pr-0">
                            <div className="form-group m-0">
                                <textarea className="form-control textarea" rows="1" name="Comment" id="Message" placeholder="Comment"></textarea>
                            </div>
                        </div>
                        <div className="col-1 pl-4">
                            <div className="form-group">
                                <button type="submit" className="btn pl-0"><i className="fas fa-play-circle fa-lg text-center text-completedtask"></i></button>
                            </div>
                        </div>
                    </div>                           
                </form>
            </div>
        </div>
        </div>
    </div>
  );
}
export default MaintenancePaymentChat;