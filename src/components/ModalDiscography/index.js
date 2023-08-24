"use client";
import Image from "next/image";
import style from "./style.module.scss";
import Close from "/public/images/close.svg?svgr";
import { cloisterBlack } from "@/utils/fonts";
import { useState } from "react";

export default function ModalDiscography() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={style.container}>
      <div className={style["content-wrapper"]}>
        {/* Left Side */}
        <div className={style["first-side"]}>
          {/* Div for Image */}
          <div className={style.cover}>
            <Image
              src='/images/nothing-worth-remembering.jpg'
              alt='Album Cover'
              width={500}
              height={0}
              priority={true}
            />
          </div>
        </div>
        {/* Right Side */}
        <div className={style["second-side"]}>
          <Image
            src='/images/background-modal-1.png'
            alt='Background'
            width={900}
            height={0}
            priority={true}
            className={style["background-modal"]}
          />
          <div className={style["second-content"]}>
            <h1 className={`${cloisterBlack.className} ${style.title}`}>
              Nothing Worth Remembering
            </h1>
          </div>
        </div>
        {/* Close Icon */}
        <Close className={style.close} />
      </div>
    </div>
  );
}
