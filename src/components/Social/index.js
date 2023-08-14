import style from "./style.module.scss";
import Instagram from "/public/images/instagram.svg?svgr";
import Bandcamp from "/public/images/bandcamp.svg?svgr";
import Spotify from "/public/images/spotify.svg?svgr";
import Link from "next/link";

export default function Social() {
  return (
    <div className={style.social}>
      <Link href={"https://www.instagram.com/begottendsbm/"} target='_blank'>
        <Instagram />
      </Link>
      <Link href={"https://begottendsbm.bandcamp.com/"} target='_blank'>
        <Bandcamp />
      </Link>
      <Link
        href={"https://open.spotify.com/artist/1bQRTGYikcpW5lu4HsTCYI"}
        target='_blank'
      >
        <Spotify />
      </Link>
    </div>
  );
}
