import { ReactNode } from "react";

import CheckMark from "../icons/CheckMark";

const ListItem = ({
  children,
  Icon = <CheckMark />,
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
