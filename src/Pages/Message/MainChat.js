import React from "react";

const MainChat = () => {
  return (
    <>
      <div class="p-3 d-flex align-items-center  border-bottom osahan-post-header">
        <div class="font-weight-bold mr-1 p-1 overflow-hidden">
          <div class="text-truncate">Carl Jenkins</div>
          <div class="small text-truncate overflow-hidden text-black-50">
            Askbootstap.com - Become a Product Manager with super power
          </div>
        </div>
      </div>
      <div class="osahan-chat-box p-3 border-top border-bottom bg-light">
        <div class="d-flex align-items-center osahan-post-header">
          <div class="dropdown-list-image mr-3 mb-auto">
            <img class="rounded-circle" src="img/p1.png" alt="" />
          </div>
          <div class="mr-1">
            <div class="text-truncate h6 mb-3">Carl Jenkins</div>
            <p>Hi Marie</p>
            <p>
              welcome to Live Chat! My name is Jason. How can I help you today?
            </p>
          </div>
          <span class="ml-auto mb-auto">
            <div class="text-right text-muted pt-1 small">00:21PM</div>
          </span>
        </div>
      </div>
    </>
  );
};

export default MainChat;
