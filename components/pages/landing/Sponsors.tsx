import { sponsors } from "@/lib/core/constants/sponsors";
import { cn } from "@/lib/core/utils";
import Image from "next/image";

const Sponsors = () => {
  return (
    <section className='py-16 px-10 md:px-20 border-border border-t'>
      <div className='flex flex-col items-center'>
        <h3 className='font-bold font-clash-display text-xl md:text-4xl'>
          Partners and Sponsors
        </h3>
        <p className='text-sm text-center mt-4'>
          Getlinked Hackathon 1.0 is honored to have the following major
          <br className='max-md:hidden' />
          companies as its partners and sponsors
        </p>
      </div>

      <div className='rounded-[5px] bg-[rgba(255,255,255,0.01)] border border-primary flex items-center justify-center w-full py-16 px-5 mt-7'>
        <div className='grid grid-cols-3 gap-6 grid-rows-2'>
          {sponsors.map(({ alt, img }, i) => (
            <div
              key={img}
              className={cn(
                "p-3 flex items-center justify-center border-primary relative",
                {
                  "border-r-4 border-l-4": i === 1,
                  "border-t-4": [3, 5].includes(i),
                  "before:w-1 before:absolute before:left-0 before:bg-primary before:bottom-0 before:h-[90%]":
                    i === 4,
                  "after:w-1 after:absolute after:right-0 after:bg-primary after:bottom-0 after:h-[90%]":
                    i === 4,
                }
              )}
            >
              <div
                className={cn("hidden", {
                  "h-1 absolute bg-primary top-0 w-[75%] md:w-[75%] block self-center":
                    i === 4,
                })}
              />
              <Image src={img} alt={alt} width={150} height={120} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
