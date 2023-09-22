import Image from "next/image";
import { Fragment } from "react";

const RegisterFormHead = () => {
  return (
    <Fragment>
      <h3 className='font-clash-display font-semibold text-[32px] text-primary'>
        Register
      </h3>
      <div className='flex items-end gap-2 mt-7'>
        <p className='text-sm'>Be part of this movement!</p>
        <div className='flex border-dashed border-b border-primary px-3'>
          <Image
            src='/assets/images/girl.png'
            alt='girl'
            width={30}
            height={30}
          />
          <Image
            src='/assets/images/boy.png'
            alt='boy'
            width={30}
            height={30}
          />
        </div>
      </div>
      <h1 className='text-2xl'>CREATE YOUR ACCOUNT</h1>
    </Fragment>
  );
};

export default RegisterFormHead;
