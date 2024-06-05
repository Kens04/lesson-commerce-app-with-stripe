"use client";

import { Session } from "@supabase/auth-helpers-nextjs";
import { Button } from "../ui/button";

const AuthClientButton = ({ session }: { session: Session | null }) => {
const handleSignIn = () => {
  console.log("test");
}

  return <Button onClick={handleSignIn}>サインイン</Button>;
};

export default AuthClientButton;
