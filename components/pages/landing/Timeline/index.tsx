import Timelines from "./Timelines";

const Timeline = () => {
  return (
    <section
      className='py-16 px-10 md:px-20 border-border border-t'
      id='timeline'
    >
      <div className='flex flex-col items-center'>
        <h4 className='font-clash-display text-[32px] font-bold'>Timeline</h4>
        <p className='text-sm text-center'>
          Here is the breakdown of the time we anticipate
          <br />
          using for the upcoming event.
        </p>
      </div>
      <Timelines />
    </section>
  );
};

export default Timeline;
