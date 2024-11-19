import Socials from "../Socials";
import styles from "./bio.module.scss";
import ChangeHistoryIcon from "@mui/icons-material/ChangeHistory";

function Bio() {
  return (
    <div className={styles.bio}>
      <img src="/sfe-small.svg" />
      <span className={styles.bioText}>
        It all starts with music, music brought us together, and music is what
        we will bring to you. With a large number of djs, music producers and
        organizers under our banner, S-FAM Entertainment is here to throw you
        shows that aren't just exciting but diverse as well. Welcome to the
        show, Welcome to the FAM.
      </span>
      <Socials />
    </div>
  );
}

export default Bio;
