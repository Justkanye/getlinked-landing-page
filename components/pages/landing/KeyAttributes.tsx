import Image from "next/image";

import { keyAttributes } from "@/lib/core/constants/keyAttributes";
import CustomButton from "@/components/shared/CustomButton";
import { fadeIn } from "@/lib/core/helpers/motion";
import MotionContainer from "@/components/layouts/framer-motion/MotionContainer";
import Typewriter from "@/components/shared/Typewriter";

const KeyAttributes = () => {
  return (
    <section className='grid grid-cols-1 md:grid-cols-2 py-16 px-10 md:px-20 border-border border-t max-md:gap-8'>
      <MotionContainer variants={fadeIn("right", "tween", 0.2, 1)}>
        <Image
          src='/assets/images/inspect.png'
          alt='Key attribute hero image'
          width={664}
          height={664}
        />
      </MotionContainer>
      <MotionContainer
        variants={fadeIn("down", "tween", 0.6, 1)}
        className='flex flex-col justify-center max-md:items-center'
      >
        <h2 className='font-clash-display font-bold text-2xl md:text-3xl leading-none'>
          Judging Criteria
          <br />
          <span className='text-primary'>Key attributes</span>
        </h2>
        <div className='max-md:text-center'>
          {keyAttributes.map(({ content, title }, i) => (
            <p key={i} className='text-sm mt-5'>
              <span className='text-primary text-base font-bold'>{title}:</span>{" "}
              <Typewriter strings={[content]} typeSpeed={1} />
            </p>
          ))}
        </div>
        <CustomButton btnText='Read more' className='mt-8 md:self-start' />
      </MotionContainer>
    </section>
  );
};

export default KeyAttributes;
