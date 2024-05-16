import styles from "./landing.module.scss";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <div className="App">
      <div className={styles.main}>
        {/* <div>
          <h1>SHWACK</h1>
          <h2>ENTERTAINMENT</h2>
          <h1>FAM</h1>
        </div> */}
        <Link to="./entertainment" className={styles.button}>
          ENTER
        </Link>
        <img style={{ width: "100%" }} src={`/landing.svg`} />
      </div>
    </div>
  );
}

export default Landing;
