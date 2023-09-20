import InvertedCurvedUnderline from "@/components/icons/InvertedCurvedUnderline";
import RegisterButton from "@/components/shared/RegisterButton";
import Image from "next/image";
import { PiStarFourFill } from "react-icons/pi";
import Countdown from "./Countdown";

const Hero = () => {
  return (
    <section className='flex pt-5 relative border-border border-t'>
      <div className='w-[40%]' />
      <div className='flex flex-col absolute top-0 bottom-0 left-0 w-[60%] mt-5 ml-20'>
        <PiStarFourFill size={32} className='m-10' />
        <div className='flex items-end'>
          <div className='flex flex-col'>
            <div className='self-end mr-10 -mb-3'>
              <Image
                src='/assets/images/creative.png'
                alt='creative'
                width={53}
                height={73}
              />
            </div>
            <h2 className='font-clash-display font-bold text-[80px] leading-none'>
              getlinked Tech
              <br />
              Hackathon <span className='text-primary'>1.0</span>
            </h2>
          </div>
          <Image
            src='/assets/images/chain.png'
            alt='chain'
            width={86}
            height={86}
          />
          <Image
            src='/assets/images/spark.png'
            alt='spark'
            width={86}
            height={86}
          />
        </div>

        <p className='text-xl leading-8'>
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
      <div className='flex flex-col items-end -z-[1]'>
        <div className='hidden md:flex flex-col items-end mr-12 mt-8'>
          <h2 className='font-clash-display font-bold text-4xl italic'>
            Igniting a Revolution in HR Innovation
          </h2>
          <InvertedCurvedUnderline />
        </div>
        <div className='relative mt-9'>
          <div className='absolute left-16 -top-2'>
            <Image
              src='/assets/images/blue orb.png'
              alt='blue orb'
              width={667}
              height={641}
            />
          </div>
          <Image
            src='/assets/images/man-wearing-smart-glasses-touching-virtual-screen.png'
            alt='man wearing smart glasses'
            width={828}
            height={715}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
