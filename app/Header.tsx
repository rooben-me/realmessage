"use client";

import React from "react";
import Image from "next/image";
import Button from "@/components/Button";
import Link from "next/link";

import { signOut } from "next-auth/react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between rounded-b-2xl border border-gray-200/60 bg-white py-4 px-8">
      <Link href="/">
        <Image
          src="/images/realmessage-logo.png"
          alt="real message logo"
          width={140}
          height={30}
        />
      </Link>

      {false ? (
        <Button onClick={() => signOut()} variant="secondary">
          Log out
        </Button>
      ) : (
        <Link href="/auth/signin">
          <Button variant="primary">Sign in</Button>
        </Link>
      )}
    </header>
  );
};

export default Header;
