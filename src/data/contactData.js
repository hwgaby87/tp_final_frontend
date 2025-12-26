const contact_data = [
    {
        contact_id: 1,
        contact_name: 'Carlitos',
        contact_avatar: 'https://www.lesluthiers.com.ar/luthier/cnc/bbcnc.jpg',
        contact_unseen_messages: 0,
        last_message_content: '¡Achicoria!',
        last_message_state: 'SEEN',
        last_message_created_at: new Date(),
        last_message_send_by_me: false,
        messages: [
            { message_id: 1, message_content: '¿Revisaste el afinado del latín-parlante?', message_state: 'SEEN', message_created_at: new Date(Date.now() - 600000), send_by_me: false },
            { message_id: 2, message_content: 'Está perfecto, Carlos. No vibra nada.', message_state: 'SEEN', message_created_at: new Date(Date.now() - 400000), send_by_me: true },
            { message_id: 3, message_content: 'Excelente. Mañana probamos el Bolarmonio.', message_state: 'SEEN', message_created_at: new Date(Date.now() - 200000), send_by_me: false },
            { message_id: 4, message_content: '¡Achicoria!', message_state: 'SEEN', message_created_at: new Date(), send_by_me: false }
        ]
    },
    {
        contact_id: 2,
        contact_name: 'Daniel',
        contact_avatar: 'https://www.lesluthiers.com.ar/luthier/dr/bbdr.jpg',
        contact_unseen_messages: 1,
        last_message_content: '¿Trajiste el latín?',
        last_message_state: 'RECEIVED',
        last_message_created_at: new Date(),
        last_message_send_by_me: false,
        messages: [
            { message_id: 1, message_content: 'Hola Daniel, ¿repasamos el monólogo?', message_state: 'SEEN', message_created_at: new Date(Date.now() - 800000), send_by_me: true },
            { message_id: 2, message_content: 'Non possumus, pariente.', message_state: 'SEEN', message_created_at: new Date(Date.now() - 500000), send_by_me: false },
            { message_id: 3, message_content: '¿Por qué no?', message_state: 'SEEN', message_created_at: new Date(Date.now() - 300000), send_by_me: true },
            { message_id: 4, message_content: '¿Trajiste el latín?', message_state: 'RECEIVED', message_created_at: new Date(), send_by_me: false }
        ]
    },
    {
        contact_id: 3,
        contact_name: 'Carlos',
        contact_avatar: 'https://www.lesluthiers.com.ar/luthier/clp/bbcp.jpg',
        contact_unseen_messages: 0,
        last_message_content: 'La corregida tiene menos bemoles.',
        last_message_state: 'SENT',
        last_message_created_at: new Date(),
        last_message_send_by_me: true,
        messages: [
            { message_id: 1, message_content: '¿Ensayamos la obra de Mastropiero?', message_state: 'SEEN', message_created_at: new Date(Date.now() - 900000), send_by_me: false },
            { message_id: 2, message_content: '¿La versión de 1782 o la corregida?', message_state: 'SEEN', message_created_at: new Date(Date.now() - 600000), send_by_me: true },
            { message_id: 3, message_content: 'Trae ambas por las dudas.', message_state: 'SEEN', message_created_at: new Date(Date.now() - 300000), send_by_me: false },
            { message_id: 4, message_content: 'La corregida tiene menos bemoles.', message_state: 'SENT', message_created_at: new Date(), send_by_me: true }
        ]
    },
    {
        contact_id: 4,
        contact_name: 'Jorge',
        contact_avatar: 'https://www.lesluthiers.com.ar/luthier/jm/bbjm.jpg',
        contact_unseen_messages: 2,
        last_message_content: 'Suenan de maravilla.',
        last_message_state: 'RECEIVED',
        last_message_created_at: new Date(),
        last_message_send_by_me: false,
        messages: [
            { message_id: 1, message_content: 'Ya tengo la partitura lista.', message_state: 'SEEN', message_created_at: new Date(Date.now() - 1000000), send_by_me: false },
            { message_id: 2, message_content: '¡Buenísimo! ¿Cómo suenan esas cuerdas?', message_state: 'SEEN', message_created_at: new Date(Date.now() - 700000), send_by_me: true },
            { message_id: 3, message_content: 'Muy barroco todo.', message_state: 'RECEIVED', message_created_at: new Date(Date.now() - 300000), send_by_me: false },
            { message_id: 4, message_content: 'Suenan de maravilla.', message_state: 'RECEIVED', message_created_at: new Date(), send_by_me: false }
        ]
    },
    {
        contact_id: 5,
        contact_name: 'Marcos Mundstock',
        contact_avatar: 'https://www.lesluthiers.com.ar/luthier/mm/bbmtck.jpg',
        contact_unseen_messages: 0,
        last_message_content: 'Estimado pariente...',
        last_message_state: 'SEEN',
        last_message_created_at: new Date(),
        last_message_send_by_me: false,
        messages: [
            { message_id: 1, message_content: '¿Terminaste la introducción?', message_state: 'SEEN', message_created_at: new Date(Date.now() - 1200000), send_by_me: true },
            { message_id: 2, message_content: 'Es brillantemente absurda.', message_state: 'SEEN', message_created_at: new Date(Date.now() - 800000), send_by_me: false },
            { message_id: 3, message_content: 'Menciona que Mastropiero nació a temprana edad.', message_state: 'SEEN', message_created_at: new Date(Date.now() - 400000), send_by_me: true },
            { message_id: 4, message_content: 'Estimado pariente...', message_state: 'SEEN', message_created_at: new Date(), send_by_me: false }
        ]
    },
    {
        contact_id: 6,
        contact_name: 'Todo porquerías',
        contact_avatar: 'https://static.lesluthiers.org/fotos/Caratulas/dvds/TPQR/dvd_TPQR_libreto-ext1.jpg',
        contact_unseen_messages: 3,
        last_message_content: '¿Quién tiene la mandocleta?',
        last_message_state: 'RECEIVED',
        last_message_created_at: new Date(),
        last_message_send_by_me: false,
        messages: [
            { message_id: 1, message_content: 'Bienvenidos al grupo.', message_state: 'SEEN', message_created_at: new Date(Date.now() - 1500000), send_by_me: false },
            { message_id: 2, message_content: '¿Alguien sabe dónde quedó el gom-horn?', message_state: 'SEEN', message_created_at: new Date(Date.now() - 1000000), send_by_me: true },
            { message_id: 3, message_content: 'Creo que lo tiene el encargado.', message_state: 'RECEIVED', message_created_at: new Date(Date.now() - 500000), send_by_me: false },
            { message_id: 4, message_content: 'Pero el encargado no habla latín.', message_state: 'RECEIVED', message_created_at: new Date(Date.now() - 200000), send_by_me: false },
            { message_id: 5, message_content: '¿Quién tiene la mandocleta?', message_state: 'RECEIVED', message_created_at: new Date(), send_by_me: false }
        ]
    }
];

export default contact_data;