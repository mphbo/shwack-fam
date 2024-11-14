import Person from "./components/Person";
import styles from "./people.module.scss";

const people = [
  {
    name: "Dark Arkade (Larry Tate)",
    title: "Organizer / Music Producer",
    image: "/dark-arkade.png",
  },
  {
    name: "Miner Joe (Nichole Cooke)",
    title: "Organizer / DJ",
    image: "/miner-joe.png",
  },
  {
    name: "Jammie (Annie Williams, James Burford)",
    title: "Organizer / DJ Group",
    image: "/jammie.png",
  },
];

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
  ].map((person) => <Person {...person} />);
  return (
    <div className={styles.people}>
      <div className={styles.carousel}>{personItems}</div>
    </div>
  );
}

export default People;
