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
  return (
    <CustomButton
      href='/register'
      className={cn(
        {
          "btn-outline btn-accent bg-transparent hover:bg-transparent":
            pathName === "/register",
        },
        "border-2",
        className
      )}
      onClick={onClick}
      btnText='Register'
    />
  );
};

export default RegisterButton;
