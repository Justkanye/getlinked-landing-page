import { faqs } from "@/lib/core/constants/faqs";
import Image from "next/image";
import FAQ from "./FAQ";

const FAQs = () => {
  return (
    <section className='grid grid-cols-1 md:grid-cols-2 py-16 px-20 border-border border-t max-md:gap-8'>
      <div className='flex flex-col justify-center max-md:text-center'>
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
      </div>
      <Image
        src='/assets/images/faq.png'
        alt='FAQs hero image'
        width={664}
        height={664}
      />
    </section>
  );
};

export default FAQs;
