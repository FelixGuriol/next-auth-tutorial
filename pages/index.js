import { getSession } from "next-auth/react";
import { useEffect, useState } from "react";

function HomPage({ session }) {
  const { user } = session;
  /*   const [user, setUser] = useState(null);
  useEffect(() => {
    (async () => {
      const session = await getSession();
      setUser(session.user);
    })();
  }, []); */
  return (
    <div>
      {JSON.stringify(user, null, 2)}
      <h1>{user.name}</h1>
      <p>{user.email}</p>
      <img src={user.image} />
    </div>
  );
}

export const getServerSideProps = async (context) => {
  const session = await getSession(context);
  return {
    props: { session },
  };
};

export default HomPage;
