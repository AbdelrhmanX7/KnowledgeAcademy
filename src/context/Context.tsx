import React, { createContext, useContext, useState, useEffect, ReactNode, useCallback } from 'react';

interface UserContextValue {
  username: string;
  isLoggedIn: boolean;
  handleOpen: () => void;
  handleClose: () => void;
  handleClickOpen: () => void;
  openDialog: boolean;
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
  const [openDialog, setOpenDialog] = useState(false);

  const handleClickOpen = () => {
    setOpenDialog(true);
  };

  const handleClose = () => {
    setOpenDialog(false);
  };
  const contextValue: UserContextValue = {
    openDialog,
    setOpenDialog,
    handleClickOpen,
    handleClose,
  };

  return <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>;
};

export default UserProvider;
