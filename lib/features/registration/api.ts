import axios from "axios";
import { FormikHelpers } from "formik";

import { Category, RegisterFormValues } from "./types";
import { BACKEND_URL } from "@/lib/core/constants";

export const handleRegistrationRequest = (
  values: RegisterFormValues,
  helpers: FormikHelpers<RegisterFormValues>
) => {
  console.log(values);
  axios.post(`${BACKEND_URL}/hackathon/contact-form`, values).then(
    res => {
      console.log(res);
    },
    e => {
      console.log(e);
      helpers.setErrors({ team_name: "Failed" });
    }
  );
};

export const getCategories = async (): Promise<Category[]> => {
  return [
    {
      id: 1,
      name: "MOBILE",
    },
    {
      id: 2,
      name: "WEB",
    },
    {
      id: 3,
      name: "BACKEND",
    },
  ];
};
