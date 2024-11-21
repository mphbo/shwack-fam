import { Typography } from "@mui/material";
import styles from "./contact.module.scss";
import Socials from "../Socials";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className={styles.contact}>
      <Typography>Contact Email: mgmt@sfam.ca</Typography>
      <Socials footer />
      <Typography className={styles.arkade}>
        Website Design & Development:
        <Link
          to="https://instagram.com/dark.arkade"
          target="_blank"
          className={styles.button}
        >
          <img src="/ARKADE.svg" alt="small logo" />
        </Link>
      </Typography>
    </div>
  );
}

export default Home;
