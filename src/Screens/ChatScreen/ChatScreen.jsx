import React from 'react';
import ContactSidebar from '../../Components/ContactSidebar/ContactSidebar';
import './ChatScreen.css';

export default function ChatScreen() {
  return (
    <div className="app-container">
      <ContactSidebar />
      <div className="chat-placeholder">
        <h2>Chats</h2>
        <p>Aplicación de Mensajería</p>
      </div>
    </div>
  );
}
