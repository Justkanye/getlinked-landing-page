import Image from "next/image";

import PriceCard from "./PriceCard";

const Prices = () => {
  return (
    <section className='py-16 px-20 border-border border-t' id='overview'>
      <div className='grid grid-cols-1 md:grid-cols-2'>
        <div />
        <div className='items-center max-md:flex flex-col'>
          <h2 className='font-clash-display font-bold text-2xl md:text-3xl leading-none'>
            Prices and
            <br />
            <span className='text-primary'>Rewards</span>
          </h2>
          <p className='text-sm mt-4 max-md:text-center'>
            Highlight of the prizes or rewards for winners and for participants.
          </p>
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-5 gap-2 items-center mt-10 md:mt-24'>
        <div className='md:col-span-2'>
          <Image
            src='/assets/images/trophy.png'
            alt='trophy'
            width={548}
            height={482}
          />
        </div>
        <div className='flex justify-center gap-3 md:col-span-3 max-md:mt-20'>
          <PriceCard
            img='/assets/images/silver_medal.png'
            pos='2nd'
            alt='silver medal'
            price='N300,000'
          />
          <PriceCard
            img='/assets/images/gold_medal.png'
            pos='1st'
            alt='silver medal'
            price='N400,000'
          />
          <PriceCard
            img='/assets/images/bronze_medal.png'
            pos='3rd'
            alt='bronze medal'
            price='N150,000'
          />
        </div>
      </div>
    </section>
  );
};

export default Prices;
