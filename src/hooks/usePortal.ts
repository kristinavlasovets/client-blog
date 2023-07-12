import { useState } from 'react';

export const usePortal = () => {
  const [isPortalOpen, setIsPortalOpen] = useState<boolean>(false);

  const handleOpenPortal = () => {
    setIsPortalOpen(true);
  };

  const handleClosePortal = () => {
    setIsPortalOpen(false);
  };

  return { isPortalOpen, setIsPortalOpen, handleOpenPortal, handleClosePortal } as const;
};
