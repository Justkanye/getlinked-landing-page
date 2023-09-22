"use client";
import { Formik, Form, Field } from "formik";

import { handleContactRequest } from "@/lib/features/contact/api";
import {
  contactFormInitialValues,
  contactFormValidationSchema,
} from "@/lib/features/contact/form";
import { cn } from "@/lib/core/utils";
import CustomButton from "@/components/shared/CustomButton";

const errorClass = "text-xs text-error m-2 transition-opacity opacity-0";
const style = {
  backgroundColor: "rgba(255, 255, 255, 0.03)",
  boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
};

const ContactForm = () => {
  return (
    <div
      className='rounded-xl w-full p-10 max-md:!bg-transparent max-md:!shadow-none'
      style={style}
    >
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
                className='input input-bordered w-full border-white rounded'
                placeholder='First Name'
                style={style}
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
                className='input input-bordered w-full border-white rounded'
                placeholder='Mail'
                style={style}
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
                className='textarea textarea-bordered w-full border-white rounded'
                placeholder='Message'
                style={style}
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
    </div>
  );
};

export default ContactForm;
