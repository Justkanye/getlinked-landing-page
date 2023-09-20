"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { navlinks } from "@/lib/core/constants/navigation";
import { cn } from "@/lib/core/utils";

const Navbar = () => {
  const pathName = usePathname();
  return (
    <nav className='navbar p-10'>
      <div className='flex-1'>
        <Link
          href='/'
          className='font-bold font-clash-display text-4xl transition-colors duration-500 ease-in-out text-white hover:text-primary'
        >
          get<span className='text-primary hover:text-white'>Linked</span>
        </Link>
      </div>
      <div className='flex-none'>
        <ul className='menu menu-horizontal items-center'>
          {navlinks.map(({ href, label }) => (
            <li key={href}>
              <Link
                className={cn("capitalize text-white", {
                  "bg-primary-gradient bg-clip-text text-transparent":
                    pathName === href,
                })}
                href={href}
              >
                {label}
              </Link>
            </li>
          ))}
          <Link
            href='/register'
            className='px-12 py-4 btn rounded text-white ml-20 bg-primary-gradient hover:animate-my-pulse'
          >
            Register
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
