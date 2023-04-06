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
  function activateLasers() {
    location.href = "https://portfolio.wpsgames.com.br/";
  }
  return (
    <>
      <div className={styles.iconsHeader}>
        <DiHtml5 size="32" color="#656AF5" className={styles.icons} />
        <DiCss3 size="32" color="#656AF5" className={styles.icons} />
        <DiJavascript1 size="32" color="#656AF5" className={styles.icons} />
        <DiBootstrap size="32" color="#656AF5" className={styles.icons} />
        <DiReact size="32" color="#656AF5" className={styles.icons} />
        <DiGithubAlt size="32" color="#656AF5" className={styles.icons} />
      </div>

      <div className={styles.hero}>
        <div className={styles.descriptionHero}>
          <h2>
            Olá prazer, <br />
            sou <strong>Wagner Silva</strong>!
          </h2>
          <p>
            Seja bem-vindo ao mundo da programação front-end! Como desenvolvedor
            front-end, você terá a oportunidade de criar e dar vida a interfaces
            de usuário atraentes e intuitivas para sites e aplicativos.
          </p>

          <div className={styles.btnsHero}>
            <button type="button">
              <a href="#blog">Saiba mais</a>{" "}
            </button>
            <button
              className={styles.buttonLight}
              onClick={activateLasers}
              type="button"
            >
              <span>Ver portfolio</span>
              <RxArrowRight />
            </button>
          </div>
        </div>

        <div className={styles.imageHero}>
          <img
            src="/images/wagner.png"
            alt="Imagem do autor do site em um computador"
          />
        </div>
      </div>
    </>
  );
}
