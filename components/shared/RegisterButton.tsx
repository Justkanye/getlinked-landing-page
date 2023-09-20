import { cn } from "@/lib/core/utils";
import Link from "next/link";

const RegisterButton = ({ className }: { className?: string }) => {
  return (
    <Link
      href='/register'
      className={cn(
        "px-12 py-4 btn rounded text-white bg-primary-gradient hover:animate-my-pulse",
        className
      )}
    >
      Register
    </Link>
  );
};

export default RegisterButton;
