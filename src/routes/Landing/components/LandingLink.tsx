import React from "react";
import styles from "../landing.module.scss";
import { Link } from "react-router-dom";

function LandingLink({ title, url }: { title: string; url: string }) {
  return (
    <Link to={url} className={styles.landingLink} target="_blank">
      {title}
    </Link>
  );
}

export default LandingLink;
