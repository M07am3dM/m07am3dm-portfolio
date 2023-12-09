import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href="/">
      <Image
        className="rounded-full"
        src="/logo.png"
        width={94}
        height={94}
        priority
        alt="logo"
      />
    </Link>
  );
};

export default Logo;
