import React, { useState } from 'react';
import { MessageSquare } from 'lucide-react';
import ChatWindow from './ChatWindow';

const ChatIcon = () => {
  const [open, setOpen] = useState(false);

  const handleToggle = () => setOpen((prev) => !prev);

  return (
    <>
      {/* Floating Chat Icon */}
      <button
        onClick={handleToggle}
        className="fixed bottom-6 right-6 z-50 bg-purple-600 hover:bg-purple-700 text-white p-4 rounded-full shadow-lg flex items-center justify-center"
        aria-label="Open Chat"
      >
        <MessageSquare size={24} />
      </button>

      {/* Chat Window */}
      {open && <ChatWindow onClose={() => setOpen(false)} />}
    </>
  );
};

export default ChatIcon;
