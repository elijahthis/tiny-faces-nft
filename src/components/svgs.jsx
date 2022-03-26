import { TiSocialFacebook } from "react-icons/ti";
import { GrLinkedinOption } from "react-icons/gr";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import "../css/pieces.css";

export const FacebookIcon = ({ link }) => {
  return (
    <a href={link} target="_blank">
      <div className="social-icon">
        <TiSocialFacebook size={18} color="white" />
      </div>
    </a>
  );
};

export const LinkedinIcon = ({ link }) => {
  return (
    <a href={link} target="_blank">
      <div className="social-icon">
        <GrLinkedinOption size={18} color="white" />
      </div>
    </a>
  );
};

export const TwitterIcon = ({ link }) => {
  return (
    <a href={link} target="_blank">
      <div className="social-icon">
        <FaTwitter size={18} color="white" />
      </div>
    </a>
  );
};

export const GithubIcon = ({ link }) => {
  return (
    <a href={link} target="_blank">
      <div className="social-icon">
        <FaGithub size={18} color="white" />
      </div>
    </a>
  );
};
