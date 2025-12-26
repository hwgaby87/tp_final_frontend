import React, { useContext, useEffect, useRef } from 'react';
import { ContactDetailContext } from '../../Context/ContactDetailContext';
import './MessageList.css';

export const MessageList = () => {
    const { contactSelected } = useContext(ContactDetailContext);
    const scrollRef = useRef(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [contactSelected.messages]);

    return (
        <div className='message-list-container' ref={scrollRef}>
            {contactSelected.messages.map((message) => {
                const isSeen = message.message_state?.toLowerCase() === 'seen' ||
                    message.message_state === 'READ';

                return (
                    <div
                        key={message.message_id}
                        className={`message-bubble ${message.send_by_me ? 'message-me' : 'message-other'}`}
                    >
                        <div className="message-text">
                            {message.message_content}
                            <span className="message-meta">
                                <span className="message-time">
                                    {new Date(message.message_created_at).toLocaleTimeString([], {
                                        hour: '2-digit',
                                        minute: '2-digit',
                                        hour12: true
                                    })}
                                </span>
                                {message.send_by_me && (
                                    <span className={`message-status ${isSeen ? 'status-seen' : ''}`}>
                                        {message.message_state === 'SENT' ? '✓' : '✓✓'}
                                    </span>
                                )}
                            </span>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};