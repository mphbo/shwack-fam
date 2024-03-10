import styles from "../socials.module.scss";

interface SocialButtonProps {
  title: string;
  url: string;
  icon: any;
}

function SocialButton({ title, url, icon }: SocialButtonProps) {
  return (
    <a href={url} className={styles.listItem}>
      {icon}
      <p>{title}</p>
    </a>
  );
}

export default SocialButton;
