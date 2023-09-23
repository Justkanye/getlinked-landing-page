import { cn } from "@/lib/core/utils";
import CustomButton from "./CustomButton";

const RegisterButton = ({
  className,
  onClick,
  pathName,
}: {
  className?: string;
  pathName?: string;
  onClick?: () => void;
}) => {
  const isActive = pathName === "/register";
  return (
    <div
      className={cn(
        "rounded bg-transparent p-[2px] hover:animate-my-pulse",
        {
          "bg-primary-gradient": isActive,
        },
        className
      )}
    >
      <CustomButton
        href='/register'
        className={cn("!animate-none", {
          "border-primary-bg bg-primary-bg hover:bg-primary-bg": isActive,
        })}
        onClick={onClick}
        btnText='Register'
      />
    </div>
  );
};

export default RegisterButton;
