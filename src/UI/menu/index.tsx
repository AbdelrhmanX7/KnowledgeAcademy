import React, { MouseEvent, ReactNode } from 'react';
import Menu, { MenuProps } from '@mui/material/Menu';
import { PaperProps } from '@mui/material/Paper';

interface TheMenuProps extends MenuProps {
  children: ReactNode;
  handleClick: (event: MouseEvent<HTMLElement>) => void;
  handleClose: () => void;
}

export function TheMenu({ children, handleClick, handleClose, anchorEl, open }: TheMenuProps) {
  const paperProps: PaperProps = {
    elevation: 0,
    sx: {
      overflow: 'visible',
      filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
      mt: 1.5,
      '& .MuiAvatar-root': {
        width: 32,

        ml: -0.5,
        mr: 1,
      },
      '&:before': {
        content: '""',
        display: 'block',
        position: 'absolute',
        top: 0,
        right: 14,
        width: 10,
        height: 10,
        bgcolor: 'background.paper',
        transform: 'translateY(-50%) rotate(45deg)',
        zIndex: 0,
      },
    },
  };

  const menuProps: MenuProps = {
    anchorEl,
    id: 'account-menu',
    open,
    onClose: handleClose,
    onClick: handleClose,
    PaperProps: paperProps,
    transformOrigin: { horizontal: 'right', vertical: 'top' },
    anchorOrigin: { horizontal: 'right', vertical: 'bottom' },
  };

  return (
    <React.Fragment>
      <Menu {...menuProps}>{children}</Menu>
    </React.Fragment>
  );
}

export default TheMenu;
