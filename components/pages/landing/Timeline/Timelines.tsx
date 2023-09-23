"use client";
import "react-vertical-timeline-component/style.min.css";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import { timelines } from "@/lib/core/constants/timeline";

const Timelines = () => {
  return (
    <div className='mt-5 md:mt-10'>
      <VerticalTimeline lineColor='var(--primary)'>
        {timelines.map(({ body, date, title }, i) => {
          return (
            <VerticalTimelineElement
              key={i}
              date={date}
              icon={<p>{i + 1}</p>}
              visible={process.env.NODE_ENV !== "production"}
              dateClassName='text-primary !text-2xl !font-bold'
              contentStyle={{
                backgroundColor: "transparent",
                boxShadow: "none",
              }}
              contentArrowStyle={{
                display: "none",
              }}
              iconClassName='bg-primary flex items-center justify-center !shadow-none border-primary-bg border-[10px] text-2xl font-bold !w-[63px] !h-[63px] max-md:!-translate-x-[10px]'
            >
              <h4 className='text-primary text-2xl font-bold'>{title}</h4>
              <p className='text-base'>{body}</p>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
  );
};

export default Timelines;
