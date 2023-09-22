"use client";
import { Formik, Field } from "formik";
import { Select, Checkbox, Form } from "react-daisyui";

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

const errorClass = "text-xs text-error m-2 transition-opacity opacity-0";
const fieldClass =
  "bg-[rgba(255,255,255,0.03)] shadow-custom-shadow w-full border-white rounded";

const RegisterForm = ({ categories }: Props) => {
  return (
    <div className='rounded-xl p-10 bg-transparent md:bg-[rgba(255,255,255,0.03)] md:shadow-custom-shadow'>
      <Formik
        initialValues={registerFormInitialValues}
        validationSchema={registerFormValidationSchema}
        onSubmit={handleRegistrationRequest}
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
            </div>
            <p className='text-primary text-xs italic'>
              Please review your registration details before submitting
            </p>

            <label className='label cursor-pointer'>
              <Field
                name='privacy_poclicy_accepted'
                className='checkbox checkbox- justify-start gap-3'
                type='checkbox'
              />
              <span className='label-text'>
                I agreed with the event terms and conditions and privacy policy
              </span>
            </label>
            <CustomButton
              loading={isSubmitting}
              onClick={handleSubmit}
              className='max-md:w-fit max-md:mx-auto'
              btnText={isSubmitting ? "Submitting..." : "Register Now"}
            />
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RegisterForm;

type Props = {
  categories: Category[];
};
