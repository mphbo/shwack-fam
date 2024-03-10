import { Divider, List, ListItem, ListItemText } from "@mui/material";
import styles from "./socials.module.scss";
import ChangeHistoryIcon from "@mui/icons-material/ChangeHistory";
import SocialButton from "./components/LinkButton";

const socials = [
  {
    title: "Instagram",
    url: "https://www.instagram.com/dark.arkade/",
    icon: <ChangeHistoryIcon />,
  },
  {
    title: "TikTok",
    url: "https://www.tiktok.com/@dark.arkade",
    icon: <ChangeHistoryIcon />,
  },
  {
    title: "SoundCloud",
    url: "https://soundcloud.com/logan-norman-thomas",
    icon: <ChangeHistoryIcon />,
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
