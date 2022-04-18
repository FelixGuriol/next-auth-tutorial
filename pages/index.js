import { getSession } from "next-auth/react";

function HomPage({ session }) {
  return (
    <div>
      <h1>{session.user.name}</h1>
      <p>{session.user.email}</p>
      <img src={session.user.image} />
    </div>
  );
}

export const getServerSideProps = async (context) => {
  const session = await getSession(context);
  if (!session)
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  return {
    props: { session },
  };
};

export default HomPage;
