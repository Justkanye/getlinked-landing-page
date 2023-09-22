import { ReactNode } from "react";

import CheckMark from "../icons/CheckMark";

const ListItem = ({ children }: { children: ReactNode }) => {
  return (
    <div className='flex items-start gap-2'>
      <CheckMark />
      {children}
    </div>
  );
};

export default ListItem;
