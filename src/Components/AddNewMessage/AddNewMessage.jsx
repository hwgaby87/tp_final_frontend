import React, { useContext } from 'react'
import { ContactDetailContext } from '../../Context/ContactDetailContext'
import './AddNewMessage.css'

export default function AddNewMessage() {
    const { addNewMessage } = useContext(ContactDetailContext)

    function handleSubmitNewMessage(event) {
        event.preventDefault()
        const message = event.target.mensaje.value

        if (message.trim() !== "") {
            addNewMessage(message)
            event.target.reset()
        }
    }

    return (

        <form className="add-message-form" onSubmit={handleSubmitNewMessage}>
            <textarea
                id='mensaje'
                name='mensaje'
                placeholder="Escribe un mensaje aquí"
                required
            ></textarea>
            <button type="submit">Enviar</button>
        </form>
    )
}