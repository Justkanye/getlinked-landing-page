import axios, { AxiosError } from "axios";
import { FormikHelpers } from "formik";
import Swal from "sweetalert2";

import { ContactFormValues } from "./form";
import { BACKEND_URL } from "@/lib/core/constants";

const alert = Swal.mixin({
  icon: "error",
});

export const handleContactRequest = (
  values: ContactFormValues,
  { setSubmitting }: FormikHelpers<ContactFormValues>
) => {
  if (!BACKEND_URL) {
    alert.fire("No API url provided. Please notify us of this error.");
    setSubmitting(false);
    return;
  }
  axios
    .post(`${BACKEND_URL}/hackathon/contact-form`, values)
    .then(
      () => {
        Swal.fire({
          title: "Your message was recieved successfully",
          icon: "success",
        });
      },
      (e: AxiosError) => {
        alert.fire(
          e?.message ?? "An error occured. Please notify us of this error."
        );
      }
    )
    .finally(() => setSubmitting(false));
};
