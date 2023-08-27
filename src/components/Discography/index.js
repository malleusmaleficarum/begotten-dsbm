'use client';
import { useState } from 'react';
import Modal from '../Modal';
import styles from './style.module.scss';
import { motion } from 'framer-motion';

const discography = [
  {
    title: 'Nothing Worth Remembering',
    coverLink: '/images/nothing-worth-remembering.jpg',
  },
  {
    title: 'A Waning Silhouette',
    coverLink: '/images/a-waning-silhouette.jpg',
  },
  {
    title: 'If All You Have Known Is Winter',
    coverLink: '/images/if-all-you-have-known-is-winter.jpg',
  },
  {
    title: 'Black Crow Blues',
    coverLink: '/images/black-crow-blues.jpg',
  },
  {
    title: 'And The Wind Cries Death',
    coverLink: '/images/and-the-wind-cries-death.jpg',
  },
];

const animText = {
  initial: {
    filter: 'blur(0px)',
    opacity: 1,
    zIndex: 4,
  },
  open: {
    filter: 'blur(3px)',
    opacity: 0.4,
    zIndex: 0,
    transition: { duration: 0.5 },
  },
  close: {
    filter: 'blur(0px)',
    opacity: 1,
    zIndex: 4,
    transition: { duration: 0.5 },
  },
};

export default function Discography({ setModalDisco }) {
  const [modal, setModal] = useState({ isActive: false, index: 0 });

  return (
    <motion.main
      className={styles.container}
      initial={{ opacity: 0, y: '10px', transition: { duration: 1 } }}
      animate={{
        opacity: 1,
        y: 0,
        transition: { duration: 1, delay: 1.5 },
      }}
    >
      <Modal modal={modal} disco={discography} />
      {discography.map((disco, index) => (
        <span
          key={index}
          className={styles.title}
          onMouseEnter={() => {
            setModal({ isActive: true, index });
          }}
          onMouseLeave={() => {
            setModal({ isActive: false, index });
          }}
        >
          <motion.span
            onClick={() => setModalDisco(true)}
            className={styles.discotitle}
            variants={animText}
            initial='initial'
            animate={modal.isActive && modal.index !== index ? 'open' : 'close'}
          >
            {disco.title}
          </motion.span>
          <span className={styles.divider}>
            {index === discography.length - 1 ? '' : ' — '}
          </span>
        </span>
      ))}
    </motion.main>
  );
}
