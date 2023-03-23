import { motion } from 'framer-motion';
import { Avatar } from '@mui/material';

import Photo from '../../images/flavio.png';

export const MyPhoto = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ type: 'tween', duration: 2 }}
    >
      <Avatar
        src={Photo}
        alt="Flávio Henrique"
        sx={{ width: 500, height: 500 }}
      />
    </motion.div>
  );
};
