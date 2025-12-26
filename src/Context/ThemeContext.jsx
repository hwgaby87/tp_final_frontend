import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
    const [isDark, setIsDark] = useState(false);

    const toggleTheme = () => setIsDark(!isDark);
    const changeToDarkMode = () => setIsDark(true);
    const changeToLightMode = () => setIsDark(false);

    // Sincroniza el estado del tema elegido con los estilos globales de la página modificando un atributo en el documento HTML.
    useEffect(() => {
        const theme = isDark ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', theme);
    }, [isDark]);

    const providerValues = {
        isDark,
        toggleTheme,
        changeToDarkMode,
        changeToLightMode
    };

    return (
        <ThemeContext.Provider value={providerValues}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeContextProvider;