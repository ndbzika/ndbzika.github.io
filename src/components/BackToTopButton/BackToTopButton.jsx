import { Button } from '@mui/material';

import { BsFillArrowUpSquareFill } from 'react-icons/bs';

export function BackToTopButton() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <Button
        variant="text"
        onClick={scrollToTop}
        sx={{
          position: 'fixed',
          left: '93%',
          bottom: 40,
          height: 20,
          fontSize: '3rem',
          zIndex: 1,
          cursor: 'pointer',
          color: 'lightblue',
        }}
      >
        <BsFillArrowUpSquareFill
          style={{ border: '1px solid darkblue', borderRadius: 10 }}
        />
      </Button>
    </>
  );
}
