import { useState } from "react";

export const usePage = () => {
  const [isTechSTackOpen, setIsTechStackOpen] = useState(false);
  const handleToggleTechStack = () => setIsTechStackOpen(!isTechSTackOpen);

  return { isTechSTackOpen, handleToggleTechStack };
};
