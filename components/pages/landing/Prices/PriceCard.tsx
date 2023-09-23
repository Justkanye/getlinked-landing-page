import Image from "next/image";

import { cn } from "@/lib/core/utils";

const PriceCard = ({ alt, img, price, pos }: Props) => {
  const emphasize = pos === "1st";
  return (
    <div
      className={cn(
        "card border-primary border rounded-lg bg-[rgba(212,52,254,0.12)] w-24 sm:w-32 md:w-56 h-40 md:h-80 mt-10 md:mt-[90px] relative",
        {
          "mt-16 md:mt-36 -translate-y-[7%] bg-[rgba(144,58,255,0.12)] border-903aff":
            emphasize,
        }
      )}
    >
      <figure
        className={cn("absolute z-[2] aspect-square self-center")}
        style={{
          transform: `translateY(-${emphasize ? 65 : 50}%)`,
          width: `${emphasize ? 135 : 95}%`,
        }}
      >
        <Image src={img} alt={alt} fill />
      </figure>
      <div className='card-body justify-end items-center'>
        <div className='text-center'>
          <p
            className={cn("font-bold text-base md:text-4xl", {
              "md:text-[40px]": emphasize,
            })}
          >
            {pos}
          </p>
          <p className='font-semibold text-sm md:text-2xl'>Runner</p>
          <h4 className='text-sm md:text-2xl font-bold text-primary'>
            {price}
          </h4>
        </div>
      </div>
    </div>
  );
};

export default PriceCard;

type Props = {
  pos: string;
  price: string;
  img: string;
  alt: string;
};
