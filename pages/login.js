import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";

function LoginPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status !== "loging" && status === "authenticated") {
    router.push("/");
  }
  return (
    <div>
      <button onClick={() => signIn("github")}>Signin with github</button>
    </div>
  );
}

export default LoginPage;
