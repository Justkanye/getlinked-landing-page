"use client";
import { useState } from "react";
import Link from "next/link";

import RegisterButton from "@/components/shared/RegisterButton";
import { navlinks } from "@/lib/core/constants/navigation";
import { cn } from "@/lib/core/utils";

const MobileNav = ({ pathName }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = () => setIsOpen(prev => !prev);
  const closeModal = () => setIsOpen(false);
  return (
    <>
      <div
        className={cn("menu-button-wrapper", {
          open: isOpen,
        })}
      >
        <div className='icon-wrapper'>
          <div className='hamburger' onClick={toggleModal}>
            <span className='hamburger-line first' />
            <span className='hamburger-line second' />
            <span className='hamburger-line third' />
          </div>
        </div>
      </div>
      <div
        className={cn(
          "hidden md:hidden z-50 fixed top-0 left-0 w-screen h-screen bg-primary-bg overflow-y-hidden",
          {
            "flex items-center justify-center": isOpen,
          }
        )}
      >
        <ul className='menu menu-vertical gap-2'>
          {navlinks.map(({ href, label }) => (
            <li key={href}>
              <Link
                className={cn("capitalize font-inter text-lg font-medium", {
                  "bg-primary-gradient bg-clip-text text-transparent":
                    pathName === href,
                })}
                href={href}
                onClick={closeModal}
              >
                {label}
              </Link>
            </li>
          ))}
          <RegisterButton onClick={closeModal} className='mt-7' />
        </ul>
      </div>
    </>
  );
};

export default MobileNav;

type Props = {
  pathName: string;
};
