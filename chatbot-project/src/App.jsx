import { useState } from 'react';
import ChatMessages from './components/ChatMessages';
import ChatInput from './components/ChatInput';
import './App.css';

function App() {
  const [ chatMessages, setChatMessages ] = useState([]);
  // const [ chatMessages, setChatMessages ] = array; // Array Destructuring
  // const chatMessages = array[0]; // current data
  // const setChatMessages = array[1]; // function that updates the data

  return (
    <div className="app-container">
      <ChatMessages
      chatMessages={chatMessages}
      />
      <ChatInput
        chatMessages={chatMessages}
        setChatMessages={setChatMessages}
      />
    </div>
  );
}

export default App
