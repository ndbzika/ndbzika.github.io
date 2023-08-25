"use client";

import { Tooltip } from "@chakra-ui/react";
import Image from "next/image";
import { motion } from "framer-motion";

import styles from "./styles.module.scss";

type PaperProps = {
  name: string;
  image: string;
};

export const Paper = ({ name = "Tecnology", image = "/" }: PaperProps) => {
  const Item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <Tooltip label={name} as="div" className={styles.tooltip}>
      <motion.div variants={Item}>
        <Image src={image} alt={name} width={100} height={100} />
      </motion.div>
    </Tooltip>
  );
};
