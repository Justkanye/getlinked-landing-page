import axios from "axios";
import { FormikHelpers } from "formik";

import { ContactFormValues } from "./form";
import { BACKEND_URL } from "@/lib/core/constants";

export const handleContactRequest = (
  values: ContactFormValues,
  helpers: FormikHelpers<ContactFormValues>
) => {
  console.log(values);
  axios
    .post(`${BACKEND_URL}/hackathon/contact-form`, values)
    .then(res => {
      console.log(res);
    })
    .catch(e => {
      console.log(e);
      helpers.setErrors({ message: "Failed" });
    });
};
