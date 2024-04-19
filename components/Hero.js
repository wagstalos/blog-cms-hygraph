import styles from "@/styles/Hero.module.css";
import { RxArrowRight, RxArrowTopRight } from "react-icons/rx";

import Image from "next/image";

import { DiGithubAlt } from "react-icons/di";
import { RxLinkedinLogo, RxGithubLogo } from "react-icons/rx";
import { DiCodepen } from "react-icons/di";
import { FaInstagram, FaBehance } from "react-icons/fa";

export default function Hero() {
  function openPortfolio() {
    location.href = "https://portfolio.wpsgames.com.br/";
  }
  return (
    <>
      <div className={styles.iconsHeader}>
        <a href="https://codepen.io/wagstalos">
          <DiCodepen size="36" color="" className={styles.icons} />
        </a>

        <a href="https://github.com/wagstalos">
          <RxGithubLogo size="32" color="" className={styles.icons} />
        </a>

        <a href="https://www.linkedin.com/in/wagner-silva-6a163555/">
          <RxLinkedinLogo size="32" color="" className={styles.icons} />
        </a>

        <a href="https://www.instagram.com/wagner.paulo89/">
          <FaInstagram size="32" color="" className={styles.icons} />
        </a>

        <a href="https://www.behance.net/wagstalos89">
          <FaBehance size="32" color="" className={styles.icons} />
        </a>
      </div>

      <h1 className={styles.title}>
        Olá Prazer, sou 👋
        <br />
        <span className={styles.gradient}>Wagner Silva</span>
      </h1>

      <div className={styles.hero}>
        <div className={styles.descriptionHero}>
          <Image
            src="images/image-port.png"
            alt="Imagem do autor do site em um computador"
            width={200}
            height={162}
          />
          <div className={styles.btnsHero}>
            <a
              href="https://portfolio.wpsgames.com.br/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.buttonLight}
              type="button"
            >
              <span>Visite meu portfólio</span>
              <RxArrowTopRight />
            </a>
          </div>

          <p>
            Seja bem-vindo ao mundo da programação <strong>frontend</strong>!{" "}
            <br />
            Dicas, carreira e muito mais.
          </p>
        </div>

        <div className={styles.imageHero}>
          <Image
            src="images/avatar-wps.png"
            alt="Imagem do autor do site em um computador"
            width={600}
            height={520}
          />

          <Image
            className={styles.imageCss}
            src="images/css.png"
            alt="css3"
            width={42}
            height={47}
          />

          <Image
            className={styles.imageHtml}
            src="images/html.png"
            alt="html5"
            width={42}
            height={47}
          />

          <Image
            className={styles.imageJs}
            src="images/js.png"
            alt="js"
            width={42}
            height={47}
          />
          <div className={styles.fade}></div>
        </div>

        <div className={styles.text}>
          <ul>
            <li>
              <h2 className={styles.gradient}>+25</h2>
              <p>Landing pages</p>
            </li>
            <li>
              <h2 className={styles.gradient}>+4</h2>
              <p>SF Commerce Cloud</p>
            </li>
            <li>
              <h2 className={styles.gradient}>+200</h2>
              <p>Jogos 2d</p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
