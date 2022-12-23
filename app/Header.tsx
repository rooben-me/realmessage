"use client";

import React from "react";
import Image from "next/image";
import Button from "@/components/Button";

const Header = () => {
  const session = false;

  return (
    <header className="sticky rounded-b-2xl top-0 z-50 bg-white flex justify-between items-center py-4 px-8 shadow-sm">
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
