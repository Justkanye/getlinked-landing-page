import Image from "next/image";
import { PiStarFourFill } from "react-icons/pi";

import RegisterButton from "@/components/shared/RegisterButton";
import Countdown from "./Countdown";
import TypedTitle from "./TypedTitle";
import HeroImages from "./HeroImages";
import MotionContainer from "@/components/layouts/framer-motion/MotionContainer";
import { textVariant } from "@/lib/core/helpers/motion";

const Hero = () => {
  return (
    <section className='pt-5 border-border border-t'>
      <TypedTitle />
      <div className='flex md:pt-5 relative flex-col md:flex-row'>
        <div className='w-[40%] hidden md:block' />
        <div className='flex flex-col md:absolute top-0 bottom-0 left-0 md:w-[65%] mt-5 md:ml-20 max-md:items-center'>
          <PiStarFourFill className='md:m-12 m-4 text-xs md:text-4xl animate-pulse' />
          <div className='flex flex-col w-fit'>
            <div className='self-end lg:mr-6 md:-mb-3 mr-5 -mb-2 relative aspect-square md:w-[53px] md:h-[73px] w-[18px] h-[26px]'>
              <Image src='/assets/images/creative.png' alt='creative' fill />
            </div>
            <MotionContainer
              as='h2'
              variants={textVariant(0.2)}
              className='font-clash-display font-bold text-[32px] sm:text-5xl md:text-6xl lg:text-[80px] md:leading-none'
            >
              getlinked Tech
            </MotionContainer>
          </div>
          <MotionContainer
            variants={textVariant(0.2)}
            className='flex items-center gap-1'
          >
            <h2 className='font-clash-display font-bold text-[32px] sm:text-5xl lg:text-7xl xl:text-[80px] md:leading-none'>
              Hackathon <span className='text-primary'>1.0</span>
            </h2>
            <div className='w-8 md:w-14 lg:w-16 xl:w-[86px] relative aspect-square'>
              <Image src='/assets/images/chain.png' alt='chain' fill />
            </div>
            <div className='w-8 md:w-14 lg:w-16 xl:w-[86px] relative aspect-square'>
              <Image src='/assets/images/spark.png' alt='spark' fill />
            </div>
          </MotionContainer>

          <p className='md:text-xl md:leading-8 text-base leading-5 max-md:w-4/5 max-md:text-center'>
            Participate in getlinked tech Hackathon 2023{" "}
            <br className='max-md:hidden' />
            stand a chance to win a Big prize
          </p>
          <RegisterButton className='w-fit mt-10 mb-16' />
          {/* countdown */}
          <Countdown />
        </div>

        {/* right */}
        <HeroImages />
      </div>
    </section>
  );
};

export default Hero;
