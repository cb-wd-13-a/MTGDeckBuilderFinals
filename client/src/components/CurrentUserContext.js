import React, { createContext } from "react";
import { useEffect } from "react";

export const CurrentUserContext = createContext();

export const CurrentUserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = React.useState("");
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [loggedOut, setLoggedOut] = React.useState(false);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    const loggedOuttUser = loggedOut;
    console.log("loggedInUser", loggedInUser);
    if (loggedInUser) {
      setCurrentUser(loggedInUser);
      setLoggedIn(true);
    } else {
      setCurrentUser(loggedOuttUser);
      setLoggedOut(true);
    }
  }, []);
  return (
    <CurrentUserContext.Provider
      value={{
        currentUser,
        setCurrentUser,
        loggedIn,
        setLoggedIn,
        loggedOut,
        setLoggedOut,
      }}
    >
      {children}
    </CurrentUserContext.Provider>
  );
};
