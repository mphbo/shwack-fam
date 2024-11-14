import styles from "./landing.module.scss";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <div className="App">
      <div className={styles.main}>
        <Link to="./entertainment" className={styles.button}>
          ENTER
        </Link>
        <img
          alt="shwack fam logo"
          style={{ width: "100%" }}
          src={`/landing.svg`}
        />
      </div>
    </div>
  );
}

export default Landing;
