import { BiSolidPhoneCall } from "react-icons/bi";
import { MdLocationPin } from "react-icons/md";

import ListItem from "@/components/shared/ListItem";

const FooterContact = () => {
  return (
    <div className='md:place-self-end md:self-start'>
      <h6 className='text-primary text-sm font-semibold'>Contact Us</h6>
      <ul className='menu gap-3'>
        <ListItem Icon={<BiSolidPhoneCall className='text-xl' />}>
          <p className='text-xs'>+234 6707653444</p>
        </ListItem>
        <ListItem Icon={<MdLocationPin className='text-xl' />}>
          <p>
            27,Alara Street
            <br />
            Yaba 100012
            <br />
            Lagos State
          </p>
        </ListItem>
      </ul>
    </div>
  );
};

export default FooterContact;
