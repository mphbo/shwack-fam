import Socials from "../Socials";
import styles from "./bio.module.scss";
import ChangeHistoryIcon from "@mui/icons-material/ChangeHistory";

function Bio() {
  return (
    <div className={styles.bio}>
      <img src="/sfe-small.svg" />
      <span className={styles.bioText}>
        Shwack Fam biography here - Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Eligendi quam earum iure voluptatum totam, animi
        officia aperiam! Temporibus facilis porro exercitationem adipisci rem
        assumenda commodi optio, quisquam consequuntur aliquid ullam.
      </span>
      <Socials />
    </div>
  );
}

export default Bio;
