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
  const handleClick = (clicked) => {
    setIsClicked({ ...initialState, [clicked]: true });
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
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useStateContext() {
  return useContext(AppContext);
}
