// src/services/socketService.js
let socket = null;
const SOCKET_URL = import.meta.env.VITE_WEB_SOCKET;
const chatBotUrl = `${SOCKET_URL}/chatbot/`;

export const connectSocket = () => {
  try {
    socket = new WebSocket(chatBotUrl);

    return new Promise((resolve, reject) => {
      socket.onopen = () => resolve(socket);
      socket.onerror = (err) => {
        console.error("WebSocket connection error:", err);
        reject(err);
      };
    });
  } catch (error) {
    console.error("Failed to create WebSocket:", error);
    return Promise.reject(error);
  }
};


export const sendMessage = (message) => {
  if (socket && socket.readyState === WebSocket.OPEN) {
    socket.send(JSON.stringify(message));
  }
};

export const listenToMessages = (callback) => {
  if (socket) {
    socket.onmessage = (event) => {
      let data;
      try {
        data = JSON.parse(event.data);
      } catch (err) {
        // console.warn("Received non-JSON message:", event.data);
        data = { text: event.data }; // Wrap it in a consistent object
      }
      callback(data);
    };
  }
};


export const closeSocket = () => {
  if (socket) {
    socket.close();
  }
};
