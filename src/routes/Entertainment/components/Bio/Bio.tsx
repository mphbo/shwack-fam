import { useMediaQuery } from "@mui/material";
import Socials from "../Socials";
import styles from "./bio.module.scss";

function Bio() {
  const isLargeScreen = useMediaQuery("(min-width:800px)");
  return (
    <div className={isLargeScreen ? styles.largeBio : styles.bio}>
      <img className={styles.logo} src="/sfe-small.svg" alt="small logo" />
      <span className={isLargeScreen ? styles.largeBioText : styles.bioText}>
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
