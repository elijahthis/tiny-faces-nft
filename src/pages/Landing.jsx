import { useEffect, useRef } from "react";
import { TweenMax, Power3 } from "gsap";
import NavBar from "../components/Navbar";
import {
  Hero,
  SectionLayout1,
  SectionLayout2,
  CommunityLayout,
  Footer,
} from "../layouts/sections";
import { FeatureCard, FlashCard, QuoteCard } from "../components/cards";
import { BsPlayFill } from "react-icons/bs";
import heroImg from "../images/hero-img.png";
import nft1 from "../images/nft-0001.png";
import nft2 from "../images/nft-0002.png";
import nft3 from "../images/nft-0003.png";
import nft4 from "../images/nft-0004.png";
import nft5 from "../images/nft-0005.png";
import nft6 from "../images/nft-0006.png";
import ellipse1 from "../images/Ellipse 1.png";
import ellipse2 from "../images/Ellipse 2.png";
import ellipse3 from "../images/Ellipse 3.png";
import ellipse4 from "../images/Ellipse 4.png";
import ellipse5 from "../images/Ellipse 5.png";
import ellipse6 from "../images/Ellipse 6.png";
import cardImg1 from "../images/card-img1.png";
import cardImg2 from "../images/card-img2.png";
import cardImg3 from "../images/card-img3.png";
import Button from "../components/Button";

const Landing = () => {
  let heroHeaderRef1 = useRef(null);
  let heroHeaderRef2 = useRef(null);
  let heroHeaderRef3 = useRef(null);
  let heroHeaderRef4 = useRef(null);
  useEffect(() => {
    console.log(heroHeaderRef1);
    TweenMax.staggerTo(
      [heroHeaderRef1, heroHeaderRef2, heroHeaderRef3, heroHeaderRef4],
      0.5,
      {
        opacity: 1,
        y: 0,
        ease: Power3.easeOut,
      },
      0.2
    );
  }, []);

  const cardList = [
    {
      title: "Unique TinyFaces",
      body: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet.",
      image: cardImg1,
    },
    {
      title: "Huge Special Accessories",
      body: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet.",
      image: cardImg2,
    },
    {
      title: "500+ Combinations",
      body: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet.",
      image: cardImg3,
    },
  ];
  const flashCardList = [
    {
      val: "10M",
      body: "Designs created",
    },
    {
      val: "250+",
      body: "Countries Worldwide",
    },
    {
      val: "500K",
      body: "Happy Users",
    },
    {
      val: "2817",
      body: "Different Languages",
    },
  ];
  const quoteCard = {
    quote:
      "Yet preference connection unpleasant yet melancholy but end appearance. And excellence partiality estimating terminated day everything.",
    name: "Elijah",
    tag: "@elijahthis",
  };
  const ellipses = [ellipse1, ellipse2, ellipse3, ellipse4, ellipse5, ellipse6];

  return (
    <main>
      <NavBar />
      <div className="body-div">
        <Hero
          title={
            <>
              <h1>
                <span className="highlight" ref={(el) => (heroHeaderRef1 = el)}>
                  Find
                </span>
              </h1>{" "}
              <h1>
                <span ref={(el) => (heroHeaderRef2 = el)}>Your</span>
              </h1>{" "}
              <h1>
                <span ref={(el) => (heroHeaderRef3 = el)}>Favourite </span>
              </h1>{" "}
              <h1>
                <span className="highlight" ref={(el) => (heroHeaderRef4 = el)}>
                  Character
                </span>
              </h1>
            </>
          }
          body="Characterised by soft lighting, vintage colour schemes and quirky
      costumes, these generative 3D TinyFaces are the addition to your NFT
      collection you???ve been waiting for."
          image={heroImg}
        />

        <SectionLayout2
          title={
            <>
              {"Thousands Of "}
              <span className="highlight">Features</span>
              {" Waiting for you "}
            </>
          }
          body="Characterised by soft lighting, vintage colour schemes and quirky costumes, these generative 3D TinyFaces are the addition to your NFT collection you???ve been waiting for."
        >
          <div className="cards">
            {cardList.map((card, ind) => (
              <FeatureCard cardData={card} key={ind} />
            ))}
          </div>
        </SectionLayout2>

        <SectionLayout2
          title={
            <>
              <span className="highlight">Recently</span>
              {" Added"}
            </>
          }
          body="Characterised by soft lighting, vintage colour schemes and quirky costumes, these generative 3D TinyFaces are the addition to your NFT collection you???ve been waiting for."
        >
          <div className="nfts">
            <img src={nft1} alt="nft 1" />
            <img src={nft2} alt="nft 2" />
            <img src={nft3} alt="nft 3" />
          </div>
        </SectionLayout2>

        <SectionLayout1
          title={
            <>
              <span className="highlight">5000+</span>
              {" Unique TinyFaces "}
            </>
          }
          body="Each character is entirely unique and is generated by combining hundreds of attributes such as colour palettes, skin tones, facial traits, outfits and accessories. With nearly endless combinations, all characters are guaranteed to be one of a kind."
          image={nft4}
          imgPosn="right"
        />

        <SectionLayout1
          title={
            <>
              <span className="highlight">Secure</span>
              {" The Most Rare "}
            </>
          }
          body="Even though no two Tinyfaces will ever be the same, some variations are rarer than others. Watch out for special accessories and metal skin tones - the rarer the attributes, the rarer your character will be."
          image={nft5}
          imgPosn="left"
        />

        <SectionLayout2
          title={
            <>
              <span className="highlight">About</span>
              {" Us"}
            </>
          }
          body="Launched in 2021, TinyFaces is an online design and publishing tool with a mission to empower everyone in the world to design anything and publish anywhere."
        >
          <div className="about-body">
            <div>
              <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet.Amet minim mollit non deserunt ullamco est sit aliqua dolor
                do amet.Amet minim mollit non deserunt ullamco est sit aliqua
                dolor do amet.Amet minim mollit non deserunt ullamco est sit
                aliqua dolor do amet.Amet minim mollit non deserunt ullamco est
                sit aliqua dolor do amet.Amet minim mollit non deserunt ullamco
                est sit aliqua dolor do amet.Amet minim mollit non deserunt
                ullamco est sit aliqua dolor do amet.Amet minim mollit non
                deserunt ullamco est sit aliqua dolor do ameAmet minim mollit
                non deserunt ullamco est sit aliqua dolor do amet.t.
              </p>
              <div className="actions">
                <Button>Learn More</Button>
                <Button col="#0AC05E" bg="white">
                  Watch Video <BsPlayFill size={16} />
                </Button>
              </div>
            </div>
            <div className="flash-cards">
              {flashCardList.map((card, ind) => (
                <FlashCard cardData={card} key={ind} />
              ))}
            </div>
          </div>
        </SectionLayout2>

        <SectionLayout2
          title={
            <>
              {"What Our "}
              <span className="highlight">Users Say</span>
            </>
          }
          body="Community development is often linked with community work or community planning, and may involve stakeholders, foundations."
          cls="user"
        >
          <div className="nfts">
            <QuoteCard cardData={quoteCard} />
          </div>
          <div className="ellipses">
            <div>
              {ellipses.slice(0, 3).map((item, ind) => (
                <img src={item} key={ind} alt="user" />
              ))}
            </div>
            <div>
              {ellipses.slice(3).map((item, ind) => (
                <img src={item} key={ind} alt="user" />
              ))}
            </div>
          </div>
        </SectionLayout2>

        <CommunityLayout
          title={
            <>
              {"Join the "}
              <span className="highlight">Community</span>
            </>
          }
          body="We???re still hiding in the metaverse. While you wait for the collection to drop, join our Discord channel or follow us on Twitter keep up to date with our latest work and announcements."
          image={nft6}
          imgPosn="left"
        >
          <div className="actions">
            <Button>Join Discord</Button>
            <Button col="#0AC05E" bg="white">
              Follow on Twitter
            </Button>
          </div>
        </CommunityLayout>

        <Footer></Footer>
      </div>
    </main>
  );
};

export default Landing;
