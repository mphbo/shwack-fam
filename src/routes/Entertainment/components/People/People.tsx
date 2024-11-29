import Person from "./components/Person";
import { people } from "./constants/people";
import styles from "./people.module.scss";

function People() {
  const personItems = [
    ...people,
    ...people,
    ...people,
    ...people,
    ...people,
    ...people,
    ...people,
    ...people,
    ...people,
    ...people,
    ...people,
    ...people,
    ...people,
    ...people,
    ...people,
    ...people,
  ].map((person) => <Person {...person} />);
  return (
    <div className={styles.people}>
      <div className={styles.carousel}>{personItems}</div>
    </div>
  );
}

export default People;
