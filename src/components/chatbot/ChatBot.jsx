// components/ChatBot.jsx
import React, { useState } from 'react';
import { Button, Input } from 'antd';
import { SendOutlined, AudioOutlined } from '@ant-design/icons';
import './ChatBot.css';
import img from '../../assets/Background/bot.gif';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    { from: 'bot', text: 'Hi there! How can I help you today?' },
  ]);

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages([...messages, { from: 'user', text: input }]);
    setInput('');
  };

  return (
    <>
      {/* Floating icon (always visible) */}
      <div className="chatbot-floating-btn" onClick={() => setIsOpen(true)}>
        <img src={img} alt="Chatbot" className="chatbot-gif" />
      </div>

      {/* Chat popup (only when open) */}
      {isOpen && (
        <div className="chatbot-popup">
          <div className="chatbot-header">
            <span>Chat with Us</span>
            <Button
              type="text"
              size="small"
              onClick={() => setIsOpen(false)}
              style={{ color: 'white' }}
            >
              ✖
            </Button>
          </div>

          <div className="chatbot-messages">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`chatbot-msg ${msg.from === 'user' ? 'user' : 'bot'}`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          <div className="chatbot-input-row">
            <Input
              placeholder="Type your message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onPressEnter={handleSend}
            />
            <Button icon={<SendOutlined />} onClick={handleSend} />
            <Button icon={<AudioOutlined />} />
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;
