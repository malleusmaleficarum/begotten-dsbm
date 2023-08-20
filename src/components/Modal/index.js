import Image from "next/image";
import style from "./style.module.scss";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const scaleAnim = {
  initial: { opacity: 0, x: "-50%", y: "-50%" },
  active: {
    opacity: 1,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    opacity: 0,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.65, 0, 0.35, 1] },
  },
};

export default function Modal({ modal, disco }) {
  const selector = useRef(null);

  useEffect(() => {
    const posX = gsap.quickTo(selector.current, "left", {
      duration: 0.8,
      ease: "power3",
    });
    const posY = gsap.quickTo(selector.current, "top", {
      duration: 0.8,
      ease: "power3",
    });

    window.addEventListener("mousemove", (e) => {
      posX(e.pageX);
      posY(e.pageY);
    });

    return () => {
      window.removeEventListener("mouseover", (e) => {
        posX(e.pageX);
        posY(e.pageY);
      });
    };
  }, []);

  return (
    <motion.div
      variants={scaleAnim}
      initial='initial'
      animate={modal.isActive ? "active" : "closed"}
      className={style.modal}
      ref={selector}
    >
      <Image
        src={`${disco[modal.index].coverLink}`}
        alt='Cover'
        width={250}
        height={250}
        priority={true}
      />
    </motion.div>
  );
}
