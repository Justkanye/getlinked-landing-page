import Image from "next/image";

const HeroImages = () => {
  return (
    <div className='relative mt-9 -z-[1]'>
      <div
        className='absolute sm:left-16 -top-2 animate-spin'
        style={{ animationDuration: "25s" }}
      >
        <Image
          src='/assets/images/blue orb.png'
          alt='blue orb'
          priority
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
  );
};

export default HeroImages;
