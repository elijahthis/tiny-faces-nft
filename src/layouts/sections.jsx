// import { useEffect, useRef } from "react";
import Logo from "../components/logo";
import Button from "../components/Button";
import "../css/main.css";
import { BsPlayFill } from "react-icons/bs";
import {
  FacebookIcon,
  TwitterIcon,
  GithubIcon,
  LinkedinIcon,
} from "../components/svgs";

// import { TweenMax, Power3 } from "gsap";

export const Hero = ({ title, body, image }) => {
  // useEffect(() => {
  //   TweenMax.from(heroTitle, 1, {
  //     opacity: 0,
  //     y: 40,
  //     ease: Power3.easeOut,
  //     delay: 0.5,
  //   });
  // }, []);

  return (
    <section className="hero-section">
      <div>
        <div className="heading">{title}</div>
        <p>{body}</p>
        <div className="actions">
          <Button>Join Discord</Button>
          <div>
            <p
              style={{
                fontSize: "18px",
                lineHeight: "27px",
                backgroundColor: "white",
                zIndex: "1",
              }}
            >
              Demo video
            </p>
            <div className="play-div">
              <BsPlayFill size={28} />
              <div className="play-circle"></div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <img src={image} alt="hero-nft" />
      </div>
    </section>
  );
};

export const SectionLayout1 = ({ imgPosn, title, body, image }) => {
  return (
    <section
      className="section-layout1"
      style={{
        flexDirection: imgPosn === "right" ? "row" : "row-reverse",
        gap: imgPosn === "right" ? "90px" : "40px",
      }}
    >
      <div style={{ maxWidth: imgPosn === "right" ? "711px" : "100%" }}>
        <h3>{title}</h3>
        <p>{body}</p>
      </div>
      <img src={image} alt="nft" />
    </section>
  );
};

export const SectionLayout2 = ({ title, body, children, cls }) => {
  return (
    <section className={"section-layout2 " + cls}>
      <div>
        <h3>{title}</h3>
        <p>{body}</p>
      </div>
      {children}
    </section>
  );
};

export const CommunityLayout = ({ imgPosn, title, body, image, children }) => {
  return (
    <section
      className="section-layout1 community-layout"
      style={{
        flexDirection: imgPosn === "right" ? "row" : "row-reverse",
        gap: imgPosn === "right" ? "90px" : "40px",
      }}
    >
      <div style={{ maxWidth: imgPosn === "right" ? "711px" : "100%" }}>
        <h3>{title}</h3>
        <p>{body}</p>
        {children}
      </div>
      <img src={image} alt="nft" />
    </section>
  );
};

export const Footer = () => {
  return (
    <footer>
      <div>
        <div>
          <div>
            <Logo />
          </div>
          <p>
            Nor again is there anyone who loves or pursues or desires to obtain
            pain of itself.
          </p>
        </div>
        <div>
          <h5>About</h5>
          <ul>
            <li>Home</li>
            <li>Features</li>
            <li>FAQs</li>
            <li>Reviews</li>
            <li>Stories</li>
          </ul>
        </div>
        <div>
          <h5>Privacy</h5>
          <ul>
            <li>Privacy Policy</li>
            <li>Payment</li>
            <li>Terms of Service</li>
          </ul>
        </div>
        <div>
          <h5>Contact Us</h5>
          <ul>
            <li>+2347017271571</li>
            <li>emperorelijah007@gmail.com</li>
          </ul>
          <div className="socials">
            <FacebookIcon link="https://www.linkedin.com/in/elijah-oyerinde-070a24215/" />
            <TwitterIcon link="https://twitter.com/elijahthis" />
            <LinkedinIcon link="https://www.linkedin.com/in/elijah-oyerinde-070a24215/" />
            <GithubIcon link="https://github.com/elijahthis" />
          </div>
        </div>
      </div>
      <div>
        <p>
          Built by{" "}
          <a
            href="https://elijahthis-portfolio.netlify.app"
            target="_blank"
            rel="noreferrer"
            className="elijah"
          >
            Elijah
          </a>
          <span style={{ marginLeft: "28px" }}>
            UI:{" "}
            <a
              href="https://uikit.to"
              target="_blank"
              rel="noreferrer"
              className="elijah"
            >
              uikit.to
            </a>
          </span>
        </p>
        <div>
          <p>Contact Us</p>
          <p>Terms</p>
        </div>
      </div>
    </footer>
  );
};
