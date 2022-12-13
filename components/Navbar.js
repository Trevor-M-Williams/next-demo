import Link from "next/link";
import styles from "../styles/Layout.module.css";

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <Link href="/" className={styles.link}>
        Home
      </Link>
      <Link href="/about" className={styles.link}>
        About
      </Link>
      <Link href="/users" className={styles.link}>
        Users
      </Link>
    </div>
  );
}
