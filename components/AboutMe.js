import styles from "@/styles/AboutMe.module.css";
import { RxOpenInNewWindow } from "react-icons/rx";
import Image from "next/image";
import {
  DiHtml5,
  DiJavascript1,
  DiCss3,
  DiGithubAlt,
  DiBootstrap,
  DiReact,
  DiCode,
  DiGit,
} from "react-icons/di";
export default function AboutMe() {
  function openPortoflio() {
    location.href = "https://portfolio.wpsgames.com.br/";
  }
  return (
    <>
      <div className={styles.about}>
        <div className={styles.image}>
          <Image
            src="images/terminal.png"
            alt="terminal de códigos"
            width={600}
            height={435}
          />
        </div>

        <div className={styles.description}>
          {/* <DiCode size="32" color="#656AF5" className={styles.icons} /> */}
          <Image
            className={styles.icons}
            src="images/favicon.svg"
            alt="terminal de códigos"
            width={32}
            height={42}
          />
          <h2>Prazer, sou Wagner Silva 👋 </h2>
          <p>
            Formado em Design Gráfico(
            <span data-tooltip="2012">UNIP</span>) , Desenvolvimento de Jogos
            Digitais(
            <span data-tooltip="2016">ETEC</span>) e Pós-Graduação em
            Desenvolvimento Fullstack de Sistemas Modernos para Nuvem (
            <span data-tooltip="2023">UNESC</span>). Apaixonado por tecnologias,
            trabalho com produção de sites, E-commerce (Salesforce SFCC),
            WordPress, SEO, aplicativos, PWA e jogos digitais utlizando
            metodologias ágeis como Scrum e Kanban.
          </p>

          <h3>Skills</h3>
          <div className={styles.iconsHeader}>
            <span data-tooltip="HTML5">
              {" "}
              <DiHtml5 size="32" className={styles.icons} />{" "}
            </span>
            <span data-tooltip="CSS3">
              {" "}
              <DiCss3 size="32" className={styles.icons} />
            </span>
            <span data-tooltip="Javascript">
              {" "}
              <DiJavascript1 size="32" className={styles.icons} />
            </span>
            <span data-tooltip="Bootstrap">
              {" "}
              <DiBootstrap size="32" className={styles.icons} />
            </span>
            <span data-tooltip="ReactJS">
              {" "}
              <DiReact size="32" className={styles.icons} />
            </span>
            <span data-tooltip="Github">
              {" "}
              <DiGithubAlt size="32" className={styles.icons} />
            </span>
            <span data-tooltip="Git">
              {" "}
              <DiGit size="32" className={styles.icons} />
            </span>
          </div>
          <button
            className={styles.buttonLight}
            onClick={openPortoflio}
            type="button"
          >
            <span>Ver portfolio</span>
            <RxOpenInNewWindow size={18} />
          </button>
        </div>
      </div>
    </>
  );
}
