import { Button } from '@mui/material';
import { motion } from 'framer-motion';

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
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          type: 'tween',
          duration: 1,
        }}
      >
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
            color: '#000',
          }}
        >
          <BsFillArrowUpSquareFill
            style={{
              border: '1px outset #fff',
              borderRadius: 10,
              background: '#fff',
            }}
          />
        </Button>
      </motion.div>
    </>
  );
}
