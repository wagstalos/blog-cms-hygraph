import { RxSketchLogo } from "react-icons/rx";
import {
  DiHtml5,
  DiJavascript1,
  DiCss3,
  DiGithubAlt,
  DiBootstrap,
  DiReact,
} from "react-icons/di";
export default function Marquee() {
  return (
    <marquee behavior="" direction="">
      <div className="d-flex">
        <div>
          <RxSketchLogo
            size="18"
            color="#656AF5"
            className="icons-marquee"
          />{" "}
          <span>Frontend</span> ♦
        </div>
        <div>
          {" "}
          <DiHtml5 size="20" color="#656AF5" className="icons-marquee" />
          <span>HTML</span>♦
        </div>
        <div>
          {" "}
          <DiCss3 size="20" color="#656AF5" className="icons-marquee" />
          <span>CSS3</span>♦
        </div>
        <div>
          {" "}
          <DiJavascript1 size="20" color="#656AF5" className="icons-marquee" />
          <span>Javascript</span>♦
        </div>
        <div>
          {" "}
        <DiReact size="20" color="#656AF5" className="icons-marquee" />
        <span>ReactJS</span>♦
        </div>
        <div>
          {" "}
          <DiBootstrap size="20" color="#656AF5" className="icons-marquee" />
         <span>Bootstrap</span>♦
        </div>
        <div>
          {" "}
          <DiGithubAlt size="20" color="#656AF5" className="icons-marquee" />
        <span>Github</span>♦
        </div>
      </div>
    </marquee>
  );
}
