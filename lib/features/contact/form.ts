import * as yup from "yup";

export const contactFormInitialValues = {
  email: "",
  first_name: "",
  message: "",
};

export type ContactFormValues = typeof contactFormInitialValues;

export const contactFormValidationSchema = yup.object().shape({
  first_name: yup.string().min(3).required().label("First Name"),
  email: yup.string().required().email().label("Email"),
  message: yup.string().required().min(3).label("Your message"),
});
