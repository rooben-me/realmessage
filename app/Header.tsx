"use client";

import React from "react";
import Image from "next/image";
import Button from "@/components/Button";

const Header = () => {
  const session = false;

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between rounded-b-2xl border border-gray-200/60 bg-white py-4 px-8">
      <Image
        src="/images/realmessage-logo.png"
        alt="real message logo"
        width={140}
        height={30}
      />

      {session ? (
        <Button variant="secondary">Log out</Button>
      ) : (
        <Button variant="primary">Sign in</Button>
      )}
    </header>
  );
};

export default Header;
