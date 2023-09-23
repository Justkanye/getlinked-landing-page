"use client";
import { Formik, Form, Field } from "formik";
import { PiStarFourFill } from "react-icons/pi";

import { handleContactRequest } from "@/lib/features/contact/api";
import {
  contactFormInitialValues,
  contactFormValidationSchema,
} from "@/lib/features/contact/form";
import { cn } from "@/lib/core/utils";
import CustomButton from "@/components/shared/CustomButton";

const errorClass = "text-xs text-error m-2 transition-opacity opacity-0";
const fieldClass =
  "bg-[rgba(255,255,255,0.03)] shadow-custom-shadow w-full border-white rounded";

const ContactForm = () => {
  return (
    <div className='rounded-xl w-full p-10 bg-transparent md:bg-[rgba(255,255,255,0.03)] md:shadow-custom-shadow relative'>
      <Formik
        initialValues={contactFormInitialValues}
        validationSchema={contactFormValidationSchema}
        onSubmit={handleContactRequest}
      >
        {({ isSubmitting, errors, touched, handleSubmit }) => (
          <Form className='flex flex-col gap-10' onSubmit={handleSubmit}>
            <h3 className='font-clash-display font-semibold text-xl text-primary'>
              Questions or need assistance?
              <br />
              Let us know about it!
            </h3>
            <div>
              <Field
                name='first_name'
                className={cn(fieldClass, "input input-bordered")}
                placeholder='First Name'
              />
              <p
                className={cn(errorClass, {
                  "opacity-100": errors.first_name && touched.first_name,
                })}
              >
                {errors.first_name || "error"}
              </p>
            </div>
            <div>
              <Field
                name='email'
                type='email'
                className={cn(fieldClass, "input input-bordered")}
                placeholder='Mail'
              />
              <p
                className={cn(errorClass, {
                  "opacity-100": errors.email && touched.email,
                })}
              >
                {errors.email || "error"}
              </p>
            </div>
            <div>
              <Field
                name='message'
                component='textarea'
                className={cn(fieldClass, "textarea textarea-bordered")}
                placeholder='Message'
              />
              <p
                className={cn(errorClass, {
                  "opacity-100": errors.message && touched.message,
                })}
              >
                {errors.message || "error"}
              </p>
            </div>
            <CustomButton
              loading={isSubmitting}
              onClick={handleSubmit}
              className='w-fit max-md:mx-auto'
              btnText={isSubmitting ? "Submitting..." : "Submit"}
            />
          </Form>
        )}
      </Formik>
      <PiStarFourFill className='text-xl md:text-4xl text-primary animate-pulse absolute -left-2 md:bottom-32 bottom-0' />
      <PiStarFourFill className='text-xl md:text-4xl animate-pulse absolute -right- -bottom-10' />
    </div>
  );
};

export default ContactForm;
