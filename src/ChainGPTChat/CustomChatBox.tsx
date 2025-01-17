import ChainGPTClose from './assets/close.svg';
import ChatBox from './components/ChatBox';
import {Welcome} from './Welcome';
import ChainGPTIconSmall from './assets/icon-small.svg';
import React from 'react';

export function CustomChatBox({
  onClose,
                                apiUri
                              }: {
  onClose: () => void;
  apiUri: string;
}) {
  return <div className="w-[358px] h-[536px] border-[1px] border-[#E0E0E0] rounded-[8px] bg-[#F5F5F5]
    flex flex-col shadow-[0px_4px_16px_0px_rgba(0,0,0,0.16)]">
    <div className="w-[356px] h-[50px] flex bg-white text-[#808080] text-[14px]
      items-center justify-center relative rounded-t-[7px] border-b-[1px] border-[#E0E0E0]">
      <div>aelf AI Chatbot</div>
      <img
        onClick={onClose}
        src={ChainGPTClose}
        alt="chainGPT logo"
        className="absolute top-[12px] left-[317px]"/>
    </div>
    <div className="flex-1 overflow-hidden">
      <ChatBox
        Welcome={Welcome}
        apiUri={apiUri}
      />
    </div>
    <div className="w-[356px] h-[36px] text-[12px] flex text-[#808080] items-center justify-center">
      Powered by
      <img
        src={ChainGPTIconSmall}
        alt="chainGPT logo small"
        className="w-[64px] h-[18px] ml-[6px]"/>
    </div>
  </div>
}
