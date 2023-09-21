"use client";
import { Accordion } from "react-daisyui";

const FAQ = ({ answer, question, defaultChecked }: Props) => {
  return (
    <>
      <Accordion name='faqs' defaultChecked={defaultChecked} icon='plus'>
        <Accordion.Title className='text-primary text-base md:text-xl font-medium'>
          <span className='text-white'>{question}</span>
        </Accordion.Title>
        <Accordion.Content>
          <p className='text-gray-200 text-sm md:text-base'>{answer}</p>
        </Accordion.Content>
      </Accordion>
      <hr className='border-primary h-[1px]' />
    </>
  );
};

export default FAQ;

type Props = {
  question: string;
  answer: string;
  defaultChecked: boolean;
};
