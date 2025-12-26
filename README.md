# TP Integrador - Aplicación de Chat

## Descripción del Proyecto
Esta aplicación es una plataforma de mensajería desarrollada utilizando la biblioteca React. Permite al usuario visualizar una lista de contactos y acceder a una interfaz detallada de mensajes para cada conversación individual. La arquitectura del proyecto se basa en componentes funcionales y utiliza la Context API para la gestión del estado global, incluyendo la administración de la lista de contactos, los detalles de los contactos y el tema visual de la aplicación.

## Navegación
La navegación dentro de la aplicación es manejada por `react-router`, facilitando el enrutamiento dinámico entre la pantalla principal de chat y las vistas de mensajes detallados correspondientes a cada contacto (`/chat/:contact_id/messages`).

## Tecnologías y Librerías Utilizadas
Se han empleado las siguientes tecnologías y librerías para la construcción de este proyecto:

- **React**: Biblioteca principal para la construcción de la interfaz de usuario.
- **React DOM**: Para el renderizado de componentes en el DOM.
- **React Router**: Para el manejo del enrutamiento y la navegación entre vistas.
- **Vite**: Utilizado como entorno de desarrollo y empaquetador, proporcionando una experiencia de desarrollo rápida y eficiente.

## Desafíos en el Desarrollo
Durante el proceso de construcción de la aplicación, el desarrollador experimentó dificultades notables al momento de implementar los estilos personalizados con CSS. Asimismo, lograr un diseño completamente responsivo ("responsive") que se adaptara correctamente a diferentes resoluciones de pantalla representó un reto significativo. A pesar de estas complicaciones iniciales en la maquetación y adaptabilidad, se logró integrar la lógica funcional requerida para la operación de la aplicación.