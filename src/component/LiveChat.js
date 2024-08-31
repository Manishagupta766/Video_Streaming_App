import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../Utils/chatSlice';
import ChatMessage from './ChatMessage';
import { generate, makeid } from '../Utils/helper';

function LiveChat() {
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);
  const chatBoxRef = useRef(null);
  const [liveMessage, setLiveMessage] = useState('');

  useEffect(() => {
    const intervalId = setInterval(() => {
      console.log('Live Chat is running');
      dispatch(
        addMessage({
          name: generate(),
          message: makeid(8) + " deekshitha mad girl",
        })
      );
    }, 2000);

    return () => clearInterval(intervalId);
  }, [dispatch]);

  useEffect(() => {
    if (chatBoxRef.current) {
      // Ensure scrolling to the bottom
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }
  }, [chatMessages]); // Trigger this effect whenever chatMessages change

  const handleSendMessage = () => {
    if (liveMessage.trim()) {
      console.log('Sending message:', liveMessage);
      dispatch(
        addMessage({
          name: "You",
          message: liveMessage,
        })
      );
      setLiveMessage(''); // Clear the input after sending
    } else {
      console.log('Message input is empty, not sending.');
    }
  };

  return (
    <div className='flex flex-col h-[400px] sm:h-[500px] w-full max-w-[600px] border border-gray-300 rounded-lg shadow-lg bg-white'>
      <div
        ref={chatBoxRef}
        className='flex-1 p-4 shadow-lg bg-gray-100 rounded-t-lg overflow-y-scroll'
      >
        {chatMessages && chatMessages.map((c, index) => (
          <ChatMessage key={index} name={c.name} message={c.message} />
        ))}
      </div>
      <div className='flex p-2 border-t border-gray-300'>
        <input
          className='flex-1 p-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
          type='text'
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
          placeholder="Type your message..."
        />
        <button
          className='px-4 py-2 bg-blue-500 text-white rounded-r-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500'
          onClick={handleSendMessage}
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default LiveChat;
