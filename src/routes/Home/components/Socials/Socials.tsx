import styles from "./socials.module.scss";
import ChangeHistoryIcon from "@mui/icons-material/ChangeHistory";
import SocialButton from "./components/SocialButton";

const socials = [
  {
    title: "Instagram",
    url: "https://www.instagram.com/dark.arkade/",
    image: "instagram.svg",
  },
  {
    title: "TikTok",
    url: "https://www.tiktok.com/@dark.arkade",
    image: "tiktok.svg",
  },
  {
    title: "SoundCloud",
    url: "https://soundcloud.com/logan-norman-thomas",
    image: "soundcloud.svg",
  },
];

function Socials() {
  const socialButtons = socials.map((social) => <SocialButton {...social} />);

  return (
    <ul className={styles.list}>
      {socialButtons}
      {/* <li className={styles.listItem}>
        <ChangeHistoryIcon fontSize="large" />
        <p>Spotify</p>
      </li> */}
    </ul>
  );
}

export default Socials;
