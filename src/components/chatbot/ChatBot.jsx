import React, { useState, useRef, useEffect } from 'react';
import { Button, Input, Spin, message as AntMessage } from 'antd';
import {
  connectSocket,
  sendMessage,
  listenToMessages,
  closeSocket
} from '../../services/socketService';

import { SendOutlined } from '@ant-design/icons';
import './ChatBot.css';
import img from '../../assets/Background/bot.gif';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSocketOpen, setIsSocketOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    { from: 'bot', text: 'Hi there! How can I help you today?' },
  ]);
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  // Connect to WebSocket on mount
  useEffect(() => {
    if (isOpen && !isSocketOpen) {
      console.log("Connecting to chatbot server...");
      connectSocket()
        .then(() => {
          setIsSocketOpen(true);
          listenToMessages((data) => {
            const botReply = extractBotReply(data);
            setMessages(prev => [...prev, { from: 'bot', text: botReply }]);
            setLoading(false);
          });
        })
        .catch(() => AntMessage.error("Failed to connect to chatbot server"));

      // return () => closeSocket();
    }
  }, [isOpen, isSocketOpen]);

  useEffect(() => {
  let timer;
  if (loading) {
    timer = setTimeout(() => {
      setLoading(false);
    }, 30000); // 30 seconds
  }
  return () => clearTimeout(timer);
}, [loading]);

  // Scroll to bottom on new message
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  // Extract bot reply from response
  const extractBotReply = (data) => {
    return data.response || data.reply || data.text || data.message || "Sorry, I didn't understand that.";
  };

  // Send message via WebSocket
  const handleSend = (msg = null) => {
    const trimmed = (msg !== null ? msg : input).trim();
    if (!trimmed) return;

    setMessages(prev => [...prev, { from: 'user', text: trimmed }]);
    setInput('');
    setLoading(true);

    sendMessage(trimmed);
  };

  const handleInputKeyDown = (e) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <>
      {/* Floating bot icon */}
      <div className="chatbot-floating-btn" onClick={() => setIsOpen(true)}>
        <img src={img} alt="Chatbot" className="chatbot-gif" />
      </div>

      {/* Chat popup */}
      {isOpen && (
        <div className="chatbot-popup">
          {/* Header */}
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

          {/* Messages */}
          <div className="chatbot-messages">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`chatbot-msg ${msg.from === 'user' ? 'user' : 'bot'}`}
              >
                {msg.text}
              </div>
            ))}
            {loading && (
              <div className="chatbot-msg bot">
                <Spin size="small" /> Bot is typing...
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="chatbot-input-row">
            <Input
              placeholder="Type your message..."
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={handleInputKeyDown}
              disabled={loading}
              autoFocus
            />
            <Button
              icon={<SendOutlined />}
              onClick={() => handleSend()}
              disabled={loading || !input.trim()}
              type="primary"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;
