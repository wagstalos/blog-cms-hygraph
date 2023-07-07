import { RxSketchLogo, RxLightningBolt } from "react-icons/rx";
import {
  DiHtml5,
  DiJavascript1,
  DiCss3,
  DiGithubAlt,
  DiBootstrap,
  DiReact,
  DiWordpress,
  DiSass
} from "react-icons/di";

export default function Marquee() {
  return (
    <div className="marquee">
      <img className="selo" src="images/SELO.svg" alt="" />
    <marquee behavior="" direction="">
      <div className="d-flex">
        <div>
          <RxSketchLogo size="18" color="#656AF5" className="icons-marquee" />{" "}
          <span>Frontend</span> <RxLightningBolt size={16} />
        </div>
        <div>
          {" "}
          <DiHtml5 size="20" color="#656AF5" className="icons-marquee" />
          <span>HTML</span><RxLightningBolt size={16} />
        </div>
        <div>
          {" "}
          <DiCss3 size="20" color="#656AF5" className="icons-marquee" />
          <span>CSS3</span><RxLightningBolt size={16}/>
        </div>
        <div>
          {" "}
          <DiSass size="20" color="#656AF5" className="icons-marquee" />
          <span>SASS</span><RxLightningBolt size={16}/>
        </div>
        <div>
          {" "}
          <DiJavascript1 size="20" color="#656AF5" className="icons-marquee" />
          <span>Javascript</span><RxLightningBolt size={16}/>
        </div>
        <div>
          {" "}
          <DiReact size="20" color="#656AF5" className="icons-marquee" />
          <span>ReactJS</span><RxLightningBolt size={16}/>
        </div>
        <div>
          {" "}
          <DiBootstrap size="20" color="#656AF5" className="icons-marquee" />
          <span>Bootstrap</span><RxLightningBolt size={16}/>
        </div>
        <div>
          {" "}
          <DiGithubAlt size="20" color="#656AF5" className="icons-marquee" />
          <span>Github</span>
        </div>
        <div>
          {" "}
          <DiWordpress size="20" color="#656AF5" className="icons-marquee" />
          <span>Wordpress</span>
        </div>
      </div>
    </marquee>
    </div>
  );
}
