import CustomButton from "./CustomButton";

const RegisterButton = ({
  className,
  onClick,
}: {
  className?: string;
  onClick?: () => void;
}) => {
  return (
    <CustomButton
      href='/register'
      className={className}
      onClick={onClick}
      btnText='Register'
    />
  );
};

export default RegisterButton;
