"use client";

import SignInComponent from "@/components/SignInComponent";
import { getProviders } from "next-auth/react";

const SignInPage = async () => {
  const providers = await getProviders();
  return (
    <div>
      <SignInComponent providers={providers} />
    </div>
  );
};

export default SignInPage;
