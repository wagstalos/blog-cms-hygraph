import styles from "@/styles/AboutMe.module.css";
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
  return (
    <>
      <div className={styles.about}>
        <div className={styles.image}>
          <img src="https://mkt.croct.com/_next/image?url=https%3A%2F%2Fcdn.croct.io%2Fassets%2Fapp%2F92894646-dc3d-4553-bfaf-194598f6aa4c%2Fimages%2Flp-onboarding-personalization.png&w=828&q=75" />
        </div>

        <div className={styles.description}>
          <DiCode size="32" color="#656AF5" className={styles.icons} />
          <h2>Prazer, sou Wagner Paulo</h2>
          <p>
            Formado em Design Gráfico (UNIP) , Desenvolvimento de Jogos Digitais
            (ETEC) e cursando Pós-Graduação Desenvolvimento Fullstack de
            Sistemas Modernos para Nuvem (Cloud Native). Apaixonado por
            tecnologias, trabalho com produção de sites, E-commerce (Salesforce
            SFCC), WordPress, SEO, aplicativos, PWA e jogos digitais utlizando
            metodologias ágeis como Scrum e Kanban .
          </p>

          <h3>Skills</h3>
          <div className={styles.iconsHeader}>
            <DiHtml5 size="32" className={styles.icons} />
            <DiCss3 size="32" className={styles.icons} />
            <DiJavascript1 size="32" className={styles.icons} />
            <DiBootstrap size="32" className={styles.icons} />
            <DiReact size="32" className={styles.icons} />
            <DiGithubAlt size="32" className={styles.icons} />
            <DiGit size="32" className={styles.icons} />
          </div>
        </div>
      </div>
    </>
  );
}
