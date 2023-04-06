import styles from "@/styles/Hero.module.css";
export default function Hero() {
  return (
    <>
      <div className={styles.hero}>
        <div>
          <h2>
            Olá prazer, <br />
            sou <strong>Wagner Silva</strong>
          </h2>
          <p>
            Seja bem-vindo ao mundo da programação front-end! Como desenvolvedor
            front-end, você terá a oportunidade de criar e dar vida a interfaces
            de usuário atraentes e intuitivas para sites e aplicativos. Seu
            trabalho será criar uma experiência de usuário perfeita que combine
            habilmente design e tecnologia.
          </p>
        </div>
        <div>
          <img
            src="https://portfolio.wpsgames.com.br/static/media/avatarSF.80b92329.png"
            alt=""
          />
        </div>
      </div>
    </>
  );
}
