import { Route, Routes } from "react-router";
import ChatScreen from './Screens/ChatScreen/ChatScreen';
import MessaggesScreen from './Screens/MessagesScreen/MessagesScreen';
import ContactListContextProvider from "./Context/ContactListContext";
import ContactDetailContextProvider from "./Context/ContactDetailContext";
import ThemeContextProvider from "./Context/ThemeContext";
import './global.css';

function App() {
  return (
    <ThemeContextProvider>
      <div className="app-container">
        <Routes>
          <Route element={<ContactListContextProvider />}>
            <Route path="/" element={<ChatScreen />} />
            <Route path="/chat/:contact_id" element={<ContactDetailContextProvider />}>
              <Route path="messages" element={<MessaggesScreen />} />
            </Route>
          </Route>
        </Routes>
      </div>
    </ThemeContextProvider>
  );
}

export default App;