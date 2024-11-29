import styles from "./socials.module.scss";
import SocialButton from "./components/SocialButton";
function Socials({
  socials,
  footer = false,
  people = false,
}: {
  socials: { title: string; url: string; image: string }[];
  footer?: boolean;
  people?: boolean;
}) {
  const socialButtons = socials.map((social, i) => (
    <SocialButton key={i} {...social} />
  ));

  return (
    <ul
      className={people ? styles.people : footer ? styles.footer : styles.list}
    >
      {socialButtons}
    </ul>
  );
}

export default Socials;
