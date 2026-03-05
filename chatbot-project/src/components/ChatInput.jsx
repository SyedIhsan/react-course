import { useState, useRef, useEffect } from 'react';
import { Chatbot } from "supersimpledev";
import "./ChatInput.css";

function ChatInput ({ chatMessages, setChatMessages }) {
  const [ inputText, setInputText ] = useState("");
  const [ isLoading, setIsLoading ] = useState(false);
  const inputRef = useRef(null);

  function saveInputText(event) {
    setInputText(event.target.value);
  };

  async function sendMessage() {
    if (!inputText || isLoading) return;

    setIsLoading(true);

    const loadingMessageId = crypto.randomUUID()

    const newChatMessages = [
      ...chatMessages,
      {
        message: inputText,
        sender: "user",
        id: crypto.randomUUID() // create a unique id
      },
      {
        message: <img 
          className="spinner" 
          src="https://supersimple.dev/images/loading-spinner.gif"/>,
        sender: "robot",
        id: loadingMessageId
      }
    ];

    setChatMessages(newChatMessages);
    setInputText("");

    const response = await Chatbot.getResponseAsync(inputText);
    setChatMessages(prev => 
      prev.map(msg =>
        msg.id === loadingMessageId
          ? { ...msg, message: response }
          : msg
      )
    );
    setIsLoading(false);
  };

  function handleKeyDown(event) {
    if (event.key === "Enter") {
      sendMessage();
    };

    if (event.key === "Escape") {
      setInputText("");
    };
  };

  useEffect(() => {
    if(!isLoading) {
      inputRef.current?.focus();
    }
  }, [isLoading]);

  return (
    <div className="chat-input-container">            
      <input
        ref={inputRef}
        placeholder="Send a message to Chatbot"
        size="30"
        onKeyDown={handleKeyDown}
        onChange={saveInputText}
        value={inputText}
        className="chat-input"
        disabled={isLoading}
      />
      <button
        className="send-button"
        onClick={sendMessage}
        disabled={isLoading || !inputText}
      >
        {isLoading ? "Thinking..." : "Send"}
      </button>
    </div>
  );
}

export default ChatInput