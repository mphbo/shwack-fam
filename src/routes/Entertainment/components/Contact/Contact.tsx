import { Typography, useMediaQuery } from "@mui/material";
import styles from "./contact.module.scss";
import Socials from "../Socials";
import { Link } from "react-router-dom";
import { mainSocials } from "../Socials/constants/socials";

function Home() {
  const isLargeScreen = useMediaQuery("(min-width:500px)");
  return (
    <div className={isLargeScreen ? styles.largeContact : styles.contact}>
      <Typography>Contact Email: mgmt@s-fam.ca</Typography>
      <Socials socials={mainSocials} footer />
      <Typography
        className={isLargeScreen ? styles.largeArkade : styles.arkade}
      >
        Website Design & Development:
        <Link
          to="https://instagram.com/arkadedesign.dev"
          target="_blank"
          className={styles.button}
        >
          <img
            src={isLargeScreen ? "/ARKADE.svg" : "/ARKADE2.svg"}
            alt="small logo"
          />
        </Link>
      </Typography>
    </div>
  );
}

export default Home;
