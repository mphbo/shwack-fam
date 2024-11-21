import styles from "./socials.module.scss";
import SocialButton from "./components/SocialButton";

const socials = [
  {
    title: "Instagram",
    url: "https://www.instagram.com/sfamentertainment/",
    image: "instagram.svg",
  },
  {
    title: "TikTok",
    url: "https://www.tiktok.com/",
    image: "tiktok.svg",
  },
];

function Socials({ footer = false }: { footer?: boolean }) {
  const socialButtons = socials.map((social, i) => (
    <SocialButton key={i} {...social} />
  ));

  return (
    <ul className={footer ? styles.footer : styles.list}>{socialButtons}</ul>
  );
}

export default Socials;
