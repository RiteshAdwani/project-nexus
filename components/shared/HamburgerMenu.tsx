"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import Image from "next/image";
import crossIcon from "@/public/cross.png";
import menuIcon from "@/public/menu.png";
import Link from "next/link";
import { LogoutButton } from "../auth/logout-button";

const HamburgerMenu = () => {
  const [hamburgerMenu, setHamburgerMenu] = useState(true);
  return (
    <div className="md:hidden flex items-center">
      <Button
        onClick={() => setHamburgerMenu((hamburgerMenu) => !hamburgerMenu)}
        variant="outline"
        size="sm"
      >
        <Image
          src={hamburgerMenu ? menuIcon : crossIcon}
          alt="button icon"
          width={40}
          height={40}
        />
      </Button>

      {!hamburgerMenu && (
        <div className="absolute top-[70px] left-0 font-medium shadow-md flex flex-col w-full items-center justify-center bg-[#ffffff] text-[#6F38C5] py-3">
          <Link href="/projects">Projects</Link>
          <Link href="/profile">Profile</Link>
          <LogoutButton>Logout</LogoutButton>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
