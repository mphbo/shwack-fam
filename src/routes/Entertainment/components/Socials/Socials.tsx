import styles from "./socials.module.scss";
import SocialButton from "./components/SocialButton";

const socials = [
  {
    title: "Instagram",
    url: "https://www.instagram.com/shwackfamentertainment/",
    image: "instagram.svg",
  },
  {
    title: "TikTok",
    url: "https://www.tiktok.com/",
    image: "tiktok.svg",
  },
];

function Socials() {
  const socialButtons = socials.map((social, i) => <SocialButton key={i} {...social} />);

  return <ul className={styles.list}>{socialButtons}</ul>;
}

export default Socials;
