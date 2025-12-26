import contact_data from "../data/contactData";

/* Imita una petición de red al servidor para obtener datos sin realizar una conexión real. */
export function getContactList() {
    return contact_data
}

/* Agrupa las funciones encargadas de recuperar información específica de los datos. */
export function getContactByid(contact_id) {
    for (const contact of contact_data) {
        if (Number(contact.contact_id) === Number(contact_id)) {
            return contact
        }
    }
}
