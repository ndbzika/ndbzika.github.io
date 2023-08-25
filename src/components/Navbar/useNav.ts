import { useState } from "react";

export const useNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleOpenMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return { isMenuOpen, handleOpenMenu };
};
