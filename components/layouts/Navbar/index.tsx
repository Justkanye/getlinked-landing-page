"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { navlinks } from "@/lib/core/constants/navigation";
import { cn } from "@/lib/core/utils";
import RegisterButton from "@/components/shared/RegisterButton";
import MobileNav from "./MobileNav";

const Navbar = () => {
  const pathName = usePathname();
  return (
    <nav className='navbar px-20 pt-10 pb-6'>
      <div className='flex-1'>
        <Link
          href='/'
          className='font-bold font-clash-display text-4xl transition-colors duration-500 ease-in-out hover:text-primary group'
        >
          get<span className='text-primary group-hover:text-white'>Linked</span>
        </Link>
      </div>
      <div className='flex-none'>
        <ul className='menu menu-horizontal items-center hidden md:inline-flex'>
          {navlinks.map(({ href, label }) => (
            <li key={href}>
              <Link
                className={cn("capitalize", {
                  "bg-primary-gradient bg-clip-text text-transparent":
                    pathName === href,
                })}
                href={href}
              >
                {label}
              </Link>
            </li>
          ))}
          <RegisterButton className='ml-20' />
        </ul>
        <MobileNav pathName={pathName} />
      </div>
    </nav>
  );
};

export default Navbar;
