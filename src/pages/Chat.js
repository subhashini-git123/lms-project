import React, { useState } from "react";
import "./Chat.css";
import Sidebar from "../components/Sidebar";

const Chat = () => {
  const [messages, setMessages] = useState([
    { sender: "user", text: "................................" },
    { sender: "manager", text: "................................" },
  ]);
  const [input, setInput] = useState("");
  const [isUserNext, setIsUserNext] = useState(true);

  const handleSend = () => {
    if (input.trim()) {
      const newMessage = {
        sender: isUserNext ? "user" : "manager",
        text: input,
      };

      setMessages([...messages, newMessage]);
      setInput("");
      setIsUserNext(!isUserNext);
    }
  };

  return (
    <div className="chat-sidebar-container">
      <Sidebar />
      <div className="chat-content">
        <div className="chat-header">[Manager - Name]</div>

        <div className="chat-body">
          {messages.map((msg, index) => {
            const isUser = msg.sender === "user";
            const messageClass = isUser
              ? "chat-message left"
              : "chat-message right";
            const avatarClass = isUser ? "avatar blue" : "avatar orange";
            const bubbleClass = isUser
              ? "message-bubble user"
              : "message-bubble manager";

            return (
              <div key={index} className={messageClass}>
                <div className={avatarClass}></div>
                <div className={bubbleClass}>{msg.text}</div>
              </div>
            );
          })}
        </div>

        <div className="chat-input-section">
          <input
            type="text"
            placeholder="Type your message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button onClick={handleSend} className="send-button">
            →
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
