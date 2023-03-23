import React, { useEffect, useState, useRef } from 'react';

import { Repositories } from '../Repositories/index';
import { motion } from 'framer-motion';

const ProjectsSection = () => {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth);
  }, [carousel.current?.scrollWidth]);
  return (
    <>
      <motion.div
        ref={carousel}
        style={{ cursor: 'grab', overflow: 'hidden' }}
        whileTap={{ cursor: 'grabbing' }}
      >
        <motion.div
          style={{ display: 'flex', gap: 10 }}
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
        >
          <Repositories />
        </motion.div>
      </motion.div>
    </>
  );
};

export default ProjectsSection;
