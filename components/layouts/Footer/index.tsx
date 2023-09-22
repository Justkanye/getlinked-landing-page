"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

import BrandLink from "@/components/shared/BrandLink";
import { footerUsefulLinks } from "@/lib/core/constants/navigation";
import { cn } from "@/lib/core/utils";
import FooterContact from "./FooterContact";
import SocialIcons from "@/components/shared/SocialIcons";

const Footer = () => {
  const pathName = usePathname();

  return (
    <div className='bg-footer-bg px-20 pt-10 pb-6 md:px-36'>
      <footer className='footer md:grid-cols-3'>
        <div className='flex flex-col w-full h-full justify-between'>
          <BrandLink />
          <p className='text-[12px]'>
            Getlinked Tech Hackathon is a technology innovation program
            established by a group of organizations with the aim of showcasing
            young and talented individuals in the field of technology
          </p>
          <p className='text-sm mt-5'>
            <Link
              className='hover:text-primary transition-colors'
              href='/#privacy-and-terms'
            >
              Terms of Use
            </Link>
            <span className='text-primary mx-1 text-xl font-semibold'>|</span>
            <Link
              className='hover:text-primary transition-colors'
              href='/#privacy-and-terms'
            >
              Privacy Policy
            </Link>
          </p>
        </div>

        <div className='w-full flex md:justify-center'>
          <div>
            <h6 className='text-primary text-sm font-semibold'>Useful Links</h6>
            <ul className='menu pl-0 gap-3'>
              {footerUsefulLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  className={cn("capitalize hover:text-primary", {
                    "bg-primary-gradient bg-clip-text text-transparent":
                      pathName === href,
                  })}
                  href={href}
                >
                  {label}
                </Link>
              ))}
            </ul>
            <SocialIcons />
          </div>
        </div>

        <FooterContact />
      </footer>
      <p className='text-center text-sm mt-5'>
        All rights reserved. © getlinked Ltd.
      </p>
    </div>
  );
};

export default Footer;
