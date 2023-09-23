import Link from "next/link";

import { cn } from "@/lib/core/utils";

const CustomButton = ({
  className,
  btnText,
  href,
  onClick,
  loading,
}: CustomButtonProps) => {
  const Wrapper = href ? (href?.startsWith("/") ? Link : "a") : "button";
  return (
    <Wrapper
      href={href!}
      className={cn(
        "no-animation px-12 btn rounded text-white bg-primary-gradient hover:animate-my-pulse capitalize text-base flex items-center justify-center",
        {
          "opacity-75": loading,
        },
        className
      )}
      onClick={onClick}
    >
      <span
        className={cn({
          "loading loading-spinner": loading,
          hidden: !loading,
        })}
      />
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
  loading?: boolean;
};
