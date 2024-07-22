import React, { useState } from 'react';
import './styles.css';
import SendWait from '../assets/send-wait.svg';
import SendReady from '../assets/send-ready.svg';

export const ChatInput = ({
                     sendMessage
                   }: {
  sendMessage: (message: string) => void
}) => {
  const [message, setMessage] = useState('');
  const handleInputChange = (event: any) => {
    setMessage(event.target.value);
  };

  const handleSend = () => {
    if (message.trim() === '') {
      return;
    }
    sendMessage(message);
    setMessage('');
  }

  const handleKeyDown = (event: any) => {
    if (event.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <div className="flex px-[16px]">
      <div className="flex-1">
        <input
          className="chain-gpt-input-placeholder"
          type="text"
          value={message}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          placeholder="Ask me anything..."
        />
      </div>
      <div className="w-[24px] flex justify-center">
        <img
          onClick={handleSend}
          src={message.trim() ? SendReady : SendWait}
          alt="send ready"
        />
      </div>
    </div>
  );
};
