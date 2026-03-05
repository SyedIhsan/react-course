import "./ChatMessage.css";

function ChatMessage({ message, sender }) { // props = properties
  // const message = props.message;
  // const sender = props.sender;
  // const {message, sender } = props;

  /*
  if (sender === "robot") {
    return (
      <div>
        <img src="https://supersimple.dev/projects/chatbot/robot.png" width="48px" />
        {message}
      </div>
    );
  }
  */

  return (
    <div className={
      sender === "user" 
        ? "chat-message-user" 
        : "chat-message-robot"
    }>
      {sender === "robot" && (
        <img src="https://supersimple.dev/projects/chatbot/robot.png"
        className="chat-message-profile" />
      )}
      <div className="chat-message-text">            
        {message}
      </div>
      {sender === "user" && (
        <img src="https://supersimple.dev/projects/chatbot/user.png"
        className="chat-message-profile" />
      )}
    </div>
  );
}

export default ChatMessage