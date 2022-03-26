import "../css/pieces.css";
import { AiFillStar } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";
import { ImQuotesRight } from "react-icons/im";

export const FeatureCard = ({ cardData }) => {
  return (
    <div className="feature-card">
      <img src={cardData.image} />
      <h5>{cardData.title}</h5>
      <p>{cardData.body}</p>
      <a href="/">
        <span>Find out more</span>
        <BsArrowRight size={24} />
      </a>
    </div>
  );
};

export const FlashCard = ({ cardData }) => {
  return (
    <div className="flash-card">
      <h5>{cardData.val}</h5>
      <p>{cardData.body}</p>
    </div>
  );
};

export const QuoteCard = ({ cardData }) => {
  return (
    <div className="qoute-card">
      <div>
        <ImQuotesRight size={42} />
      </div>
      <div>
        {Array(5)
          .fill()
          .map((star) => (
            <AiFillStar color="#FBB040" size={25} />
          ))}
      </div>
      <p>{cardData.quote}</p>
      <div>
        <p>{cardData.name}</p>
        <p>{cardData.tag}</p>
      </div>
    </div>
  );
};
