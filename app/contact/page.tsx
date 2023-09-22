import { Metadata } from "next";

import ContactForm from "@/components/pages/contact/ContactForm";
import SocialIcons from "@/components/shared/SocialIcons";

export const metadata: Metadata = {
  title: "Contact - GetLinked",
};

const ContactPage = () => {
  return (
    <main className='w-4/5 py-10 m-auto grid grid-cols-1 md:grid-cols-2'>
      <div className='mx-auto max-md:order-2'>
        <div className='max-md:hidden'>
          <h1 className='text-primary font-clash-display text-[32px] font-semibold'>
            Get in touch
          </h1>
          <p className='text-base mt-3'>
            Contact
            <br />
            Information
          </p>
          <p className='text-base mt-3'>
            27,Alara Street
            <br />
            Yaba 100012
            <br />
            Lagos State
          </p>
          <p className='text-base mt-3'>Call Us : 07067981819</p>
          <p className='text-base mt-3'>
            we are open from Monday-Friday
            <br />
            08:00am - 05:00pm
          </p>
        </div>
        <p className='text-base mb-3 mt-5 text-primary max-md:text-center'>
          Share on
        </p>
        <SocialIcons textClassName='hidden' />
      </div>
      <ContactForm />
    </main>
  );
};

export default ContactPage;
