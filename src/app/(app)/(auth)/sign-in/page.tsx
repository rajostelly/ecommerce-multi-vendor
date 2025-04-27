import { caller } from "@/trpc/server";
import { redirect } from "next/navigation";

import { SignInView } from "@/modules/auth/ui/views/sign-in-view";

const SignInPage = async () => {
  const session = await caller.auth.session();

  if (session.user) redirect("/");
  return <SignInView />;
};

export default SignInPage;
