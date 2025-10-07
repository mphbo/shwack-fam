import Socials from "../Entertainment/components/Socials";
import { mainSocials } from "../Entertainment/components/Socials/constants/socials";
import LandingLink from "./components/LandingLink";
import styles from "./landing.module.scss";
import { Link } from "react-router-dom";

const landingLinks = [
  {
    title: "GREGOLAND 11/07 TICKETS",
    url: "https://www.eventbrite.com/e/gregoland-tickets-1609285408979",
  },
];

function Landing() {
  const landingLinkElements = landingLinks.map((link, index) => (
    <LandingLink key={index} {...link} />
  ));
  return (
    <div className="App">
      <div className={styles.main}>
        <img
          className={styles.logo}
          alt="s-fam logo"
          src={`/sfe-cropped.svg`}
        />
        {/* <video autoPlay muted loop>
          <source src="/gregoland.mp4" type="video/mp4" />
        </video> */}
        <div className={styles.socials}>
          <Socials socials={mainSocials} />
        </div>
        {landingLinkElements}
        <Link to="./entertainment" className={styles.landingLink}>
          ENTER WEBSITE
        </Link>
      </div>
    </div>
  );
}

export default Landing;
