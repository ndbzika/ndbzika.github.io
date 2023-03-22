import { Container } from '@mui/material';
import { motion } from 'framer-motion';

import { WellcomeCard } from '../WellcomeCard/index';
import { MyPhoto } from '../MyPhoto';

export const PrincipalPage = () => {
  return (
    <Container
      sx={{
        position: 'relative',
        display: 'flex',
        alignItems: 'stretch',
        justifyContent: 'flex-start',
        top: '10vh',
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        layout
      >
        <WellcomeCard />
      </motion.div>
      <MyPhoto />
    </Container>
  );
};
