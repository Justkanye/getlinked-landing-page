import { cn } from "@/lib/core/utils";
import { IconBaseProps } from "react-icons";

const Twitter = ({ className }: IconBaseProps) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='19'
      height='17'
      viewBox='0 0 19 17'
      fill='none'
      className={cn("mx-1", className)}
    >
      <path d='M6.04545 0H0L7.13364 9.3619L0.388636 17H2.67727L8.19418 10.7533L12.9545 17H19L11.5658 7.2437L17.9636 0H15.675L10.5053 5.8531L6.04545 0ZM13.8182 15.3L3.45455 1.7H5.18182L15.5455 15.3H13.8182Z' />
    </svg>
  );
};

export default Twitter;