import Link from "next/link";

import { cn } from "@/lib/core/utils";

const CustomButton = ({
  className,
  btnText,
  href,
  onClick,
}: CustomButtonProps) => {
  const Wrapper = href?.startsWith("/") ? Link : "a";
  return (
    <Wrapper
      href={href!}
      className={cn(
        "px-12 py-4 btn rounded text-white bg-primary-gradient hover:animate-my-pulse capitalize text-base",
        className
      )}
      onClick={onClick}
    >
      {btnText}
    </Wrapper>
  );
};

export default CustomButton;

type CustomButtonProps = {
  className?: string;
  btnText: string;
  href?: string;
  onClick?: () => void;
};
