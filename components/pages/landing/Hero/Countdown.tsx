"use client";
import { Countdown as DaisyuiCountdown } from "react-daisyui";

const Countdown = () => {
  return (
    <div className='flex items-center gap-6'>
      <CountdownItem value={43} label='h' />
      <CountdownItem value={20} label='m' />
      <CountdownItem value={33} label='s' />
    </div>
  );
};

const CountdownItem = ({ value, label }: { value: number; label: string }) => (
  <div className='flex gap-1'>
    <DaisyuiCountdown
      className='font-unica-one text-6xl leading-[85%]'
      value={value}
    />
    <span className='self-end uppercase text-sm leading-4'>{label}</span>
  </div>
);

export default Countdown;
