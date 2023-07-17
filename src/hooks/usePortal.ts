import { useState } from 'react';

export const usePortal = () => {
  const [isPortalOpen, setIsPortalOpen] = useState<boolean>(false);

  const handleTogglePortal = () => {
    setIsPortalOpen((prevState) => !prevState);
  };

  return { isPortalOpen, setIsPortalOpen, handleTogglePortal } as const;
};
