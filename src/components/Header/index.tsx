'use client'

import Image from 'next/image';
import Link from 'next/link';
import { SiGithub, SiGmail, SiLinkedin } from "react-icons/si";
import { HeaderContainer, HeaderList } from './styled';

export const Header = () => {
  return (
    <HeaderContainer>
      <Image src="/logo.svg" alt="Logo" width={100} height={100} />

      <HeaderList>
        <li>
          <Link href='mailto:flaviohenriquefc@gmail.com'>
            <SiGmail size='36px' />
          </Link>
        </li>
        <li>
          <Link href='https://www.linkedin.com/in/flaviohenriquedev/' target='_blank'>
            <SiLinkedin size='36px' />
          </Link>
        </li>
        <li>
          <Link href='https://github.com/ndbzika' target='_blank'>
            <SiGithub size='36px' />
          </Link>
        </li>
      </HeaderList>
    </HeaderContainer>
  );
};
