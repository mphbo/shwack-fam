import { useMediaQuery } from "@mui/material";
import Socials from "../Socials";
import styles from "./bio.module.scss";
import { mainSocials } from "../Socials/constants/socials";

function Bio() {
  const isLargeScreen = useMediaQuery("(min-width:800px)");
  return (
    <div className={isLargeScreen ? styles.largeBio : styles.bio}>
      <img className={styles.logo} src="/nft-project.svg" alt="small logo" />
      <span className={isLargeScreen ? styles.largeBioText : styles.bioText}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus,
        itaque mollitia incidunt debitis veritatis veniam! Sunt voluptatibus
        laborum ipsum incidunt.
      </span>
      <span className={isLargeScreen ? styles.largeBioText : styles.bioText}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, ratione
        fugit esse odio molestias unde.
      </span>
      <span className={isLargeScreen ? styles.largeBioText : styles.bioText}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae eius
        praesentium cumque minus modi debitis fugiat ab saepe! Non, repudiandae
        obcaecati molestias maxime nisi reprehenderit.
      </span>
      <Socials socials={mainSocials} />
    </div>
  );
}

export default Bio;
