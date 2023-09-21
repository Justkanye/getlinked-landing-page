import Image from "next/image";
import { PiStarFourFill } from "react-icons/pi";

import RegisterButton from "@/components/shared/RegisterButton";
import Countdown from "./Countdown";
import TypedTitle from "./TypedTitle";
import HeroImages from "./HeroImages";

const Hero = () => {
  return (
    <section className='pt-5 border-border border-t'>
      <TypedTitle />
      <div className='flex md:pt-5 relative flex-col md:flex-row'>
        <div className='w-[40%] hidden md:block' />
        <div className='flex flex-col md:absolute top-0 bottom-0 left-0 md:w-[60%] mt-5 md:ml-20 max-md:items-center'>
          <PiStarFourFill className='md:m-12 m-4 text-xs md:text-4xl' />
          <div className='flex items-end'>
            <div className='flex flex-col'>
              <div className='self-end md:mr-10 md:-mb-3 mr-5 -mb-2 relative aspect-square md:w-[53px] md:h-[73px] w-[18px] h-[26px]'>
                <Image src='/assets/images/creative.png' alt='creative' fill />
              </div>
              <h2 className='font-clash-display font-bold text-5xl md:text-[80px] md:leading-none'>
                getlinked Tech
                <br />
                Hackathon <span className='text-primary'>1.0</span>
              </h2>
            </div>
            <div className='w-8 md:w-[86px] relative aspect-square'>
              <Image src='/assets/images/chain.png' alt='chain' fill />
            </div>
            <div className='w-8 md:w-[86px] relative aspect-square'>
              <Image src='/assets/images/spark.png' alt='spark' fill />
            </div>
          </div>

          <p className='md:text-xl md:leading-8 text-base leading-5'>
            Participate in getlinked tech Hackathon 2023
            <br />
            stand a chance to win a Big prize
          </p>
          <div className='mt-10 mb-16'>
            <RegisterButton />
          </div>

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
