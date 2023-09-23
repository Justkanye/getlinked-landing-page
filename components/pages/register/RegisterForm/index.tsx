"use client";
import { useRef } from "react";
import { Formik, Field } from "formik";
import { Form } from "react-daisyui";

import { handleRegistrationRequest } from "@/lib/features/registration/api";
import {
  registerFormInitialValues,
  registerFormValidationSchema,
  registerTextFields,
} from "@/lib/features/registration/form";
import { cn } from "@/lib/core/utils";
import CustomButton from "@/components/shared/CustomButton";
import RegisterFormHead from "./RegisterFormHead";
import { Category } from "@/lib/features/registration/types";
import RegisterSelectFields from "./RegisterSelectFields";
import RegistersuccessModal from "../RegistersuccessModal";

const errorClass = "text-xs text-error m-2 transition-opacity opacity-0";
const fieldClass =
  "bg-[rgba(255,255,255,0.03)] shadow-custom-shadow w-full border-white rounded";

const RegisterForm = ({ categories }: Props) => {
  const ref = useRef<HTMLDialogElement>(null);
  const showModal = () => ref.current?.show();

  return (
    <div className='rounded-xl p-10 bg-transparent md:bg-[rgba(255,255,255,0.03)] md:shadow-custom-shadow'>
      <Formik
        initialValues={registerFormInitialValues}
        validationSchema={registerFormValidationSchema}
        onSubmit={async (values, { setSubmitting }) => {
          setSubmitting(true);
          const successful = await handleRegistrationRequest(values);
          setSubmitting(false);
          if (successful) showModal();
        }}
      >
        {({ isSubmitting, errors, touched, handleSubmit, values }) => (
          <Form className='flex flex-col gap-5' onSubmit={handleSubmit}>
            <RegisterFormHead />
            <div className='grid grid-cols-1 md:grid-cols-2 gap-3 mt-4'>
              {registerTextFields.map(({ name, placeholder, label }) => (
                <div key={name} className='form-control'>
                  <label htmlFor={name} className='label capitalize'>
                    {label}
                  </label>
                  <Field
                    name={name}
                    className={cn(fieldClass, "input input-bordered")}
                    placeholder={placeholder}
                    type={name === "email" ? "email" : "text"}
                  />
                  <p
                    className={cn(errorClass, {
                      "opacity-100": errors[name] && touched[name],
                    })}
                  >
                    {errors[name] || "error"}
                  </p>
                </div>
              ))}
              <RegisterSelectFields
                {...{ categories, errorClass, errors, fieldClass, touched }}
              />
            </div>
            <p className='text-primary text-xs italic'>
              Please review your registration details before submitting
            </p>
            <div className='form-control'>
              <label className='label cursor-pointer justify-start gap-3'>
                <Field
                  name='privacy_poclicy_accepted'
                  className='checkbox checkbox-primary border-white'
                  type='checkbox'
                />
                <span className='label-text'>
                  I agree with the event terms and conditions and privacy policy
                </span>
              </label>
              <p
                className={cn(errorClass, {
                  "opacity-100":
                    errors.privacy_poclicy_accepted &&
                    touched.privacy_poclicy_accepted,
                })}
              >
                {errors.privacy_poclicy_accepted || "error"}
              </p>
            </div>
            <CustomButton
              loading={isSubmitting}
              // onClick={showModal}
              className='max-md:w-fit max-md:mx-auto'
              btnText={isSubmitting ? "Submitting..." : "Register Now"}
            />
          </Form>
        )}
      </Formik>
      <RegistersuccessModal modalRef={ref} />
    </div>
  );
};

export default RegisterForm;

type Props = {
  categories: Category[];
};
