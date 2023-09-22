import { PiInstagramLogo } from "react-icons/pi";
import { BiLogoFacebook, BiLogoLinkedin } from "react-icons/bi";
import { SocialLink } from "./types";
import Twitter from "@/components/icons/Twitter";

export const navlinks = [
  {
    label: "timeline",
    href: "/#timeline",
  },
  {
    label: "overview",
    href: "/#overview",
  },
  {
    label: "faqs",
    href: "/#faqs",
  },
  {
    label: "contact",
    href: "/contact",
  },
];

export const footerUsefulLinks = [
  ...navlinks,
  { label: "register", href: "/register" },
];

export const socialLinks: SocialLink[] = [
  {
    id: "instagram",
    href: "",
    Icon: PiInstagramLogo,
  },
  {
    id: "twitter",
    href: "",
    Icon: Twitter,
  },
  {
    id: "facebook",
    href: "",
    Icon: BiLogoFacebook,
  },
  {
    id: "linkedIn",
    href: "",
    Icon: BiLogoLinkedin,
  },
];
