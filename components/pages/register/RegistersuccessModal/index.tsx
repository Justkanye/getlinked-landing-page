"use client";
import Image from "next/image";
import { RefObject } from "react";
import Confetti from "react-confetti";

import CustomButton from "@/components/shared/CustomButton";
import useWindowSize from "@/lib/core/hooks/useWindowSize";

const RegistersuccessModal = ({ modalRef }: Props) => {
  const { height, width } = useWindowSize();

  return (
    <dialog ref={modalRef} className='modal'>
      <div className='modal-box md:h-screen bg-[rgba(255,255,255,0.01)] border border-primary rounded-md md:aspect-square flex flex-col justify-around gap-3'>
        <Image
          src='/assets/images/congratulations.png'
          alt='congratulations'
          width={700}
          height={665}
        />
        <h2 className='text-center text-base md:text-[32px] font-semibold'>
          Congratulations
          <br />
          you have successfully Registered!
        </h2>
        <p className='text-center text-xs md:text-sm font-semibold'>
          Yes, it was easy and you did it!
          <br />
          check your mail box for next step
        </p>
        <CustomButton
          btnText='Back'
          className='w-full mt-4'
          onClick={() => modalRef.current?.close()}
        />
      </div>
      <form
        method='dialog'
        className='modal-backdrop bg-[rgba(21,14,40,0.93)]'
      />
      <Confetti {...{ width, height }} />
    </dialog>
  );
};

export default RegistersuccessModal;

type Props = {
  modalRef: RefObject<HTMLDialogElement>;
};
