import React, { useState, useContext } from 'react';
import ContactList from '../ContactList/ContactList';
import { ContactListContext } from '../../Context/ContactListContext';
import { ThemeContext } from '../../Context/ThemeContext';
import "./ContactSidebar.css";

export default function ContactSidebar() {
  const [showForm, setShowForm] = useState(false);
  const [contactName, setContactName] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  // Obtiene acceso a las funciones y datos compartidos por los contextos globales.
  const { addContact, contactState } = useContext(ContactListContext);
  const { toggleTheme, isDark } = useContext(ThemeContext);

  const filteredContacts = contactState.filter(contact =>
    contact.contact_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleToggleForm = () => {
    setShowForm(!showForm);
    setContactName('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newContactData = {
      contact_name: contactName,
      contact_avatar: `https://ui-avatars.com/api/?name=${contactName}&background=random&color=fff`,
      messages: [],
      last_message_content: "",
      last_message_state: 'SENT',
      last_message_created_at: new Date(),
      last_message_send_by_me: false,
      contact_unseen_messages: 0
    };
    addContact(newContactData);
    handleToggleForm();
  };

  return (
    <aside className="sidebar-container">
      <header className="sidebar-header">
        <div className="user-profile-wrapper">
          <img
            src="https://ui-avatars.com/api/?name=Mensajes&background=00a884&color=fff"
            alt="Perfil"
            className="user-profile-img"
          />
          <h1 className="sidebar-main-title">Chats</h1>
        </div>
      </header>

      <div className="sidebar-action-bar">
        <button className="mode-btn" onClick={toggleTheme}>
          <i className={isDark ? "fa-solid fa-sun" : "fa-solid fa-moon"}></i>
          {isDark ? " Modo Claro" : " Modo Oscuro"}
        </button>

        <button className="add-contact-btn" onClick={handleToggleForm}>
          Nuevo Contacto
        </button>
      </div>

      <div className="search-section">
        <div className="search-input-wrapper">
          <span className="search-icon-span"><i className="fa-solid fa-magnifying-glass"></i></span>
          <input
            type="text"
            placeholder="Busca un contacto"
            className="search-input"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="contacts-scroll-area">
        <ContactList contacts={filteredContacts} />
      </div>

      {showForm && (
        <div className="form-overlay">
          <form className="contact-form" onSubmit={handleSubmit}>
            <h3>Añadir contacto</h3>
            <input
              type="text"
              placeholder="Nombre del contacto"
              required
              autoFocus
              value={contactName}
              onChange={(e) => setContactName(e.target.value)}
            />
            <div className="form-buttons">
              <button type="button" onClick={handleToggleForm} className="btn-cancel">Cancelar</button>
              <button type="submit" className="btn-save">Guardar</button>
            </div>
          </form>
        </div>
      )}
    </aside>
  );
}