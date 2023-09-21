import Image from "next/image";

import { keyAttributes } from "@/lib/core/constants/keyAttributes";
import CustomButton from "@/components/shared/CustomButton";

const KeyAttributes = () => {
  return (
    <section className='grid grid-cols-1 md:grid-cols-2 py-16 px-20 border-border border-t max-md:gap-8'>
      <Image
        src='/assets/images/inspect.png'
        alt='Key attribute hero image'
        width={664}
        height={664}
      />
      <div className='flex flex-col justify-center max-md:items-center'>
        <h2 className='font-clash-display font-bold text-2xl md:text-3xl leading-none'>
          Judging Criteria
          <br />
          <span className='text-primary'>Key attributes</span>
        </h2>
        <div className='max-md:text-center'>
          {keyAttributes.map(({ content, title }, i) => (
            <p key={i} className='text-sm mt-5'>
              <span className='text-accent text-base font-bold'>{title}:</span>{" "}
              {content}
            </p>
          ))}
        </div>
        <CustomButton btnText='Read more' className='mt-8 md:self-start' />
      </div>
    </section>
  );
};

export default KeyAttributes;
