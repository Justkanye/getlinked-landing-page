import Image from "next/image";

import FAQ from "./FAQ";
import { faqs } from "@/lib/core/constants/faqs";
import { fadeIn } from "@/lib/core/helpers/motion";
import MotionContainer from "@/components/layouts/framer-motion/MotionContainer";

const FAQs = () => {
  return (
    <section
      id='faqs'
      className='grid grid-cols-1 md:grid-cols-2 py-16 px-10 md:px-20 border-border border-t max-md:gap-8'
    >
      <MotionContainer
        variants={fadeIn("up", "tween", 0.2, 1)}
        className='flex flex-col justify-center max-md:text-center'
      >
        <h2 className='font-clash-display font-bold text-2xl md:text-3xl leading-none'>
          Frequently Asked
          <br />
          <span className='text-primary'>Questions</span>
        </h2>
        <p className='text-sm mt-4'>
          We got answers to the questions that you might want to ask about
          getlinked Hackathon 1.0
        </p>
        <div className='mt-5'>
          {faqs.map((faq, i) => (
            <FAQ key={i} {...faq} defaultChecked={i === 0} />
          ))}
        </div>
      </MotionContainer>
      <MotionContainer
        variants={fadeIn("left", "tween", 0.6, 1)}
        className='flex flex-col items-center'
      >
        <div className='flex justify-evenly w-full'>
          <h1 className='font-made-tommy-medium-outline text-primary font-medium text-8xl self-end'>
            ?
          </h1>
          <h1 className='font-made-tommy-medium-outline text-9xl text-primary font-medium'>
            ?
          </h1>
          <h1 className='font-made-tommy-medium-outline text-primary font-medium text-8xl self-end'>
            ?
          </h1>
        </div>
        <Image
          src='/assets/images/faq.png'
          alt='FAQs hero image'
          width={664}
          height={664}
        />
      </MotionContainer>
      {/* Keep accordion styles */}
      <div className='hidden collapse collapse-title collapse-content collapse-plus collapse-open' />
    </section>
  );
};

export default FAQs;
