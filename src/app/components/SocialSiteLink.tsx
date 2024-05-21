import { FC } from "react";
import { FaFacebook, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";

const SocialSiteLink: FC = () => {
  return (
    <div className="flex justify-between items-center gap-2 py-2">
      <a href={"https://www.facebook.com/bheemkrthami"} target="_blank">
        <FaFacebook size={30} />
      </a>
      <a
        href={"https://www.linkedin.com/in/bheem-thami-58b2078a/"}
        target="_blank"
      >
        <FaLinkedin size={30} />
      </a>
      <a href={"https://x.com/BheemThami"} target="_blank">
        <FaTwitter size={30} />
      </a>
    </div>
  );
};

export default SocialSiteLink;
