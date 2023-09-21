import CustomButton from "./CustomButton";

const RegisterButton = ({ className }: { className?: string }) => {
  return (
    <CustomButton href='/register' className={className} btnText='Register' />
  );
};

export default RegisterButton;
