import { SignedIn, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav
      className="flex-between
        background-light900_dark200 sm: fixed
        z-50 w-full gap-5 p-6
        px-12 shadow-light-300 dark:shadow-none"
    >
      <Link href="/" className="flex items-center gap-1">
        <Image
          width={23}
          height={23}
          src={"/assets/images/site-logo.svg"}
          alt="DevFlow"
        />
        <p className="h2-bold font-spaceGrotesk text-dark-100 dark:text-light-900 max-sm:hidden">
          Dev
          <span className="text-primary-500">OverFlow</span>
        </p>
      </Link>
      GlovalSearch
      <div className="flex-between gap-5">
        Theme
        <SignedIn>
          <UserButton
            afterSignOutUrl="/"
            appearance={{
              elements: {
                avatarBox: "h-10 w-10",
              },
              variables: {
                colorPrimary: "#ff7000",
              },
            }}
          />
        </SignedIn>
      </div>
    </nav>
  );
};

export default Navbar;