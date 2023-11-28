import React, { createContext, useContext, useState, useEffect, ReactNode, useCallback } from 'react';

interface UserContextValue {
  username: string;
  isLoggedIn: boolean;
  handleOpen: () => void;
  handleClose: () => void;
}

const UserContext = createContext<UserContextValue | undefined>(undefined);

export function useUserContext() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUserContext must be used within a UserProvider');
  }
  return context;
}

interface UserProviderProps {
  children: ReactNode;
}

const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [login, setLogin] = useState(false);

  const handleOpen = useCallback(() => {
    setLogin(true);
  }, []);

  const handleClose = useCallback(() => {
    setLogin(false);
  }, []);

  const contextValue: UserContextValue = {
    username: '', // Initialize with default value or fetch from state/props
    isLoggedIn: login,
    handleOpen,
    handleClose,
  };

  return <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>;
};

export default UserProvider;
