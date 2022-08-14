import { createContext, useContext, useState } from "react";

const AppContext = createContext();
const initialState = {
  chat: false,
  cart: false,
  userprofile: false,
  notification: false,
};
export function AppWrapper({ children }) {
  const [activeMenu, setActiveMenu] = useState(true);
  const [isclicked, setIsClicked] = useState(initialState);
  const [screenSize, setScreenSize] = useState(undefined);
  const [currentColor, setCurrentColor] = useState("#03C9D7");
  const [currentMode, setCurrentMode] = useState("Light");
  const [themeSettings, setThemeSettings] = useState(false);


  const handleClick = (clicked) => {
    setIsClicked({ ...initialState, [clicked]: true });
};

   const setMode = (e) => {
      setCurrentMode(e.target.value);
     localStorage.setItem("themeMode", e.target.value);
     setThemeSettings(false);
    };
    const setColor = (color) => {
      setCurrentColor(color);
      localStorage.setItem("colorMode", color);
      setThemeSettings(false);
    };
  return (
    <AppContext.Provider
      value={{
        activeMenu,
        setActiveMenu,
        isclicked,
        setIsClicked,
        handleClick,
        screenSize,
        setScreenSize,
        currentColor,
        currentMode,
        setMode,
        setColor,
        themeSettings,
        setThemeSettings
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useStateContext() {
  return useContext(AppContext);
}
