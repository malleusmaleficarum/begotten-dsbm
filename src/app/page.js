import style from "./page.module.scss";
import Discography from "../components/Discography/index.js";
import Social from "../components/Social";
import Image from "next/image";

export default function Home() {
  return (
    <main className={style.main}>
      <div className={style.container}>
        <div className={style.logo}>
          <Image
            src='/images/begotten-logo.png'
            alt='Logo'
            width={600}
            height={0}
          />
        </div>
        <Discography />
        <footer className={style.footer}>
          <p>Copyright &copy; 2023 Begotten DSBM. All right reserved.</p>
        </footer>
        <Social />
      </div>
    </main>
  );
}
