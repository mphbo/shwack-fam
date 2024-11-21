import styles from "./landing.module.scss";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <div className="App">
      <div className={styles.main}>
        <Link to="./entertainment" className={styles.button}>
          ENTER
        </Link>
        <img alt="s-fam logo" src={`/sfe.svg`} />
      </div>
    </div>
  );
}

export default Landing;
