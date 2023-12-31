const InvertedCurvedUnderline = ({
  className,
  width = 255,
  height = 17,
}: Props) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox={`0 0 255 17`}
      fill='none'
      className={className}
    >
      <path
        d='M1 14.043C43.3333 5.7097 154.4 -5.95697 254 14.043'
        stroke='#FF26B9'
        strokeWidth={5}
      />
    </svg>
  );
};

export default InvertedCurvedUnderline;

type Props = { className?: string; width?: number; height?: number };
