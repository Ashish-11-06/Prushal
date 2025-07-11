import React, { useState, useRef, useEffect } from 'react';
import { Button, Input, Spin, message as AntMessage } from 'antd';
import {
  connectSocket,
  sendMessage,
  listenToMessages,
  closeSocket
} from '../../services/socketService';

import { SendOutlined, AudioOutlined } from '@ant-design/icons';
import './ChatBot.css';
import img from '../../assets/Background/bot.gif';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    { from: 'bot', text: 'Hi there! How can I help you today?' },
  ]);
  const [loading, setLoading] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [isBotSpeaking, setIsBotSpeaking] = useState(false);
  const recognitionRef = useRef(null);
  const messagesEndRef = useRef(null);
  const selectedVoiceRef = useRef(null);

  // Connect to WebSocket on mount
  useEffect(() => {
    connectSocket()
      .then(() => {
        listenToMessages((data) => {
          const botReply = extractBotReply(data);
          setMessages(prev => [...prev, { from: 'bot', text: botReply }]);
          if (["bye", "exit", "goodbye"].includes(botReply.toLowerCase())) {
            speakResponse("Ok bye! Have a good day!");
          } else {
            speakResponse(botReply);
          }
          setLoading(false);
        });
      })
      .catch(() => AntMessage.error("Failed to connect to chatbot server"));

    return () => closeSocket();
  }, []);

  // Scroll to bottom on new message
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  // Load preferred voice (Neerja) for speech synthesis
  useEffect(() => {
    function loadVoices() {
      const voices = window.speechSynthesis.getVoices();
      selectedVoiceRef.current = voices.find(voice =>
        voice.name.toLowerCase().includes('neerja')
      );
    }
    if (window.speechSynthesis.getVoices().length > 0) {
      loadVoices();
    } else {
      window.speechSynthesis.onvoiceschanged = loadVoices;
    }
  }, []);

  // Extract bot reply from response
  const extractBotReply = (data) => {
    return data.response || data.reply || data.text || data.message || "Sorry, I didn't understand that.";
  };

  // Bot speaks the response
  const speakResponse = (text) => {
    if (!window.speechSynthesis) return;
    let speechText = text;
    if (text.includes("{user_name}")) {
      speechText = "Please log in to get personalized responses. " + text.replace("{user_name}", "");
    }
    const utterance = new window.SpeechSynthesisUtterance(speechText);
    utterance.lang = 'en-IN';
    if (selectedVoiceRef.current) {
      utterance.voice = selectedVoiceRef.current;
    }
    utterance.onstart = () => setIsBotSpeaking(true);
    utterance.onend = () => setIsBotSpeaking(false);
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
  };

  // Send message via WebSocket
  const handleSend = (msg = null) => {
    const trimmed = (msg !== null ? msg : input).trim();
    if (!trimmed) return;

    setMessages(prev => [...prev, { from: 'user', text: trimmed }]);
    setInput('');
    setLoading(true);

    if (isBotSpeaking) {
      window.speechSynthesis.cancel();
      setIsBotSpeaking(false);
    }

    sendMessage(trimmed);
  };

  // Voice input (Speech Recognition)
  const handleVoiceInput = () => {
    if (!('webkitSpeechRecognition' in window)) {
      AntMessage.warning('Speech recognition not supported in this browser.');
      return;
    }
    if (isListening) {
      recognitionRef.current.stop();
      setIsListening(false);
    } else {
      const recognition = new window.webkitSpeechRecognition();
      recognition.lang = 'en-US';
      recognition.interimResults = false;
      recognition.continuous = false;
      recognition.onstart = () => setIsListening(true);
      recognition.onresult = (event) => {
        const transcript = event.results[event.results.length - 1][0].transcript.trim();
        if (transcript) {
          setInput(transcript);
          handleSend(transcript);
        }
      };
      recognition.onerror = () => {
        AntMessage.error('Voice input failed. Please try again.');
        setIsListening(false);
      };
      recognition.onend = () => setIsListening(false);
      recognition.start();
      recognitionRef.current = recognition;
    }
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
            <Button
              icon={<AudioOutlined />}
              onClick={handleVoiceInput}
              disabled={loading || isListening}
              type={isListening ? "danger" : "default"}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;
