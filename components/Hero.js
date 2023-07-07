import styles from "@/styles/Hero.module.css";
import { RxArrowRight } from "react-icons/rx";
import {
  DiHtml5,
  DiJavascript1,
  DiCss3,
  DiGithubAlt,
  DiBootstrap,
  DiReact,
} from "react-icons/di";

export default function Hero() {
  function openPortfolio() {
    location.href = "https://portfolio.wpsgames.com.br/";
  }
  return (
    <>
      {/* <div className={styles.iconsHeader}>
        <DiHtml5 size="32" color="#656AF5" className={styles.icons} />
        <DiCss3 size="32" color="#656AF5" className={styles.icons} />
        <DiJavascript1 size="32" color="#656AF5" className={styles.icons} />
        <DiBootstrap size="32" color="#656AF5" className={styles.icons} />
        <DiReact size="32" color="#656AF5" className={styles.icons} />
        <DiGithubAlt size="32" color="#656AF5" className={styles.icons} />
      </div> */}

      <h1 className={styles.title}>
        Olá Prazer, sou 👋<br />
        <span>Wagner Silva</span>
      </h1>

      <div className={styles.hero}>
        <div className={styles.descriptionHero}>
          {/* <h1>
            Olá prazer, <br />
            sou <strong>Wagner Silva</strong>👋
          </h1> */}
          <img
            src="/images/image-port.png"
            alt="Imagem do autor do site em um computador"
            width="50px"
          />
          <div className={styles.btnsHero}>
            {/* <a href="#aboutMe" type="button">
              Sobre mim
            </a> */}

            <a
              href="https://portfolio.wpsgames.com.br/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.buttonLight}
              type="button"
            >
              <span>Ver portfolio</span>
              <RxArrowRight />
            </a>
          </div>
          <p>
            Seja bem-vindo ao mundo da programação front-end! Como desenvolvedor
            front-end.
          </p>
        </div>

        <div className={styles.imageHero}>
          <img
            src="/images/avatar-wps.png"
            alt="Imagem do autor do site em um computador"
          />
        </div>

        <div className={styles.text}>
          {/* <img
            src="/images/wagner.webp"
            alt="Imagem do autor do site em um computador"
          /> */}

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
