import { createContext, useEffect, useState } from "react";
import { Outlet } from "react-router";
import { getContactList } from "../services/contactServices";

// Genera una instancia de contexto que permite compartir datos entre componentes
export const ContactListContext = createContext();

const ContactListContextProvider = () => {
    // Declara las variables de estado que controlan la información de la aplicación y actualizan la vista cuando cambian.
    const [contactState, setContactState] = useState([]); // Guarda la colección de contactos disponibles.
    const [loadingContactState, setLoadingContactState] = useState(true); // Controla si la aplicación está ocupada cargando información.

    /*
     * Solicita la lista de contactos al servicio.
     * Imita el comportamiento de una petición a una base de datos real.
     */
    function loadContactList() {
        setLoadingContactState(true); // Enciende el indicador de carga.

        // Introduce una espera de 2 segundos para imitar la lentitud de un servidor.
        setTimeout(function () {
            const contact_list = getContactList(); // Trae los datos de los contactos.
            setContactState(contact_list);       // Guarda los contactos en el estado de la aplicación.
            setLoadingContactState(false);      // Apaga el indicador de carga.
        }, 2000);
    }

    /*
     * Incorpora un nuevo contacto a la lista existente.
     * Crea los datos iniciales necesarios y actualiza el estado.
     */
    function addContact(new_contact) {
        const contact_with_id = {
            ...new_contact,
            contact_id: Date.now(),
            contact_unseen_messages: 0,
            messages: new_contact.messages || [] // Verifica que exista una lista de mensajes, si no, crea una vacía.
        };

        setContactState((prevState) => [...prevState, contact_with_id]);
    }

    /*
     * Localiza un contacto en la lista usando su número de identificación.
     */
    function getContactByid(contact_id) {
        return contactState.find(contact => Number(contact.contact_id) === Number(contact_id));
    }

    /*
     * Modifica el contacto para indicar que todos sus mensajes han sido leídos.
     */
    function markContactAsRead(contact_id) {
        setContactState((prevState) =>
            prevState.map((contact) => {
                if (Number(contact.contact_id) === Number(contact_id)) {
                    return { ...contact, contact_unseen_messages: 0 };
                }
                return contact;
            })
        );
    }

    /*
     * Actualiza la información de un contacto específico con nuevos datos.
     */
    function updateContactById(contact_to_update, contact_id) {
        const new_contact_list = contactState.map((contact) => {
            if (Number(contact.contact_id) === Number(contact_id)) {
                return contact_to_update;
            }
            return contact;
        });
        setContactState(new_contact_list);
    }

    // Inicia la carga de contactos automáticamente cuando este componente aparece en pantalla.
    useEffect(loadContactList, []);

    // Prepara el objeto con todos los datos y funciones que se compartirán con los demás componentes.
    const providerValues = {
        contactState,
        loadingContactState,
        loadContactList,
        getContactByid,
        updateContactById,
        markContactAsRead,
        addContact
    };

    return (
        <ContactListContext.Provider value={providerValues}>
            <Outlet />
        </ContactListContext.Provider>
    );
};

export default ContactListContextProvider;