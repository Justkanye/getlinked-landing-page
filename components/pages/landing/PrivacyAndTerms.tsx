import SafeGuard from "@/components/icons/SafeGuard";
import CustomButton from "@/components/shared/CustomButton";
import ListItem from "@/components/shared/ListItem";
import Image from "next/image";

const PrivacyAndTerms = () => {
  return (
    <section
      id='privacy-and-terms'
      className='grid grid-cols-1 md:grid-cols-2 py-16 px-20 border-border border-t gap-8'
    >
      <div className='flex flex-col justify-center max-md:text-center'>
        <h2 className='font-clash-display font-bold text-2xl md:text-3xl leading-none'>
          Privacy Policy and
          <br />
          <span className='text-primary'>Terms</span>
        </h2>
        <p className='text-sm mt-2'>Last updated on September 12, 2023</p>
        <p className='text-sm mt-3'>
          Below are our privacy & policy, which outline a lot of goodies. it’s
          our aim to always take of our participant
        </p>
        {/* Card */}
        <div className='rounded-[5px] bg-[rgba(217,217,217,0.03)] py-12 px-16 border border-primary mt-7 text-left flex flex-col'>
          <p className='text-sm max-md:text-center'>
            At getlinked tech Hackathon 1.0, we value your privacy and are
            committed to protecting your personal information. This Privacy
            Policy outlines how we collect, use, disclose, and safeguard your
            data when you participate in our tech hackathon event. By
            participating in our event, you consent to the practices described
            in this policy.
          </p>
          <h4 className='text-primary text-base font-bold mt-5'>
            Licensing Policy
          </h4>
          <p className='text-sm font-bold'>
            Here are terms of our Standard License:
          </p>
          <div className='flex flex-col gap-2 mt-3'>
            <ListItem>
              <p className='text-sm'>
                The Standard License grants you a non-exclusive right to
                navigate and register for our event
              </p>
            </ListItem>
            <ListItem>
              <p className='text-sm'>
                You are licensed to use the item available at any free source
                sites, for your project developement
              </p>
            </ListItem>
          </div>
          <CustomButton btnText='Read more' className='mt-8 self-center' />
        </div>
      </div>
      {/* Images */}
      <div className='flex items-end pt-16 justify-center relative'>
        <Image
          src='/assets/images/unlocked.png'
          alt='Privacy hero image'
          width={560}
          height={750}
        />
        <SafeGuard className='absolute -z-[1] top-0' />
      </div>
    </section>
  );
};

export default PrivacyAndTerms;
