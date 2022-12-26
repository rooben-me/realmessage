"use client";

import { getProviders, signIn } from "next-auth/react";
import Image from "next/image";

type Props = {
  providers: Awaited<ReturnType<typeof getProviders>>;
};

const SignInComponent = ({ providers }: Props) => {
  return (
    <div>
      {Object.values(providers).map((provider) => (
        <div key={provider.name} className="w-ful mt-6 p-6">
          <button
            onClick={() =>
              signIn(provider.id, {
                callbackUrl: process.env.VERCEL_URL || "http://localhost:3000/",
              })
            }
            className="flex w-full items-center justify-center gap-2 rounded-full border border-gray-200 bg-white p-3 text-base"
          >
            <Image
              width={35}
              className="rounded-full"
              height={35}
              src="https://lh3.googleusercontent.com/j2SG2D_31o6aFxudKxHoXpTbMZIfA8afeRbxAM-PH9jFJPbj20YN0RUOSiikGWInnMP68lSmWG7j8qM-FGq6Y3bdSBPIwyPe7wPF=w96-rj-sc0xf8f9fa"
              alt="google logo"
            />
            <span>Sign in with {provider.name}</span>
          </button>
        </div>
      ))}
    </div>
  );
};

export default SignInComponent;
