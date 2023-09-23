import "@sweetalert2/theme-dark/dark.css";

import { Metadata } from "next";
import Image from "next/image";

import RegisterForm from "@/components/pages/register/RegisterForm";
import { getCategories } from "@/lib/features/registration/api";
import MotionContainer from "@/components/layouts/framer-motion/MotionContainer";
import { fadeIn } from "@/lib/core/helpers/motion";

export const metadata: Metadata = {
  title: "Register - GetLinked",
};

const RegisterPage = async () => {
  const categories = await getCategories();

  return (
    <main className='py-10 px-5 grid grid-cols-1 md:grid-cols-2 bg-gradient-radial'>
      <MotionContainer variants={fadeIn("right", "spring", 0.2, 1)}>
        <Image
          src='/assets/images/thumbs-up-png 1.png'
          alt='Man showing thumbs up'
          width={717}
          height={717}
          priority
        />
      </MotionContainer>
      <MotionContainer variants={fadeIn("left", "spring", 0.2, 1)}>
        <RegisterForm categories={categories} />
      </MotionContainer>
    </main>
  );
};

export default RegisterPage;
