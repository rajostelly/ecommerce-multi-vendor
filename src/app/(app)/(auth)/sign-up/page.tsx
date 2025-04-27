import { caller } from "@/trpc/server";
import { redirect } from "next/navigation";

import { SignUpView } from "@/modules/auth/ui/views/sign-up-view";

const SignUpPage = async () => {
  const session = await caller.auth.session();
  if (session.user) redirect("/");

  return <SignUpView />;
};

export default SignUpPage;
