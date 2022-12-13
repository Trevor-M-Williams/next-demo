import styles from "../../styles/Users.module.css";
import Link from "next/link";

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return {
    props: { users: data },
  };
}

export default function Users({ users }) {
  return (
    <div>
      <div className="content">
        <h1>Users</h1>
        {users.map((user) => (
          <Link
            href={"/users/" + user.id}
            key={user.id}
            className={styles.user}
          >
            {user.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
