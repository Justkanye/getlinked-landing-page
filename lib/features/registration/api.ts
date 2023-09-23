import axios, { AxiosError } from "axios";
import Swal from "sweetalert2";

import { Category, RegisterFormValues } from "./types";
import { BACKEND_URL } from "@/lib/core/constants";
import { getRegistrationError } from "./utils";

const alert = Swal.mixin({
  icon: "error",
});

export const handleRegistrationRequest = (values: RegisterFormValues) => {
  if (!BACKEND_URL) {
    alert.fire("No API url provided. Please notify us of this error.");
    return false;
  }
  return axios.post(`${BACKEND_URL}/hackathon/registration`, values).then(
    res => {
      console.log(res);
      return true;
    },
    (e: AxiosError) => {
      console.log(e);
      const error =
        typeof e.response?.data === "object"
          ? getRegistrationError(e.response.data as any, e.message)
          : e.message;
      console.log({ error });
      alert.fire(error);
      return false;
    }
  );
};

export const getCategories = async (): Promise<Category[]> => {
  const res = await axios.get(`${BACKEND_URL}/hackathon/categories-list`);
  return res.data;
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
