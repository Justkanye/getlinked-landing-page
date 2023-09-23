import Image from "next/image";

const RulesAndGuidelines = () => {
  return (
    <section className='grid grid-cols-1 md:grid-cols-2 py-16 px-10 md:px-20 border-border border-t max-md:gap-8'>
      <div className='flex flex-col justify-center max-md:text-center max-md:order-2'>
        <h2 className='font-clash-display font-bold text-2xl md:text-3xl leading-none'>
          Rules and
          <br />
          <span className='text-primary'>Guidelines</span>
        </h2>
        <p className='text-sm mt-4'>
          Our tech hackathon is a melting pot of visionaries, and its purpose is
          as clear as day: to shape the future. Whether you&apos;re a coding
          genius, a design maverick, or a concept wizard, you&apos;ll have the
          chance to transform your ideas into reality. Solving real-world
          problems, pushing the boundaries of technology, and creating solutions
          that can change the world, that&apos;s what we&apos;re all about!
        </p>
      </div>
      <Image
        src='/assets/images/rules.png'
        alt='rules hero image'
        width={664}
        height={664}
      />
    </section>
  );
};

export default RulesAndGuidelines;
