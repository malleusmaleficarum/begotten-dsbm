"use client";
import style from "./page.module.scss";
import Discography from "../components/Discography/index.js";
import Social from "../components/Social";
import Image from "next/image";
import Hang from "/public/images/hang-2.svg?svgr";
import ModalDiscography from "@/components/ModalDiscography";
import ModalBio from "@/components/ModalBio";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const animationInit = {
  initial: {
    opacity: 0,
    y: "10%",
    transition: { duration: 1 },
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, delay: 1.2 },
  },

  exit: { opacity: 0 },
};

export default function Home() {
  const [modalBio, setModalBio] = useState(false);
  const [modalDisco, setModalDisco] = useState(false);

  return (
    <main className={style.main}>
      <Image
        src='/images/background-home.png'
        alt='Background'
        width={1400}
        height={0}
        priority={true}
        className={style.background}
      />
      <div className={style.container}>
        <motion.div
          className={style.hang}
          initial={{ opacity: 0, y: "-70%" }}
          animate={{
            opacity: 1,
            y: "-3%",
            transition: { duration: 1.5, ease: [0.47, 1.64, 0.41, 0.8] },
          }}
        >
          <Hang />
        </motion.div>
        <motion.div className={style.content}>
          <motion.div
            className={style.logo}
            onClick={() => setModalBio(true)}
            initial={{ opacity: 0, y: "10%", transition: { duration: 1 } }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { duration: 1, delay: 1.2 },
            }}
          >
            <Image
              src='/images/begotten-logo.png'
              alt='Logo'
              width={600}
              height={0}
              priority={true}
            />
          </motion.div>
          <Discography setModalDisco={setModalDisco} />
        </motion.div>

        <motion.footer
          className={style.footer}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 1.7 } }}
        >
          <p>Copyright &copy; 2023 Begotten DSBM. All right reserved.</p>
        </motion.footer>
        <Social />
      </div>
      <AnimatePresence>
        {modalBio && <ModalBio setModalBio={setModalBio} />}
        {modalDisco && <ModalDiscography setModalDisco={setModalDisco} />}
      </AnimatePresence>
    </main>
  );
}
