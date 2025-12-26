import { Link, useParams } from 'react-router';
import { useContext } from 'react';
import { ContactListContext } from '../../Context/ContactListContext';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner'
import './ContactList.css';

/*
 * Muestra la lista de contactos filtrada según la búsqueda.
 * Recibe la información de los contactos como una propiedad.
 */
export default function ContactList({ contacts }) {
  // Obtiene el estado de carga y la función para marcar mensajes como leídos del contexto global.
  const { loadingContactState, markContactAsRead } = useContext(ContactListContext);

  // Extrae el identificador del contacto activo.
  const { contact_id } = useParams();

  // Muestra una animación de carga si los datos no están listos.
  if (loadingContactState) {
    return <LoadingSpinner message="Cargando conversaciones..." />;
  }

  // Informa al usuario si no existen contactos para mostrar.
  if (contacts.length === 0) {
    return (
      <div className='contact-list-status'>
        No se encontraron contactos
      </div>
    );
  }

  // Genera la estructura visual de la lista de contactos.
  return (
    <div className='contact-list-container'>
      {contacts.map((contact) => {
        // Determina si el contacto actual coincide con el seleccionado.
        const isSelected = Number(contact_id) === Number(contact.contact_id);

        // Comprueba si existen mensajes que aún no han sido leídos.
        const hasUnseen = contact.contact_unseen_messages > 0;

        return (
          <Link
            key={contact.contact_id}
            to={`/chat/${contact.contact_id}/messages`}
            className="contact-link"
            onClick={() => markContactAsRead(contact.contact_id)}
          >
            <div className={`contact-item ${isSelected ? 'selected' : ''}`}>
              <img
                className='contact-avatar'
                src={contact.contact_avatar}
                alt={contact.contact_name}
              />

              <div className="contact-info">
                <div className="contact-header">
                  <span className="contact-name">{contact.contact_name}</span>

                  {/* Muestra la fecha del último mensaje y la resalta si hay mensajes nuevos. */}
                  <span className={`contact-date ${hasUnseen ? 'unread-text' : ''}`}>
                    {new Date(contact.last_message_created_at).toLocaleDateString()}
                  </span>
                </div>

                <div className="contact-last-msg-container">
                  <div className="contact-last-msg">
                    {/* Muestra un icono (tics) que indica si el mensaje fue enviado o leído. */}
                    {contact.last_message_send_by_me && (
                      <span className={`message-status-icon ${contact.last_message_state === 'seen' ? 'status-seen' : ''}`}>
                        {contact.last_message_state === 'SENT' ? '✓' : '✓✓'}
                      </span>
                    )}

                    {/* Muestra un fragmento del contenido del último mensaje. */}
                    <span className="text-truncate">
                      {contact.last_message_content}
                    </span>
                  </div>

                  {/* Muestra un indicador con la cantidad de mensajes pendientes de lectura. */}
                  {hasUnseen && (
                    <div className="unread-badge">
                      {contact.contact_unseen_messages}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}