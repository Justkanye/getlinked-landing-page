import { ReactNode } from "react";

import CheckMark from "../icons/CheckMark";

const ListItem = ({
  children,
  Icon = <CheckMark className='h-fit max-sm:w-14' />,
}: {
  children: ReactNode;
  Icon?: ReactNode;
}) => {
  return (
    <div className='flex items-start gap-2'>
      {Icon}
      {children}
    </div>
  );
};

export default ListItem;
