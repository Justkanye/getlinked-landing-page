"use client";
import { Countdown as DaisyuiCountdown } from "react-daisyui";
import ReactCountdown from "react-countdown";
import { useEffect, useState } from "react";

const Countdown = () => {
  const [canRender, setCanRender] = useState(false);
  const date = new Date("2023-10-26");

  useEffect(() => {
    if (typeof window !== "undefined") setCanRender(true);
  }, []);

  return canRender ? (
    <ReactCountdown
      date={date}
      daysInHours
      renderer={({ hours, minutes, seconds, days }) => (
        <div className='flex items-center gap-6'>
          <CountdownItem value={hours + days * 24} label='h' />
          <CountdownItem value={minutes} label='m' />
          <CountdownItem value={seconds} label='s' />
        </div>
      )}
    />
  ) : null;
};

const CountdownItem = ({ value, label }: { value: number; label: string }) => (
  <div className='flex'>
    <DaisyuiCountdown
      className='font-unica-one text-6xl leading-[85%]'
      value={value}
    />
    <span className='self-end uppercase text-sm leading-4 -translate-y-[6px]'>
      {label}
    </span>
  </div>
);

export default Countdown;
