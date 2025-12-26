import { createContext, useContext } from "react";
import { Outlet, useParams } from "react-router";
import { ContactListContext } from "./ContactListContext";

export const ContactDetailContext = createContext()

const ContactDetailContextProvider = () => {

    const parametros_url = useParams()
    const contact_id = parametros_url.contact_id
    const { contactState, getContactByid, updateContactById } = useContext(ContactListContext)
    const contactSelected = getContactByid(contact_id)

    function addNewMessage(content) {
        // Verifica que el contacto seleccionado sea válido antes de continuar.
        if (!contactSelected) return;

        // Genera el objeto que contiene la información del nuevo mensaje.
        const new_message = {
            message_id: contactSelected.messages.length + 1,
            message_content: content,
            message_state: 'SENT',
            message_created_at: new Date(),
            send_by_me: true
        };

        // Crea una copia completa del contacto para poder modificar sus datos de forma segura.
        const contactSelectedCloned = {
            ...contactSelected,
            messages: [...contactSelected.messages, new_message], // Incorpora el nuevo mensaje a la colección existente.

            // Actualiza los datos que resumen el último mensaje en la lista de contactos.
            last_message_content: content,
            last_message_state: 'SENT',
            last_message_created_at: new_message.message_created_at,
            last_message_send_by_me: true
        };

        // Informa al contexto global para que guarde los cambios realizados.
        updateContactById(contactSelectedCloned, contact_id);
    }

    const providerValues = {
        contactSelected,
        addNewMessage
    }

    return (
        <ContactDetailContext.Provider value={providerValues}>
            <Outlet />
        </ContactDetailContext.Provider>
    )

}

export default ContactDetailContextProvider

