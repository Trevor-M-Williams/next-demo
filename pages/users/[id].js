export async function getStaticPaths() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  const paths = data.map((user) => {
    return {
      params: { id: user.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const id = context.params.id;
  const res = await fetch("https://jsonplaceholder.typicode.com/users/" + id);
  const data = await res.json();

  return {
    props: { user: data },
  };
}

export default function UserDetails({ user }) {
  return (
    <div>
      <div className="content">
        <h1>{user.name}</h1>
        <p>{user.username}</p>
        <p>{user.email}</p>
        <p>{user.phone}</p>
      </div>
    </div>
  );
}
