//TASK under Review
import React from "react";

export default function InteractionChatItem({ datetime, name, text, type }) {
  var userClassName = "right";
  if (type === "landlord") {
    userClassName = "right";
  } else if (type === "tenant") {
    userClassName = "left";
  }
  return (
    <div className="row">
      <div className="col-12">
        <div className="chat-discussion minhigh py-0">
          <div className={"chat-message " + userClassName}>
            <img className="message-avatar" src="/imgs/a4.jpg" alt="" />
            <div className="message">
              <p className="message-author text-truncate text-completedtask font-title mb-0"> {name}</p>
              <span className="message-content">{text}</span>
            </div>
            <span className="message-date"> {datetime} </span>
          </div>
        </div>
      </div>
    </div>
  );
}
