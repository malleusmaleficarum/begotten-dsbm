import style from "./page.module.scss";
import Discography from "../components/Discography/index.js";
import Social from "../components/Social";
import Image from "next/image";
import Hang from "/public/images/hang-2.svg?svgr";
import ModalDiscography from "@/components/ModalDiscography";

export default function Home() {
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
        <div className={style.hang}>
          <Hang />
        </div>
        <div className={style.content}>
          <div className={style.logo}>
            <Image
              src='/images/begotten-logo.png'
              alt='Logo'
              width={600}
              height={0}
              priority={true}
            />
          </div>
          <Discography />
        </div>
        <footer className={style.footer}>
          <p>Copyright &copy; 2023 Begotten DSBM. All right reserved.</p>
        </footer>
        <Social />
      </div>
      <ModalDiscography />
    </main>
  );
}
