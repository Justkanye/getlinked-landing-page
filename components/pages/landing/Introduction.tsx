import Image from "next/image";
import { PiStarFourFill } from "react-icons/pi";

const Introduction = () => {
  return (
    <section className='grid grid-cols-2 py-16 px-20 border-border border-t'>
      <div className='flex items-center justify-center'>
        <div className='relative'>
          <Image
            src='/assets/images/the big idea.png'
            alt='the big idea'
            width={490}
            height={447}
          />
          <div className='absolute right-0 bottom-0 translate-x-1/2'>
            <Image
              src='/assets/images/arrow.png'
              alt='arrow'
              width={50}
              height={58}
            />
          </div>
        </div>
        <p className='absolute font-bold text-center text-2xl'>
          The Big
          <br />
          Idea!
        </p>
      </div>
      <div className='flex flex-col justify-center'>
        <div className='flex justify-between items-center'>
          <h2 className='font-clash-display font-bold text-3xl leading-none'>
            Introduction to getlinked
            <br />
            <span className='text-primary'>tech Hackathon 1.0</span>
          </h2>
          <PiStarFourFill className='text-4xl text-primary' />
        </div>
        <p className='text-sm mt-4'>
          Our tech hackathon is a melting pot of visionaries, and its purpose is
          as clear as day: to shape the future. Whether you&apos;re a coding
          genius, a design maverick, or a concept wizard, you&apos;ll have the
          chance to transform your ideas into reality. Solving real-world
          problems, pushing the boundaries of technology, and creating solutions
          that can change the world, that&apos;s what we&apos;re all about!
        </p>
      </div>
    </section>
  );
};

export default Introduction;
