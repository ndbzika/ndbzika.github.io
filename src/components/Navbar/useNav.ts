import { useRef } from 'react';

type useNavProps = {
  styles: { readonly [key: string]: string; }
}

export const useNav = ({ styles }: useNavProps) => {
  const menuRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLDivElement>(null);

  const handleOpenMenu = () => {
    navRef.current?.classList.toggle(styles.open);
  }

  return { menuRef, navRef, handleOpenMenu }
}
