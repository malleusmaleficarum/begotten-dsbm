"use client";
import Image from "next/image";
import style from "./style.module.scss";
import Close from "/public/images/close.svg?svgr";
import { cloisterBlack } from "@/utils/fonts";
import { useState } from "react";

export default function ModalDiscography({ setModalDisco }) {
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
          <div className={style.member}>
            <ul>
              <li>
                <p>
                  <b>Bobby Prentice</b> - Guitar/Bass/Piano/Drums
                </p>
              </li>

              <li>
                <p>
                  <b>Thomas Learner</b> - Vocals
                </p>
              </li>
              <li>
                <p>
                  <b>Dave Sherk</b> - Guitar
                </p>
              </li>
            </ul>
          </div>
          <div className={style.info}>
            <p>
              Music by Bobby Prentice
              <br />
              Lyrics by Bobby Prentice and Thomas Learner
              <br />
              Engineered, Mixed, & Mastered by Dave Sherk/To Dust Productions
              <br />
              Artwork & layout by Dave Sherk & Bobby Prentice
              <br />
              Produced by Begotten
            </p>
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
            <div style={{ marginBottom: "10px" }}>
              <h1 className={`${cloisterBlack.className} ${style.title}`}>
                Nothing Worth Remembering
              </h1>
              <h2>2021</h2>
            </div>

            {/* Tracks */}
            <div className={style.tracks}>
              <ul>
                <li>Nothing Worth Remembering I</li>
                <li>Nothing Worth Remembering II</li>
                <li>Nothing Worth Remembering III</li>
              </ul>
            </div>
            {/* Info */}
            <div className={style.info2}>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
                eligendi officia ipsa, totam facere itaque, qui voluptate
                aliquam praesentium, tempora voluptatibus culpa fugiat ut!
                Laborum voluptas eveniet quam doloremque a ipsum accusantium
                atque, rem est voluptatum ab at maiores, suscipit deleniti
                consequuntur cum odit aliquid quisquam soluta veniam. Tempora,
                ratione!
              </p>
            </div>
          </div>
        </div>
        {/* Close Icon */}
        <Close className={style.close} onClick={() => setModalDisco(false)} />
      </div>
    </div>
  );
}
