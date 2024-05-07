import { Button } from "@/components/ui/button";
import Link from "next/link";
import logo from "@/public/layers.png";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import HamburgerMenu from "@/components/shared/HamburgerMenu";
import { LogoutButton } from "@/components/auth/logout-button";

const Navbar = () => {
  return (
    <nav className="bg-[#6F38C5] flex justify-between items-center p-2 md:px-8 md:py-4 w-full shadow-sm h-[70px] md:h-auto fixed top-0 z-10">
      <div className="flex gap-2 cursor-pointer">
        <Image src={logo} alt="Logo" height={30} width={30} />
        <p className="text-sm md:text-lg font-semibold text-white">
          Project Nexus
        </p>
      </div>
      <div className="flex gap-x-2">
        {/* TODO : Change routes in Href */}
        <Input placeholder="Search projects" className="rounded-3xl" />

        {/* Hamburger Menu for small screens */}
        <HamburgerMenu />

        <div className="hidden md:flex md:justify-between">
          <Link href="/projects" className="text-white">
            <Button variant="ghost">Projects</Button>
          </Link>

          <Link href="/profile" className="text-white">
            <Button variant="ghost">Profile</Button>
          </Link>

          <LogoutButton>Logout</LogoutButton>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
