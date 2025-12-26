import React, { useContext } from 'react'
import { useNavigate } from 'react-router'
import ContactSidebar from '../../Components/ContactSidebar/ContactSidebar'
import { ContactDetailContext } from '../../Context/ContactDetailContext'
import { ContactListContext } from '../../Context/ContactListContext'
import { MessageList } from '../../Components/MessageList/MessageList'
import AddNewMessage from '../../Components/AddNewMessage/AddNewMessage'
import './MessagesScreen.css'

export default function MessagesScreen() {
    const { contactSelected } = useContext(ContactDetailContext)
    const { loadingContactState } = useContext(ContactListContext)
    const navigate = useNavigate()

    return (
        <div className="app-container messages-page">
            <ContactSidebar />

            <main className="chat-area">
                <header className="chat-header">
                    <button className="back-btn" onClick={() => navigate('/')} aria-label="Volver">
                        <i className="fa-solid fa-arrow-left"></i>
                    </button>
                    <img className='contact-avatar-mini' src={contactSelected.contact_avatar} alt="" />
                    <h2>{contactSelected.contact_name}</h2>
                </header>

                {loadingContactState ? (
                    <div className="loading">Cargando...</div>
                ) : (
                    <>
                        <MessageList />
                        <div className="input-container">
                            <AddNewMessage />
                        </div>
                    </>
                )}
            </main>
        </div>
    )
}