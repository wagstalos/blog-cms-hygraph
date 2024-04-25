import { RxLinkedinLogo, RxGithubLogo } from "react-icons/rx";
import { DiCodepen } from "react-icons/di";
import Image from "next/image";
export default function Hero() {
  return (
    <>
      <div className="container">
        <div>
          <p>
            <a href="https://portfolio.wpsgames.com.br/">
              {" "}
              <strong>© Wagner Silva </strong>
            </a>
            2023 😎
          </p>
        </div>

        <div>
          <a
            href="https://codepen.io/wagstalos"
            target="_blank"
            rel="noopener noreferrer"
          >
            <DiCodepen size="28" />
          </a>
          <a
            href="https://www.linkedin.com/in/wagner-silva-6a163555/ "
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <RxLinkedinLogo size="24" />
          </a>
          <a
            href="https://github.com/wagstalos"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <RxGithubLogo size="24" />
          </a>
        </div>
      </div>

      <div className="wps">
        <a href="https://wpsgames.com.br/">
          <p>Desenvolvido por:</p>
          <Image
            src="images/favicon.svg"
            alt="terminal de códigos"
            width={32}
            height={42}
          />
        </a>
      </div>
    </>
  );
}
