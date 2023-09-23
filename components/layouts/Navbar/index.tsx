"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Router from "next/router";

import { navlinks } from "@/lib/core/constants/navigation";
import { cn } from "@/lib/core/utils";
import RegisterButton from "@/components/shared/RegisterButton";
import MobileNav from "./MobileNav";
import BrandLink from "@/components/shared/BrandLink";

Router.events.on("routeChangeStart", () => {
  console.log("routeChangeStart");
});
Router.events.on("routeChangeComplete", () => {
  console.log("routeChangeComplete");
});
Router.events.on("routeChangeError", () => {
  console.log("routeChangeError");
});

const Navbar = () => {
  const pathName = usePathname();
  return (
    <>
      <nav className='navbar px-10 pt-5 pb-3 md:px-20 md:pt-10 md:pb-6'>
        <div className='flex-1'>
          <BrandLink />
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
            <RegisterButton className='ml-20' pathName={pathName} />
          </ul>
          <MobileNav pathName={pathName} />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
